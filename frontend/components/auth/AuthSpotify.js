import { useContext } from "react";
import Link from "next/link";
import axios from "axios";
import { TokenContext } from "../Context";
import styled from "styled-components";
import { motion } from "framer-motion";
import useLogin from "../hooks/useLogin";

export const authEndpoint = "https://accounts.spotify.com/authorize?";

const LoginButton = styled(Link)`
	font-family: "Open Sans";
	font-weight: 400;
	text-transform: uppercase;
	background: none;
	border: none;
	color: ${props => props.theme.anotherGrey};
	font-size: 2rem;
	transition: all 300ms ease-out;
	&:hover {
		cursor: pointer;
	}
`;

const Underline = styled.span`
	width: 100%;
	height: 2px;
	background: ${props => props.theme.anotherGrey};
	margin-top: 5px;
	transition: all 300ms ease-out;
`;

const Container = styled(motion.div)`
	display: flex;
	flex-direction: column;
	&:hover {
		button {
			color: ${props => props.theme.white};
		}
		span {
			background: ${props => props.theme.yellow};
		}
	}
`;

export default function LoginSpotify() {
	// const { token } = useLogin();

	const requestLogin = async () => {
		const response = await axios
			.get("http://localhost:2093/auth/login")
			.then(result => console.log(result));
	};

	return (
		<div>
			{/* <a
				href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
					"%20"
				)}&response_type=token&show_dialog=true`}
			> */}
			<Container
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				transition={{ type: "spring", stiffness: 200 }}
			>
				<LoginButton href="http://localhost:2093/auth/login">
					<a>LOGIN WITH SPOTIFY</a>
				</LoginButton>
				<Underline />
			</Container>
			{/* </a> */}
		</div>
	);
}
