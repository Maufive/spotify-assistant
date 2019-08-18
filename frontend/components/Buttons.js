import styled, { keyframes } from "styled-components";

const Glow = keyframes`
	0%		{ background-color: gradient( radial, 50% 50%, 0% 0%, 50% 50%, from( #54efff ), to( transparent ) ); }
	100%	{ background-color: gradient( radial, 50% 50%, 0% 0%, 50% 50%, from( #54efff ), to( transparent ) ); }
`;

export const LoginButton = styled.button`
	padding: 12px 20px;
	background: linear-gradient(
		top,
		${props => props.theme.yellow},
		${props => props.theme.yellowTints.darkest}
	);
	background: -webkit-linear-gradient(
		top,
		${props => props.theme.yellow},
		${props => props.theme.yellowTints.darkest}
	);
	border: none;
	border-top: 1px solid ${props => props.theme.whiteGrey};
	width: 100%;
	font-size: 1.8rem;
	font-weight: 700;
	letter-spacing: 4px;
	text-transform: uppercase;
	color: ${props => props.theme.white};
	text-shadow: 2px 0px 8px 10 rgb(0, 54, 54);
	box-shadow: 2px 2px 10px #000000;
	text-align: center;
	margin-top: 20px;
	opacity: 1;
	border-radius: 3px;
	margin: 0 auto;
	position: inline-block;
	cursor: pointer;
	transition-duration: 0.2s;
	transition-timing-function: ease-in-out;

	&:hover {
		color: ${props => props.theme.white};
		text-shadow: 0px 0px 10px ${props => props.theme.yellowTints.lighter},
			0px 0px 10px ${props => props.theme.yellowTints.lighter};
		background: linear-gradient(
			top,
			${props => props.theme.yellowTints.dark},
			${props => props.theme.yellowTints.darker}
		);
		box-shadow: 2px 2px 30px #000000;
	}
`;

// ${props => props.theme.yellowTints.light}
// ${props => props.theme.yellowTints.lighter}
// ${props => props.theme.yellowTwo}
// ${props => props.theme.yellowTints.dark}
// ${props => props.theme.yellowTints.darker}

// #d8baff;
// #b685f7;
// #7836d6;
// #773cca;
// #9036ee;
// #552f9a;
