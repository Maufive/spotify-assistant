import { useContext } from "react";
import { TokenContext } from "../Context";

const clientId = "0f62901ea97b42749ac0e5eff6f6f7c5";
const redirectUri = "http://localhost:3000";
const scopes = ["user-read-currently-playing", "user-read-playback-state"];
export const authEndpoint = "https://accounts.spotify.com/authorize?";

export default function Login() {
	const { token } = useContext(TokenContext);
	return (
		<div>
			<h2>Login</h2>
			{!token.token && (
				<a
					href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
						"%20"
					)}&response_type=token&show_dialog=true`}
				>
					<button>Login here!</button>
				</a>
			)}
			{token.token && <p>It worked!</p>}
		</div>
	);
}
