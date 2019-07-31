import { useEffect, useState } from "react";
import { ScrapeProvider } from "./ScrapeContext";

function useLyrics() {
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

export default function Page({ children }) {
	const lyrics = useLyrics();
	return (
		<ScrapeProvider
			value={{
				lyrics
			}}
		>
			<div className="page">{children}</div>
		</ScrapeProvider>
	);
}
