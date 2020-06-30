import { useState, useEffect, useContext } from "react";
import { StateContext } from "../Context";

export default function useCurrentSong(accessToken) {
	const { setSong } = useContext(StateContext);
	const [song, useSong] = useState({
		song: null
	});

	// const { accessToken } = useContext(StateContext);
	// const accessToken =
	// 	"BQDVaLeVVfgovgv8QP0cmZrbIcCd7uCYoh5qqZqoZjwsyiL6xryD6sdvkqxFhMECRgkE23No0vddpHlh_WYiVZK_4i8sDBs1kUMXuWGHdrkW69ee7SHiNDJ5n9JISN1jCk2xxxxUQA7G3RXlzKPGkup2JaWr1Z96YQ&refresh_token=AQD4lSR28vLKz9y-aMCYrTuOJgVmDJgMK-_QCuV8zdT7_SAeX1dYZA4T_HRL3YAdeKbOJue5_K8Ol0S4T93hDn72PgjhH6l3ZBk6w-2uJlsoKLhxtK8D9voraKnf9e9BMrOnaQ";

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
			// const { id } = data.item;
			// // https://api.spotify.com/v1/tracks/{id}
			// const trackData = await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
			// 	headers: { Authorization: "Bearer " + accessToken }
			// });
			useSong(data);
			return;
		}

		useSong({
			song: null
		});
	}

	useEffect(() => {
		// useEffect kör igen när token uppdateras
		fetchSong(accessToken);
	}, [accessToken]);

	return { song };
}
