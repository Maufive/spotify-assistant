import { useEffect, useState } from "react";

export default function useLyrics(genius) {
	const [lyrics, useLyrics] = useState({
		lyrics: ""
	});

	console.log(genius.path);
	// fetch function
	async function fetchLyrics(genius) {
		const response = await fetch("http://localhost:2093/lyrics/lyrics", {
			params: { lyricsURL: genius.path }
		});
		const data = await response.json();
		console.log(data);
		useLyrics(data);
	}

	useEffect(() => {
		console.log("Mounting or updating!");
		fetchLyrics();
	}, [genius]);

	return { lyrics, fetchLyrics };
}
