import React, { useContext } from "react";
import Router from "next/router";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { StateContext } from "./Context";
import Navigation from "./Navigation/Navigation";
import NProgress from "nprogress";
import Meta from "./Meta";

Router.onRouteChangeStart = () => {
	NProgress.start();
};
Router.onRouteChangeComplete = () => {
	NProgress.done();
};

Router.onRouteChangeError = () => {
	NProgress.done();
};

const theme = {
	yellow: "#FFC600",
	yellowTwo: "#ffcb14",
	yellowTints: {
		light: "#ffcc1a",
		lighter: "#ffd133",
		lightest: "#ffd74d",
		dark: "#e6b200",
		darker: "#cc9e00",
		darkest: "#b38b00"
	},
	whites: {
		light: "#F9FAFE",
		dark: "#eee",
		darker: "#d9d9d9",
		darkest: "#c1c1c1",
		grey: "#a0a0a0"
	},
	greys: {
		black: "#080808",
		darkest: "#101010",
		darker: "#161616",
		dark: "#212121",
		light: "#303030",
		lightest: "#424242",
		white: "#727272"
	},
	maxWidth: "1290px",
	mobileBreakpoint: "768px",
	bs: "0 5px 24px 0 rgba(0, 0, 0, 0.06)",
	bsHard: "1px 3px 3px 0px rgba(0, 0, 0, 0.2)",
	bRadius: "5px"
};

const Container = styled.div`
	display: flex;
	position: relative;
`;

export const Inner = styled.div`
	background: ${theme.greys.black};
	width: 100%;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	margin-left: 150px;
	padding: 0 50px;
`;

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,400,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
	@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=swap');

  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif, sans-serif;
		-webkit-font-smoothing: antialiased !important;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
		line-height: 2;
		color: ${theme.whites.dark};	
  }
  a {
    text-decoration: none;
		color: ${theme.whites.light};
		&:visited {
			color: ${theme.whites.light};
		}
  }
  button {
		font-size: 1.5rem;
	}

	h1 {
		font-family: "Montserrat";
		font-size: 4rem;
	}
	h2 {
		font-size: 2.6rem;
	}

	h3 {
		font-size: 2.4rem;
	}

	input[type="text"],
	input[type="search"],
	input[type="email"],
	input[type="number"] {
		-webkit-appearance: none;
	}

	h1, h2, h3, h4, h5, h6, p {
		margin-block-end: 0;
		margin-block-start: 0;
		margin-inline-end: 0;
		margin-inline-start: 0;
	}

	svg {
		cursor: pointer;
	}
`;

export default function Page({ children }) {
	const { isUserLoggedIn } = useContext(StateContext);
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyle />
				<Meta />
				<Container>
					<Navigation />
					<Inner>{children}</Inner>
				</Container>
			</>
		</ThemeProvider>
	);
}
