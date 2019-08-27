import * as React from "react";
import { withRouter } from "next/router";
import { motion } from "framer-motion";
import styled from "styled-components";
import Link from "next/link";

const ListItem = styled.li`
	list-style: none;
	display: flex;
	align-items: center;
	width: 100%;
	/* background: ${props =>
		props.active ? props.theme.yellowTints.lighter : null}; */
	cursor: pointer;
	margin-bottom: 10px;

	div {
		display: flex;
		align-items: center;
		padding: 5px 10px;
		div a,
		svg {
			color: ${props => props.theme.whites.dark};
			color: ${props => (props.active ? props.theme.whites.light : null)};
			stroke: ${props => props.theme.whites.dark};
			stroke: ${props => (props.active ? props.theme.whites.light : null)};
		}
	}
`;

const ListItem__title = styled.div`
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

const MenuItem = ({ path, title, icon, id, router }) => {
	const currentTab = router.route;

	return (
		<ListItem active={currentTab === path}>
			<motion.div
				variants={variants}
				whileHover={{ x: "10px" }}
				whileTap={{ scale: 0.95 }}
			>
				<div>{icon}</div>
				<Link href={path}>
					<ListItem__title>
						<a>{title}</a>
					</ListItem__title>
				</Link>
			</motion.div>
		</ListItem>
	);
};

export default withRouter(MenuItem);
