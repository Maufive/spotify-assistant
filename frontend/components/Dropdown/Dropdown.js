import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "../ReactSVG";
import {
	Wrapper,
	Background,
	DropdownHeading,
	Content,
	List,
	ListItem
} from "./styles";

const headingVariants = {
	open: {
		backgroundColor: "#323232",
		color: "#ffc600"
	},
	closed: {
		backgroundColor: "#323232",
		color: "#818181"
	}
};

const containerVariants = {
	open: {
		transition: {
			staggerChildren: 0.07,
			delayChildren: 0.25
		}
	},
	closed: {
		transition: { staggerChildren: 0.025, staggerDirection: -1 }
	}
};

const variants = {
	open: {
		opacity: 1,
		y: 0,
		transition: {
			y: { type: "spring", stiffness: 500, damping: 20 }
		},
		transitionEnd: {
			display: "flex"
		}
	},
	closed: {
		opacity: 0,
		y: "-30px",
		transition: { y: { type: "spring", stiffness: 500, damping: 200 } }
	},
	transitionEnd: {
		display: "none"
	}
};

const backgroundVariants = {
	backgroundOpen: {
		opacity: 1
	},
	backgroundClosed: {
		opacity: 0,
		transition: {
			delay: 0.7
		}
	}
};

// const chevronVariants = {
// 	chevronOpen: { transform: "rotate(180deg)" },
// 	chevronClosed: { transform: "rotate(0deg)" }
// };

const Dropdown = ({ labels, callback }) => {
	const [isOpen, setOpen] = useState(false);

	const onClickChevron = () => {
		setOpen(!isOpen);
	};

	return (
		<Wrapper
			variants={containerVariants}
			initial="closed"
			animate={isOpen ? "open" : "closed"}
		>
			<Background
				variants={backgroundVariants}
				initial="backgroundClosed"
				animate={isOpen ? "backgroundOpen" : "backgroundClosed"}
			/>
			<Content>
				<DropdownHeading
					variants={headingVariants}
					initial="closed"
					animate={isOpen ? "open" : "closed"}
				>
					Period
					<motion.span>
						<ChevronDown onClick={onClickChevron} />
					</motion.span>
				</DropdownHeading>
				<List>
					{labels.map(label => (
						<ListItem variants={variants} key={label}>
							{label}
						</ListItem>
					))}
				</List>
			</Content>
		</Wrapper>
	);
};

export default Dropdown;
