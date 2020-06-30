import styled from "styled-components";
import FormatDescription from "../utils/description";

function parseNation(array) {
	if (array.length > 0) {
		let newArray = [];
		array.forEach(item => {
			const artist = {
				name: item.name + ", ",
				api_path: item.api_path
			};
			newArray.push(artist);
		});
		// ta en kopia av sista itemet (OBJ)
		const copy = newArray[newArray.length - 1]; // 21 savage
		let lastNameInArray = newArray[newArray.length - 1].name.split(",");
		lastNameInArray.splice(-1, 1);
		newArray.splice(-1, 1);
		const newArtist = {
			name: lastNameInArray[0],
			api_path: copy.api_path
		};
		newArray.push(newArtist);

		return newArray;
	}
	return array;
}

const DisplayAboutStyles = styled.div`
	span {
		color: ${props => props.theme.white};
		font-family: "Open Sans";
	}
`;

const DisplayAbout = ({ song }) => {
	const description = song.description.dom.children;
	const beskrivning = FormatDescription(description);
	const producers = parseNation(song.producer_artists);
	const writers = parseNation(song.writer_artists);
	return (
		<DisplayAboutStyles>
			<div>
				<p>
					{beskrivning.map(string => <span key={string}>{string}</span>) ||
						"Something went wrong..."}
				</p>
			</div>
			<p>
				Produced by:{" "}
				{producers.map(artist => (
					<span key={artist.name}>{artist.name}</span>
				)) || "No producers found..."}
			</p>
			<p>
				Written by:{" "}
				{writers.map(writer => <span key={writer.name}>{writer.name}</span>) ||
					"No writers found..."}
			</p>
			<p>
				Recorded at{" "}
				<span>{song.recording_location || "No location given 🙁"}</span>
			</p>
		</DisplayAboutStyles>
	);
};

export default DisplayAbout;
