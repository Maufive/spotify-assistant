import React from "react";
import styled from "styled-components";
import YouTube from "react-youtube";

const DisplayRelatedStyles = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const DisplayRelated = ({ song }) => {
	function youtube(data) {
		const obj = data.media.filter(
			item => item.provider === "youtube" && item.type === "video"
		);
		const id = obj[0].url.split("=");
		return id[1];
	}

	const youtubeId = youtube(song);

	const YoutubeSettings = {
		height: "390",
		width: "640"
	};

	return (
		<DisplayRelatedStyles>
			<YouTube videoId={youtubeId} opts={YoutubeSettings} />
		</DisplayRelatedStyles>
	);
};

export default DisplayRelated;
