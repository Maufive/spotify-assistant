import React from "react";
import { withRouter } from "next/router";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { Inner } from "../components/Page";
import LoginSpotify from "../components/auth/AuthSpotify";
import useHashTokens from "../components/hooks/useHashTokens";
import cookie from "js-cookie";

const LandingpageBackground = styled(Inner)`
	/* background: linear-gradient(135deg, #303134 0%, #202022 100%); */
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-left: 0;
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
	text-transform: uppercase;
	font-weight: 400;
	/* background: linear-gradient(
		to right,
		${props => props.theme.yellowTints.lighter},
		${props => props.theme.yellowTints.darker}
	);
	-webkit-background-clip: text;
	background-clip: text; */
	color: ${({ theme }) => theme.whites.light};
	/* color: transparent; */
	/* -webkit-text-fill-color: transparent; */
	letter-spacing: 4px;
	margin-block-start: 0px;
	
	animation: ${flow} 2s ease-in-out infinite;
	background-size: 300%;
`;

function Home({ token, router }) {
	useHashTokens();
	console.log(token);

	return (
		<LandingpageBackground>
			<Title>SPOTIFY ASSISTANT</Title>
			<LoginSpotify />
		</LandingpageBackground>
	);
}

Home.getInitialProps = async function(ctx) {
	const token = cookie.get("token");

	return {
		token
	};
};

export default withRouter(Home);
