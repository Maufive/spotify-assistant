import { useState, useEffect } from "react";

export default function useCurrentSong(token) {
	const [song, useSong] = useState({
		song: {}
	});

	// fetch function
	async function fetchSong(token) {
		const response = await fetch(
			"https://api.spotify.com/v1/me/player/currently-playing",
			{
				headers: {
					Authorization: "Bearer " + token
				}
			}
		);
		const data = await response.json();
		useSong(data);
	}

	useEffect(() => {
		console.log("Mounting or updating!");
		fetchSong(token);
	}, [token]);

	return { song };
}