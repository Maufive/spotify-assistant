import { TokenProvider } from "./Context";
import useLogin from "./hooks/useLogin";
import useCurrentSong from "./hooks/useCurrentSong";
import useGenius from "./hooks/useGenius";

export default function Page({ children }) {
	// const lyrics = useLyrics();
	const { token } = useLogin();
	const { song } = useCurrentSong(token);
	const { genius } = useGenius(song);

	return (
		<TokenProvider
			value={{
				useLogin,
				token,
				currentSong: song,
				useCurrentSong
			}}
		>
			<div className="page">{children}</div>
		</TokenProvider>
	);
}
