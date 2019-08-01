import { useEffect, useState, useContext } from "react";
import { TokenContext } from "../Context";

const clientId = "0f62901ea97b42749ac0e5eff6f6f7c5";
const redirectUri = "http://localhost:3000";
const scopes = ["user-read-currently-playing", "user-read-playback-state"];

export const authEndpoint = "https://accounts.spotify.com/authorize?";

// function useLogin() {
// 	const [token, useToken] = useState({
// 		token: null
// 	});

// 	useEffect(() => {
// 		// Get the hash from the URL
// 		const hash = window.location.hash
// 			.substring(1)
// 			.split("&")
// 			.reduce(function(initial, item) {
// 				if (item) {
// 					var parts = item.split("=");
// 					initial[parts[0]] = decodeURIComponent(parts[1]);
// 				}
// 				return initial;
// 			}, {});

// 		window.location.hash = "";

// 		// Set token
// 		let token = hash.access_token;
// 		if (token) {
// 			useToken(token);
// 		}
// 	}, []);

// 	return { token };
// }

export default function Login() {
	// const token = useLogin();
	const token = useContext(TokenContext);
	return (
		<div>
			<h2>Login</h2>

			<a
				href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
					"%20"
				)}&response_type=token&show_dialog=true`}
			>
				<button>Login here!</button>
			</a>
			{token && <p>It worked!</p>}
		</div>
	);
}
