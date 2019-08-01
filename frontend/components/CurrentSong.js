// Visa den låt som användaren lyssnar på just nu
import { useContext } from "react";
import { TokenContext } from "./Context";
import useCurrentSong from "./hooks/useCurrentSong";

export default function CurrentSong() {
	const context = useContext(TokenContext);
	const { token } = context;
	const { song } = useCurrentSong(token);
	console.log(song);
	return (
		<div>
			{song.is_playing && (
				<h4>
					Current song: {song.item.name} by {song.item.artists[0].name}
				</h4>
			)}
		</div>
	);
}
