import React from "react";
import { useLyrics } from "./hooks/useGenius";

export default function DisplayData({ genius }) {
	const { path } = genius;
	const { lyrics } = useLyrics(path);

	const songLyrics = lyrics.data;

	const markup = function() {
		return { __html: songLyrics.lyrics };
	};
	if (!songLyrics) return <p>loading</p>;
	if (songLyrics)
		return (
			<div>
				<h2>{genius.full_title}</h2>
				<p dangerouslySetInnerHTML={markup()} />
			</div>
		);
}
