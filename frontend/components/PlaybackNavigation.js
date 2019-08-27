import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const SongDetailsNavigation = styled.nav`
	display: flex;
	justify-content: space-between;
	width: 600px;
	margin-bottom: 3rem;
	/* border-bottom: 2px solid ${props => props.theme.anotherGrey}; */
`;

const NavigationItemStyle = styled.h3`
	border-bottom: ${props =>
		props.isActive ? `2px solid ${props.theme.yellow}` : null};
	margin-block-end: 0;
	margin-block-start: 0;
	margin-inline-end: 0;
	margin-inline-start: 0;
	cursor: pointer;
`;

const NavigationItem = motion.custom(NavigationItemStyle);

const variants = {
	enter: {
		color: "#fff",
		fontWeight: "700"
	},
	exit: {
		color: "#818181",
		fontWeight: "400"
	}
};

const spring = { type: "spring", stiffness: 200, damping: 100 };

export default function PlaybackNavigation({ currentTab, setCurrentTab }) {
	const changeTab = tab => {
		setCurrentTab(tab);
	};

	return (
		<SongDetailsNavigation>
			<NavigationItem
				isActive={currentTab === "about"}
				whileHover={{ color: "#fff" }}
				onClick={() => changeTab("about")}
				variants={variants}
				animate={currentTab === "about" ? "enter" : "exit"}
				initial="enter"
				transition={spring}
			>
				About
			</NavigationItem>
			<NavigationItem
				isActive={currentTab === "lyrics"}
				whileHover={{ color: "#fff" }}
				onClick={() => changeTab("lyrics")}
				variants={variants}
				animate={currentTab === "lyrics" ? "enter" : "exit"}
				initial="exit"
				transition={spring}
			>
				Lyrics
			</NavigationItem>
			<NavigationItem
				isActive={currentTab === "related"}
				whileHover={{ color: "#fff" }}
				onClick={() => changeTab("related")}
				variants={variants}
				animate={currentTab === "related" ? "enter" : "exit"}
				initial="exit"
				transition={spring}
			>
				Related
			</NavigationItem>
		</SongDetailsNavigation>
	);
}
