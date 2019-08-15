export default function DisplayData({ genius }) {
	const markup = function() {
		return { __html: genius.lyrics.lyrics };
	};

	return (
		<div>
			<h2>{genius.data.response.song.full_title}</h2>
			<p dangerouslySetInnerHTML={markup()} />
		</div>
	);
}
