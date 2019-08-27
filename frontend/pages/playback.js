import React, { useState } from "react";
import styled from "styled-components";
import useLogin from "../components/hooks/useLogin";
import { useGenius } from "../components/hooks/useGenius";
import useCurrentSong from "../components/hooks/useCurrentSong";
import PlaybackNavigation from "../components/PlaybackNavigation";
import DisplayLyrics from "../components/DisplayLyrics";
import DisplayAbout from "../components/DisplayAbout";
import DisplayRelated from "../components/DisplayRelated";

const Wrapper = styled.div`
	width: 700px;
	height: 100%;
	padding: 10vh 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	color: ${props => props.theme.anotherGrey};
`;

const SongDetailsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 10rem;
`;

const Details = styled.div`
	display: flex;
	flex-direction: column;
	margin: 3rem;

	span {
		font-weight: 400;
	}
	h2,
	h3,
	span {
		color: ${props => props.theme.white};
		font-family: "Open Sans";
	}
	* {
		margin-block-end: 0;
		margin-block-start: 0;
		margin-inline-end: 0;
		margin-inline-start: 0;
	}
`;

const AlbumCover = styled.img`
	max-width: 200px;
	max-height: 200px;
	margin: 3rem;
	box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.3);
`;

const AboutWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 600px;
`;

export default function PlaybackPage() {
	const [currentTab, setCurrentTab] = useState("about");
	useLogin();
	const { song } = useCurrentSong();
	const { genius } = useGenius(song);
	// if (genius.response) {
	// 	const { test } = composePlayback(genius.response.song, song.item);
	// }
	if (!genius.response) return null;
	if (genius.response) {
		const track = song.item;
		const geniusData = genius.response.song;
		return (
			<Wrapper>
				<SongDetailsContainer>
					<AlbumCover src={track.album.images[1].url} />
					<Details>
						<p>NOW PLAYING:</p>
						<h2>{track.name}</h2>
						<h3>{track.artists[0].name}</h3>
						<p>
							Album <span>{track.album.name}</span>
						</p>
						<p>
							Release date <span>{genius.response.song.release_date}</span>
						</p>
					</Details>
				</SongDetailsContainer>
				<PlaybackNavigation
					currentTab={currentTab}
					setCurrentTab={setCurrentTab}
				/>
				{currentTab === "about" && (
					<AboutWrapper>
						<DisplayAbout song={geniusData} />
					</AboutWrapper>
				)}
				{currentTab === "lyrics" && (
					<AboutWrapper>
						<DisplayLyrics genius={geniusData} />
					</AboutWrapper>
				)}
				{currentTab === "related" && (
					<AboutWrapper>
						<DisplayRelated song={geniusData} />
					</AboutWrapper>
				)}
			</Wrapper>
		);
	}
}
