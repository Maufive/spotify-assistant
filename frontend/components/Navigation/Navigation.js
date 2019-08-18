// https://codesandbox.io/s/framer-motion-side-menu-mx2rw?fontsize=14&module=%2Fsrc%2FExample.tsx
import * as React from "react";
import { useRef } from "react";
import styled from "styled-components";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navbar } from "./Navbar";

const Nav = styled(motion.nav)`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: 300px;

	button {
		outline: none;
		border: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		cursor: pointer;
		position: absolute;
		top: 18px;
		left: 15px;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: transparent;
	}

	ul,
	li {
		margin: 0;
		padding: 0;
	}

	ul {
		padding: 25px;
		position: absolute;
		top: 100px;
		width: 280px;
	}

	li {
		list-style: none;
		margin-bottom: 20px;
		display: flex;
		width: 100%;
		align-items: center;
		cursor: pointer;

		div {
			display: flex;
			align-items: center;
			margin-right: 20px;
		}
	}

	.icon-placeholder {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		flex: 40px 0;
		margin-right: 20px;
		border: 2px solid #f86624;
	}

	.refresh {
		padding: 10px;
		position: absolute;
		background: rgba(0, 0, 0, 0.4);
		border-radius: 10px;
		width: 20px;
		height: 20px;
		top: 10px;
		right: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
`;

const Background = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: 300px;
	background: ${props => props.theme.yellow};
`;

const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
		transition: {
			type: "spring",
			stiffness: 20,
			restDelta: 2
		}
	}),
	closed: {
		clipPath: "circle(30px at 40px 40px)",
		transition: {
			delay: 0.3,
			type: "spring",
			stiffness: 400,
			damping: 40
		}
	}
};

export const Navigation = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);

	return (
		<Nav
			initial={false}
			animate={isOpen ? "open" : "closed"}
			custom={height}
			ref={containerRef}
		>
			<Background variants={sidebar} />
			<Navbar isOpen={isOpen} />
			<MenuToggle toggle={() => toggleOpen()} />
		</Nav>
	);
};
