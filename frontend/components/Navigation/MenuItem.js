import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Link from "next/link";

const ListItem = styled.div`
	border-radius: 3px;
	text-align: center;
	font-size: 18px;
`;

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 }
		}
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 }
		}
	}
};

export const MenuItem = ({ path, title, icon, id }) => {
	return (
		<motion.li
			variants={variants}
			whileHover={{ x: "10px" }}
			whileTap={{ scale: 0.95 }}
		>
			<div>{icon}</div>
			<Link href={path}>
				<ListItem>
					<a>{title}</a>
				</ListItem>
			</Link>
		</motion.li>
	);
};
