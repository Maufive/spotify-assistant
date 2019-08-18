import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { UserIcon, SongIcon, LogoutIcon, ArtistIcon, PlayIcon } from "../SVG";

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 }
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 }
	}
};

export const Navbar = () => (
	<motion.ul variants={variants}>
		{items.map(item => (
			<MenuItem
				key={item.id}
				i={item.id}
				path={item.path}
				icon={item.icon}
				title={item.title}
			/>
		))}
	</motion.ul>
);

const items = [
	{
		path: "/profile",
		title: "Min profil",
		icon: UserIcon,
		id: 1
	},
	{
		path: "/playback",
		title: "Playback",
		icon: PlayIcon,
		id: 2
	},
	{
		path: "/artist",
		title: "Artist",
		icon: ArtistIcon,
		id: 3
	},
	{
		path: "/song",
		title: "Låt",
		icon: SongIcon,
		id: 4
	},
	{
		path: "/logout",
		title: "Logga ut",
		icon: LogoutIcon,
		id: 5
	}
];
