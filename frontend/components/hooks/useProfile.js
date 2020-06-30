import { useState, useEffect, useContext } from "react";
import { StateContext } from "../Context";

export default function useProfile(accessToken) {
	const [data, setData] = useState({});

	// fetch data
	async function fetchTracks(accessToken) {
		const trackResponse = await fetch(
			`https://api.spotify.com/v1/me/top/tracks`,
			{
				headers: {
					Authorization: "Bearer " + accessToken
				}
			}
		).then(response => response.json());

		const artistsResponse = await fetch(
			`https://api.spotify.com/v1/me/top/artists`,
			{
				headers: {
					Authorization: "Bearer " + accessToken
				}
			}
		).then(response => response.json());

		const profileResponse = await fetch(`https://api.spotify.com/v1/me`, {
			headers: {
				Authorization: "Bearer " + accessToken
			}
		}).then(response => response.json());

		const recentTracksResponse = await fetch(
			`
			https://api.spotify.com/v1/me/player/recently-played`,
			{
				headers: {
					Authorization: "Bearer " + accessToken
				}
			}
		).then(response => response.json());

		Promise.all([
			trackResponse,
			artistsResponse,
			profileResponse,
			recentTracksResponse
		]).then(values => {
			const state = {
				tracks: values[0],
				artists: values[1],
				profile: values[2],
				recentlyPlayed: values[3]
			};

			setData(state);
			return;
		});
	}

	useEffect(() => {
		if (accessToken) {
			fetchTracks(accessToken);
		}
		return;
	}, [accessToken]);

	return { data };
}
