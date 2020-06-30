// https://codesandbox.io/s/framer-motion-side-menu-mx2rw?fontsize=14&module=%2Fsrc%2FExample.tsx
import React, { useContext } from "react";
import styled from "styled-components";
import { withRouter } from "next/router";
import Link from "next/link";
import { StateContext } from "../Context.js";
import getProfile from "../hooks/getProfile.js";
import {
	UserIcon,
	SongIcon,
	LogoutIcon,
	ArtistIcon,
	PlayIcon,
	SpeakerIcon
} from "../SVG";

const Container = styled.div`
	width: 150px;
	height: 100%;
	background: ${({ theme }) => theme.greys.darkest};
	position: fixed;
`;

const Nav = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	padding: 20px;
	height: 600px;
`;

const NavItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0.5rem;
	width: fit-content;
	cursor: pointer;
	transition: all 0.2s ease-out;

	p {
		color: ${({ active, theme }) =>
			active ? theme.yellow : theme.greys.white};
		margin-top: 1rem;
		transition: all 0.2s ease-out;
	}

	svg {
		stroke: ${({ active, theme }) =>
			active ? theme.yellow : theme.greys.white};
		transition: all 0.2s ease-out;
	}

	&:hover {
		svg {
			stroke: ${({ theme, active }) => !active && theme.whites.darkest};
		}

		p {
			color: ${({ theme, active }) => !active && theme.whites.darkest};
		}
	}
`;

const NavLabel = styled.p``;

const NavLink = ({ to, icon, label, currentTab }) => (
	<Link href={to}>
		<NavItem active={currentTab === to}>
			{icon}
			<NavLabel>{label}</NavLabel>
		</NavItem>
	</Link>
);

const Navigation = ({ router }) => {
	const currentTab = router.route;

	return (
		<Container>
			<Nav>
				<NavLink
					to="/profile"
					icon={UserIcon}
					label="Min Profil"
					currentTab={currentTab}
				/>

				<NavLink
					to="/playback"
					icon={SpeakerIcon}
					label="Playback"
					currentTab={currentTab}
				/>

				<NavLink
					to="/song"
					icon={SongIcon}
					label="Låt"
					currentTab={currentTab}
				/>

				<NavLink
					to="/artist"
					icon={ArtistIcon}
					label="Artist"
					currentTab={currentTab}
				/>
			</Nav>
		</Container>
	);
};

export default withRouter(Navigation);
