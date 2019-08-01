import { useContext } from "react";
import { LyricsContext } from "./Context";

export default function Lyrics() {
	const scrapeData = useContext(LyricsContext);
	const { lyrics } = scrapeData.lyrics.lyrics;
	const markup = function() {
		return { __html: lyrics };
	};

	return (
		<div>
			<h2>Lyrics</h2>
			<p dangerouslySetInnerHTML={markup()} />
		</div>
	);
}
