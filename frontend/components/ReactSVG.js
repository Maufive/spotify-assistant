import { motion } from "framer-motion";

export const PlayIcon = ({ size = 30, color = "#ffc600", onClick }) => (
	<motion.svg
		whileHover={{ scale: 1.1, fill: "#eee", stroke: "#eee" }}
		className="play-icon"
		xmlns="http://www.w3.org/2000/svg"
		onClick={onClick}
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill={color}
		stroke={color}
		strokeWidth="1.5"
		strokeLinecap="square"
		strokeLinejoin="round"
	>
		<polygon points="5 3 19 12 5 21 5 3"></polygon>
	</motion.svg>
);

export const ChevronDown = ({ size = 30, color = "#FFC600", onClick }) => (
	<svg
		onClick={onClick}
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke={color}
		strokeWidth="1.5"
		strokeLinecap="square"
		strokeLinejoin="arcs"
	>
		<path d="M6 9l6 6 6-6" />
	</svg>
);

export const NextArrow = ({ size = 25, color = "#303030" }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke={color}
		strokeWidth="1.5"
		strokeLinecap="square"
		strokeLinejoin="round"
	>
		<polygon points="13 19 22 12 13 5 13 19"></polygon>
		<polygon points="2 19 11 12 2 5 2 19"></polygon>
	</svg>
);

export const PreviousArrow = ({ size = 25, color = "#303030" }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke={color}
		strokeWidth="1.5"
		strokeLinecap="square"
		strokeLinejoin="round"
	>
		<polygon points="11 19 2 12 11 5 11 19"></polygon>
		<polygon points="22 19 13 12 22 5 22 19"></polygon>
	</svg>
);
