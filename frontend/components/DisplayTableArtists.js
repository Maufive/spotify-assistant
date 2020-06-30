import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { motion } from "framer-motion";
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
  width: 100%;
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
	color: ${({ theme }) => theme.greys.light};
	margin-left: 5px;
`;

const DisplayTableArtists = ({ data }) => {
	let int = 0;
	console.log(data);
	if (!data.items) return null;
	return (
		<TableStyles variants={parentSettings} animate="enter" initial="initial">
			<tbody>
				<TableRowTitles>
					<th />
					<th>Rank</th>
					<th>Name</th>
					<th>
						Popularity <Smaller>(0 - 100)</Smaller>
					</th>
					<th>Followers</th>
				</TableRowTitles>
				{data.items.map(artist => {
					int++;
					return (
						<TableRow
							key={artist.id}
							variants={childSettings}
							whileHover="hover"
						>
							<td>
								<img
									src={artist.images && artist.images[2].url}
									style={{ marginTop: "10px" }}
								/>
							</td>
							<td>#{int}</td>
							<td>
								<span>{artist.name}</span>
							</td>
							<td>{artist.popularity}</td>
							<td>
								{artist.followers &&
									artist.followers.total
										.toString()
										.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
							</td>
						</TableRow>
					);
				})}
			</tbody>
		</TableStyles>
	);
};

export default DisplayTableArtists;
