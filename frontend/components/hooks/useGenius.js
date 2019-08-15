import { useState, useEffect } from "react";
import axios from "axios";

export default function useGenius(spotify) {
	const [genius, useGenius] = useState({
		genius: {
			data: {},
			lyrics: null
		}
	});

	// fetch function
	async function fetchGenius(spotify) {
		if (spotify.song === null) {
			return;
		}

		if (spotify.is_playing) {
			const artist = spotify.item.artists[0].name;
			const song = spotify.item.name;

			const data = await axios.get(`http://localhost:2093/search`, {
				params: {
					artist,
					song
				}
			});

			const lyricsURL = data.data.response.song.path;
			const lyrics = await axios.get(`http://localhost:2093/lyrics`, {
				params: {
					lyricsURL
				}
			});

			const songData = {
				data: { ...data.data },
				lyrics: { ...lyrics.data }
			};

			useGenius(songData);
		}
	}

	useEffect(() => {
		fetchGenius(spotify);
	}, [spotify]);

	return { genius };
}
