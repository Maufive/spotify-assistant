import React, { useState } from "react";

export const LyricsContext = React.createContext();

export const LyricsProvider = LyricsContext.Provider;

export const TokenContext = React.createContext();
export const TokenProvider = TokenContext.Provider;
// const ScrapeConsumer = ScraperContext.Conusmer;

export const StateContext = React.createContext();
export function StateProvider(props) {
	const [isUserLoggedIn, setUserLoggedIn] = useState(false);
	const [accessToken, setAccessToken] = useState(null);
	const [refreshToken, setRefreshToken] = useState(null);
	const [song, setSong] = useState(null);
	const [lyrics, setLyrics] = useState(null);

	return (
		<StateContext.Provider
			value={{
				isUserLoggedIn,
				setUserLoggedIn,
				accessToken,
				setAccessToken,
				refreshToken,
				setRefreshToken,
				song,
				setSong,
				lyrics,
				setLyrics
			}}
		>
			{props.children}
		</StateContext.Provider>
	);
}
