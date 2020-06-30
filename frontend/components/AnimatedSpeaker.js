import React from "react";
import styled, { keyframes } from "styled-components";

const blink = keyframes`
  0% {
    transform: scale(1);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  75% {
    transform: scale(1.1);
  }
  100% {
    stroke-dashoffset: 0;
    transform: scale(1);
  }
`;

const Speaker = styled.svg`
	.inner {
		opacity: 0;
		transform: scale(0.9);
		transform-origin: center;
		animation: ${blink} 1.5s ease-out infinite;
	}

	.outer {
		opacity: 0;
		stroke-dasharray: 400;
		stroke-dashoffset: 400;
		transform-origin: center;
		animation: ${blink} 1.5s ease-out infinite;
		animation-delay: 0.5s;
	}
`;

const AnimatedSpeaker = ({ animate = true, color = "#eee", size = 30 }) => {
	return (
		<Speaker
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 28 28"
			fill="none"
			stroke={color}
			strokeWidth="1"
			strokeLinecap="round"
			strokeLinejoin="round"
			id="speaker"
		>
			<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
			<path className="inner" d="M15.54 8.46a5 5 0 0 1 0 7.07" />
			<path className="outer" d="M19.07 4.93a10 10 0 0 1 0 14.14" />
		</Speaker>
	);
};

export default AnimatedSpeaker;
