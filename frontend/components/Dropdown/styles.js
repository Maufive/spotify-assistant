import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
	display: flex;
	align-items: center;
	position: relative;
`;

export const Background = styled(motion.div)`
	position: absolute;
	left: 0;
	top: 0;
	z-index: 1;
	width: 100%;
	height: 50px;
`;

export const DropdownHeading = styled(motion.div)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	z-index: 3;
	padding: 0 20px;
	> * {
		padding: 0 20px;
		transform-origin: center;
	}
`;

export const Content = styled(motion.div)`
	width: 100%;
	z-index: 2;
	display: flex;
	flex-direction: column;
`;

export const List = styled(motion.ul)`
	background: palevioletred;
	width: 100%;
	z-index: 2;
	position: absolute;
	left: 0;
	top: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding-top: 60px;
	padding-inline-start: 0px;
	list-style: none;
`;

export const ListItem = styled(motion.li)`
	text-transform: uppercase;
	font-weight: 700;
	color: #ccc;
	padding: 5px 20px;
	margin-bottom: 30px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;

	> div span {
		margin-right: 10px;
		color: ${props => props.theme.yellow};
	}
`;
