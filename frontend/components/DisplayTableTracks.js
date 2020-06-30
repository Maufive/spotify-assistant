import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { motion } from "framer-motion";
import { StateContext } from "./Context";
import useCurrentSong from "./hooks/useCurrentSong";
import AnimatedSpeaker from "./AnimatedSpeaker";
import { PlayIcon } from "./ReactSVG";

const parentSettings = {
	enter: {
		transition: {
			staggerChildren: 0.07,
			delayChildren: 0.25
		}
	},
	initial: {
		transition: { staggerChildren: 0.025, staggerDirection: -1 }
	}
};

const childSettings = {
	enter: {
		opacity: 1,
		y: 0,
		transition: {
			y: { type: "spring", damping: 20 }
		}
	},
	initial: {
		opacity: 0,
		y: "-20px",
		transition: {
			y: { type: "spring", damping: 20 }
		}
	}
};

const TableStyles = styled(motion.table)`
	
	background-color: ${({ theme }) => theme.greys.darkest};
	color: ${({ theme }) => theme.whites.darkest};
	border-collapse: collapse;

	tr:nth-child(odd) {
		/* background-color: ${({ theme }) => theme.greys.dark}; */
	}

	td {
		padding: 20px 20px;
	}

	th {
		text-align: left;
		padding: 15px 20px;
    color: ${({ theme }) => theme.greys.white};
	}

	img {
		height: 30px;
		width: 30px;
		border-radius: 50%;
	}
`;

const TableRow = styled(motion.tr)`
	/* border-bottom: 1px solid ${({ theme }) => theme.greys.black}; */
  background-color: ${({ theme }) => theme.greys.darkest};
  &:hover {
    background-color: ${({ theme }) => theme.greys.dark};
  }
`;

const TableRowTitles = styled(TableRow)`
	&:hover {
		background-color: ${({ theme }) => theme.greys.darkest};
	}
`;

const Smaller = styled.span`
	color: ${({ theme }) => theme.greys.white};
`;

const DisplayTableTracks = ({ data, accessToken }) => {
	const [currentSong, setCurrentSong] = useState(false);
	const { song } = useCurrentSong(accessToken);
	const { setSong } = useContext(StateContext);

	// När komponenten mountas, sätt den nuvarande låten som spelas till currentSong
	// Körs både när setCurrentSong blir anropad samt när "song" kommer in från hooken
	useEffect(() => {
		if (song.item) {
			setCurrentSong(song.item);
		}
	}, [setCurrentSong, song]);

	let int = 0;

	const onClickPlayIcon = async item => {
		const body = {
			uris: [item.uri]
		};

		const headers = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken}`
			}
		};

		const response = await axios
			.put(`https://api.spotify.com/v1/me/player/play`, body, headers)
			.then(res => {
				if (res.status === 204) {
					setSong(item);
					setCurrentSong(item);
				}
				return;
			})
			.catch(res => console.log(res));
	};

	return (
		<TableStyles variants={parentSettings} animate="enter" initial="initial">
			<tbody>
				<TableRowTitles>
					<th />
					<th>Rank</th>
					<th>Name</th>
					<th>Album</th>
					<th>Play</th>
				</TableRowTitles>
				{data.items.map(track => {
					int++;
					return (
						<TableRow
							key={track.id}
							variants={childSettings}
							whileHover="hover"
						>
							<td>
								<img
									src={track.album.images[2].url}
									style={{ marginTop: "10px" }}
								/>
							</td>
							<td>#{int}</td>
							<td>
								<span>{track.name}</span> -{" "}
								<Smaller>{track.artists[0].name}</Smaller>
							</td>
							<td>{track.album.name}</td>
							<td>
								{currentSong && track.name === currentSong.name ? (
									<AnimatedSpeaker size={30} color="#ffc600" />
								) : (
									<PlayIcon
										size={20}
										color="#818181"
										uri={track.uri}
										onClick={() => onClickPlayIcon(track)}
									/>
								)}
							</td>
						</TableRow>
					);
				})}
			</tbody>
		</TableStyles>
	);
};

export default DisplayTableTracks;
