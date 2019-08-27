import { useState, useEffect } from "react";
import axios from "axios";

export const useLyrics = lyricsUrl => {
	const [lyrics, setLyrics] = useState({ lyrics: null });

	async function fetchLyrics(url) {
		const lyrics = await axios.get(`http://localhost:2093/lyrics/lyrics`, {
			params: {
				lyricsURL: url
			}
		});

		setLyrics(lyrics);
	}

	useEffect(() => {
		fetchLyrics(lyricsUrl);
	}, [lyricsUrl]);

	return { lyrics };
};

export const useGenius = spotify => {
	const [genius, useGenius] = useState({ genius: null });

	// fetch function
	async function fetchGenius(spotify) {
		if (spotify.song === null) {
			return;
		}

		if (spotify.is_playing) {
			const artist = spotify.item.artists[0].name;
			const song = spotify.item.name;

			const data = await axios.get(`http://localhost:2093/lyrics/search`, {
				params: {
					artist,
					song
				}
			});
			if (data.data.meta.status === 200) {
				useGenius(data.data);
			}
			return;
		}
	}

	useEffect(() => {
		fetchGenius(spotify);
	}, [spotify]);

	return { genius };
};
