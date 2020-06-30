import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import DisplayTableTracks from "../components/DisplayTableTracks";
import DisplayTableArtists from "../components/DisplayTableArtists";
import useProfile from "../components/hooks/useProfile";
import cookie from "js-cookie";
import { SongIcon, ArtistIcon } from "../components/SVG";
import MusicPlayer from "../components/MusicPlayer";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${({ theme }) => theme.greys.light};
	width: 100%;
	padding: 5rem 0;
`;

const Select = styled.select`
	display: block;
	font-size: 14px;
	color: ${({ theme }) => theme.whites.grey};
	line-height: 1.3;
	padding: 0.6em 2.4em 0.5em 0.8em;
	width: 100%;
	max-width: 100%;
	box-sizing: border-box;
	margin: 0;
	/* border: 1px solid ${({ theme }) => theme.greys.dark}; */
	border: 1px solid ${({ theme }) => theme.greys.dark};
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
	background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='50' fill='%23ffc600'><polygon points='0,0 100,0 50,50'/></svg>");
	background-size: 0.7em;
	background-position: calc(100% - 1em);
	background-repeat: no-repeat;

	&:focus {
		border-color: ${({ theme }) => theme.greys.dark};
		box-shadow: 0 0 1px 3px rgba(255, 198, 0, 0.7);
		box-shadow: 0 0 0 3px -moz-mac-focusring;
		color: ${({ theme }) => theme.whites.grey};
		outline: none;
	}

	option {
		font-weight: normal;
	}
`;

const SelectContainer = styled.div`
	display: flex;
	align-items: center;
	margin-right: 5rem;

	label {
		color: ${({ theme }) => theme.greys.lightest};
		margin-right: 1rem;
	}
`;

const Filters = styled.div`
	display: flex;
	background: ${({ theme }) => theme.greys.darkest};
	width: 100%;
	margin-bottom: 1px;
	padding: 15px 20px;
`;

const FilterButton = styled(motion.div)`
	display: flex;
	align-items: center;
	margin-right: 5rem;
	cursor: pointer;

	svg {
		margin-right: 1rem;
		stroke: ${({ active, theme }) =>
			active ? theme.yellow : theme.greys.white};
		transition: all 0.2s ease-out;
	}

	p {
		color: ${({ active, theme }) =>
			active ? theme.yellow : theme.greys.white};
		transition: all 0.2s ease-out;
	}
	&:hover {
		p {
			color: ${({ theme, active }) => !active && theme.whites.darkest};
		}
		svg {
			stroke: ${({ theme, active }) => !active && theme.whites.darkest};
		}
	}
`;

const ProfileInfoContainer = styled.div`
	background: ${({ theme }) => theme.greys.darkest};
	width: 100%;
	margin-bottom: 5rem;
	padding: 20px;
	display: flex;
	align-items: center;

	> img {
		margin-right: 20px;
		height: 50px;
		width: 50px;
		border-radius: 50%;
	}
`;

const ProfileNameWrapper = styled.div`
	flex: 1;
	h3 {
		font-family: "Open Sans";
		color: ${({ theme }) => theme.whites.darker};
		text-transform: uppercase;
	}
	h4 {
		color: ${({ theme }) => theme.greys.white};
		font-weight: 400;
	}
`;

const CurrentSongWrapper = styled.div`
	flex: 5;
	/* border: 2px solid red; */
	justify-self: end;
`;

function ProfilePage({ token }) {
	const [period, setPeriod] = useState("short_term");
	const [limit, setLimit] = useState(10);
	const [type, setType] = useState("tracks");
	const [apiData, setApiData] = useState(null);
	const [artistsData, setArtistsData] = useState(null);
	const [tracksData, setTracksData] = useState(null);
	const [isLoading, setLoading] = useState(false);
	const { data } = useProfile(token);
	const { profile, tracks, artists, recentlyPlayed } = data;
	// const test = recentlyPlayed.items.slice(0, 5);

	// useEffect(() => {
	// 	fetchData();
	// });

	useEffect(() => {
		type === "tracks" && fetchTracksData();
		type === "artists" && fetchArtistsData();
	}, [period, limit, type]);

	const onChangePeriod = event => {
		setPeriod(event.target.value);
	};

	const onChangeLimit = event => {
		setLimit(event.target.value);
	};

	const onClickType = type => {
		setLoading(true);
		setType(type);
		type === "tracks" && fetchTracksData();
		type === "artists" && fetchArtistsData();
	};

	const fetchTracksData = async () => {
		const response = await fetch(
			`https://api.spotify.com/v1/me/top/tracks?time_range=${period}&limit=${limit}`,
			{
				headers: {
					Authorization: "Bearer " + token
				}
			}
		)
			.then(res => res.json())
			.then(res => {
				setArtistsData(null);
				setTracksData(res);
			});
		setLoading(false);
		return response;
	};
	const fetchArtistsData = async () => {
		const response = await fetch(
			`https://api.spotify.com/v1/me/top/artists?time_range=${period}&limit=${limit}`,
			{
				headers: {
					Authorization: "Bearer " + token
				}
			}
		)
			.then(res => res.json())
			.then(res => {
				setTracksData(null);
				setArtistsData(res);
			});
		setLoading(false);
		return response;
	};

	if (!profile || !tracks) return null;
	return (
		<Wrapper>
			<ProfileInfoContainer>
				{/* <img src={profile.images[0].url} alt="Profile" />
				<ProfileNameWrapper>
					<h3>{profile.display_name}</h3>
					<h4>{profile.followers.total} följare på Spotify</h4>
				</ProfileNameWrapper> */}
				<CurrentSongWrapper>
					<MusicPlayer token={token} />
				</CurrentSongWrapper>
			</ProfileInfoContainer>
			<Filters>
				<FilterButton
					active={type === "tracks"}
					onClick={() => onClickType("tracks")}
				>
					{SongIcon}
					<p>Låtar</p>
				</FilterButton>
				<FilterButton
					active={type === "artists"}
					onClick={() => onClickType("artists")}
				>
					{ArtistIcon}
					<p>Artister</p>
				</FilterButton>
				<SelectContainer>
					<label htmlFor="period">Period:</label>
					<Select name="period" value={period} onChange={onChangePeriod}>
						<option value="short_term">Senaste månaden</option>
						<option value="medium_term">Senaste året</option>
						<option value="long_term">All time</option>
					</Select>
				</SelectContainer>
				<SelectContainer>
					<label htmlFor="limit">Limit</label>
					<Select name="limit" value={limit} onChange={onChangeLimit}>
						<option value={10}>10</option>
						<option value={20}>20</option>
						<option value={50}>50</option>
					</Select>
				</SelectContainer>
			</Filters>
			{type === "tracks" && tracksData && !isLoading && (
				<DisplayTableTracks data={tracksData} accessToken={token} />
			)}
			{type === "artists" && artistsData && !isLoading && (
				<DisplayTableArtists data={artistsData} />
			)}
		</Wrapper>
	);
}

ProfilePage.getInitialProps = async () => {
	const token = cookie.get("token");

	return {
		token
	};
};

export default ProfilePage;
