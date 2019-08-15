import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Page, { Inner } from "../components/Page";
// import LoginSpotify from "../components/auth/AuthSpotify";
import { StateContext } from "../components/Context";
import DisplayData from "../components/DisplayData";
import useLogin from "../components/hooks/useLogin";
import useCurrentSong from "../components/hooks/useCurrentSong";

const LandingpageBackground = styled(Inner)`
	background: linear-gradient(135deg, #303134 0%, #202022 100%);
	display: flex;
	align-items: center;
	flex-direction: column;
`;

export default function PlaybackPage() {
	useLogin();
	const { song } = useCurrentSong();
	return (
		<Page>
			<LandingpageBackground>
				{console.log(song)}
				<h1>Hello Sir!</h1>
				{/* {song && <DisplayData song={song} />} */}
				{!song.name && <h2>Sätt på en låt förfan</h2>}
			</LandingpageBackground>
		</Page>
	);
}
