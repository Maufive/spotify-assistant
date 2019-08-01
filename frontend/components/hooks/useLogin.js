import { useEffect, useState } from "react";

export default function useLogin() {
	const [token, useToken] = useState({
		token: null
	});

	useEffect(() => {
		// Get the hash from the URL
		const hash = window.location.hash
			.substring(1)
			.split("&")
			.reduce(function(initial, item) {
				if (item) {
					var parts = item.split("=");
					initial[parts[0]] = decodeURIComponent(parts[1]);
				}
				return initial;
			}, {});

		window.location.hash = "";

		// Set token
		let token = hash.access_token;
		if (token) {
			useToken(token);
		}
	}, []);
	return { token };
}
