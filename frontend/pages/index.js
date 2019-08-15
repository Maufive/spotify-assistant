import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import Page, { Inner } from "../components/Page";
import LoginSpotify from "../components/auth/AuthSpotify";
import { TokenConsumer } from "../components/Context";
import DisplayData from "../components/DisplayData";

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
	font-weight: 700;
	display: inline-block;
	background: linear-gradient(
		to right,
		${props => props.theme.titleGradient.from},
		${props => props.theme.titleGradient.to}
	);
	-webkit-background-clip: text;
	background-clip: text;
	color: transparent;
	-webkit-text-fill-color: transparent;
	letter-spacing: 2px;
	margin-block-start: 0px;
	margin-top: 20rem; // Change this later

	animation: ${flow} 2s ease-in-out infinite;
	background-size: 300%;
`;

export default function Home() {
	return (
		<Page>
			<LandingpageBackground>
				<Title>SPOTIFY ASSISTANT</Title>
				<LoginSpotify />
			</LandingpageBackground>
		</Page>
	);
}

{
	/* {state => (
	<div>
		{state.genius.data && <DisplayData genius={state.genius} />}
	</div>
)} */
}
