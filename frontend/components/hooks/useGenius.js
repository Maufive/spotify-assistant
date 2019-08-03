import { useState, useEffect } from "react";
import axios from "axios";

export default function useGenius(query) {
	const [genius, useGenius] = useState({
		genius: {
			data: {},
			lyrics: null
		}
	});

	// fetch function
	async function authGenius(query) {
		if (query.song === null) {
			console.log("NULL!!!");
			return;
		}

		if (query.is_playing) {
			const artist = query.item.artists[0].name;
			const song = query.item.name;

			console.log(song);
			console.log(artist);

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
		authGenius(query);
	}, [query]);

	return { genius };
}
