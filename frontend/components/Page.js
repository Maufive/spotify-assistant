import Router from "next/router";
import { useContext } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Navigation } from "./Navigation/Navigation";
import NProgress from "nprogress";
import { TokenProvider } from "./Context";
import useLogin from "./hooks/useLogin";
import useCurrentSong from "./hooks/useCurrentSong";
import useGenius from "./hooks/useGenius";
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
		light: "#fff",
		dark: "#eee"
	},
	black: "#212121",
	darkGrey: "#1E1E20",
	grey: "#323232",
	anotherGrey: "#818181",
	white: "#F9FAFE",
	whiteGrey: "#ccc",
	maxWidth: "1290px",
	mobileBreakpoint: "768px",
	bs: "0 5px 24px 0 rgba(0, 0, 0, 0.06)",
	bsHard: "1px 3px 3px 0px rgba(0, 0, 0, 0.2)",
	bRadius: "5px"
};

const StyledPage = styled.div``;

export const Inner = styled.div`
	background: ${theme.black};
	width: ${theme.maxWidth};
	min-height: 100vh;
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
		color: ${theme.white};
		&:visited {
			color: ${theme.white};
		}
  }
  button {
		font-size: 1.5rem;
	}

	h1 {
		font-family: "Montserrat";
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
`;

export default function Page({ children }) {
	// const { token } = useLogin();
	// const { song } = useCurrentSong(token);
	// const { genius } = useGenius(song);

	return (
		<ThemeProvider theme={theme}>
			<StyledPage>
				<GlobalStyle />
				<Meta />
				<Navigation />
				<Inner>{children}</Inner>
			</StyledPage>
		</ThemeProvider>
	);
}

{
	/* <TokenProvider
	value={{
		useLogin,
		token,
		currentSong: song,
		genius
	}}
/> */
}
