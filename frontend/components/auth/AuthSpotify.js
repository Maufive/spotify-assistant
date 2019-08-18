import { useContext } from "react";
import Link from "next/link";
import axios from "axios";
import { TokenContext } from "../Context";
import styled from "styled-components";
import { motion } from "framer-motion";
import useLogin from "../hooks/useLogin";
import { LoginButton } from "../Buttons";

export const authEndpoint = "https://accounts.spotify.com/authorize?";

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
		<Container
			whileHover={{ y: "-3px" }}
			transition={{ type: "spring", stiffness: 300, damping: 200 }}
		>
			<LoginButton>
				<Link href="http://localhost:2093/auth/login">
					<a>LOGIN WITH SPOTIFY</a>
				</Link>
			</LoginButton>
		</Container>
	);
}
