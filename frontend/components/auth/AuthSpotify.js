import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";
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
