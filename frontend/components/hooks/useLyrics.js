import { useEffect, useState } from "react";

export default function useLyrics() {
	const [lyrics, useLyrics] = useState({
		lyrics: ""
	});

	// fetch function
	async function fetchLyrics() {
		const response = await fetch("http://localhost:2093/lyrics");
		const data = await response.json();
		console.log(data);
		useLyrics(data);
	}

	useEffect(() => {
		console.log("Mounting or updating!");
		fetchLyrics();
	}, []);

	return { lyrics, fetchLyrics };
}
