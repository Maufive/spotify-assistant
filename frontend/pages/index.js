import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import Page, { Inner } from "../components/Page";
import LoginSpotify from "../components/auth/AuthSpotify";

const LandingpageBackground = styled(Inner)`
	background: linear-gradient(135deg, #303134 0%, #202022 100%);
	display: flex;
	align-items: center;
	width: ${props => props.theme.maxWidth};
	flex-direction: column;
`;

const flow = keyframes`
  0% {
        background-position: 0 50%;
    }

		50% {
			background-position: 100% 50%;
		}

    100% {
        background-position: 0 50%;
    }
  }
`;

const Title = styled(motion.h1)`
	font-size: 4rem;
	text-transform: uppercase;
	font-weight: 400;
	/* background: linear-gradient(
		to right,
		${props => props.theme.yellowTints.lighter},
		${props => props.theme.yellowTints.darker}
	);
	-webkit-background-clip: text;
	background-clip: text; */
	color: ${props => props.theme.white};
	/* color: transparent; */
	/* -webkit-text-fill-color: transparent; */
	letter-spacing: 4px;
	margin-block-start: 0px;
	margin: 20rem 0 10rem 0; // Change this later
	animation: ${flow} 2s ease-in-out infinite;
	background-size: 300%;
`;

export default class Home extends React.Component {
	render() {
		return (
			<Page>
				<LandingpageBackground>
					<Title>SPOTIFY ASSISTANT</Title>
					<LoginSpotify />
				</LandingpageBackground>
			</Page>
		);
	}
}
