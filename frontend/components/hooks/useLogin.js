import { useEffect, useState, useContext } from "react";
import Router from "next/router";
import { StateContext } from "../Context";

export default function useLogin() {
	const { setAccessToken, setRefreshToken, setUserLoggedIn } = useContext(
		StateContext
	);
	const [token, useToken] = useState({
		token: null
	});

	useEffect(() => {
		// Get the hash from the URL
		const hash = window.location.hash
			.substring(1)
			.split("&")
			.reduce((initial, item) => {
				if (item) {
					var parts = item.split("=");
					initial[parts[0]] = decodeURIComponent(parts[1]);
				}
				return initial;
			}, {});

		Router.push("/playback");
		// Set token to global state
		if (hash) {
			setAccessToken(hash.access_token);
			setRefreshToken(hash.refresh_token);
			useToken(hash.access_token);
			setUserLoggedIn(true);
		}
	}, []);
	return token;
}
