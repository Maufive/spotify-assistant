import { useState, useEffect, useContext } from "react";
import { StateContext } from "../Context";

export default function getProfile(accessToken) {
	const [data, setData] = useState({});
	const { setProfile } = useContext(StateContext);

	// fetch data
	async function fetchProfile(accessToken) {
		const profileResponse = await fetch(`https://api.spotify.com/v1/me`, {
			headers: {
				Authorization: "Bearer " + accessToken
			}
		}).then(response => response.json());

		Promise.all([profileResponse]).then(values => {
			const state = {
				profile: values[0]
			};

			setData(state);
			return;
		});
	}

	useEffect(() => {
		if (accessToken) {
			fetchProfile(accessToken);
		}
		return;
	}, [accessToken]);

	useEffect(() => {
		setProfile(data);
	}, [data]);

	return { data };
}
