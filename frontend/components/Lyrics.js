import { useContext } from "react";
import { ScrapeContext } from "./ScrapeContext";

export default function Lyrics() {
	const scrapeData = useContext(ScrapeContext);
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
