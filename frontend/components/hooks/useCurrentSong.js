import { useState, useEffect, useContext } from "react";
import { StateContext } from "../Context";

export default function useCurrentSong() {
	const [song, useSong] = useState({
		song: null
	});

	const { accessToken } = useContext(StateContext);

	// fetch data
	async function fetchSong(accessToken) {
		const response = await fetch(
			"https://api.spotify.com/v1/me/player/currently-playing",
			{
				headers: {
					Authorization: "Bearer " + accessToken
				}
			}
		);

		if (response.status === 200) {
			const data = await response.json();
			useSong(data);
			return;
		}

		useSong({
			song: null
		});
	}

	useEffect(() => {
		// useEffect kör igen när token uppdateras
		console.log("Mounting or updating!");
		fetchSong(accessToken);
	}, [accessToken]);

	return { song };
}
