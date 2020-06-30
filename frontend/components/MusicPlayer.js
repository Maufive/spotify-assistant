import React, { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { StateContext } from "../components/Context";
import useCurrentSong from "./hooks/useCurrentSong";
import { NextArrow, PreviousArrow, PlayIcon } from "../components/ReactSVG";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const BaseButton = styled.div`
	height: 40px;
	width: 40px;
	border-radius: 50%;
	background: ${({ theme }) => theme.greys.darker};
	display: flex;
	justify-content: center;
	align-items: center;
`;

const SkipButton = styled(BaseButton)``;

const PlayButton = styled(BaseButton)`
	margin: 0 2rem;
	padding-left: 3px;
	height: 50px;
	width: 50px;
`;

const Record = styled.img`
	width: 75px;
	height: 75px;
	border-radius: 50%;
	box-shadow: 5px 5px 10px #080808;
`;

const RecordContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: ${rotate} 15s linear infinite;
	margin-right: 2rem;

	div {
		position: absolute;
		background: ${({ theme }) => theme.greys.darkest};
		z-index: 5;
		border-radius: 50%;
		height: 10px;
		width: 10px;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
`;

const PlayerContainer = styled.div`
	display: flex;
	align-items: center;
`;

const ButtonsContainer = styled.div`
	display: flex;
	align-items: center;
`;

const SongInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 6rem;
	line-height: 1;
	p {
		color: ${({ theme }) => theme.whites.darker};
		font-size: 18px;
		margin: 5px 0;
	}
	span {
		/* font-size: 18px; */
		color: ${({ theme }) => theme.greys.white};
	}
`;

const MusicPlayer = ({ token }) => {
	const context = useContext(StateContext);
	const { song } = useCurrentSong(token);
	const [currentSong, setCurrentSong] = useState(null);
	// const { song } = useCurrentSong(token);
	useEffect(() => {
		setCurrentSong(song.item);
	}, [song, context.song]);

	console.log(song);

	if (!currentSong) return null;
	return (
		<PlayerContainer>
			{currentSong && (
				<RecordContainer>
					<Record
						isPlaying={currentSong.is_playing}
						src={
							currentSong.album.images[1].url || currentSong.album.images[0].url
						}
						alt=""
					/>
					<div />
				</RecordContainer>
			)}
			<SongInfoContainer>
				<span>Now playing:</span>
				<p>{currentSong.name}</p>
				<span>{currentSong.artists[0].name}</span>
			</SongInfoContainer>
			<ButtonsContainer>
				<SkipButton style={{ paddingRight: "3px" }}>
					<PreviousArrow color="#727272" size={20} />
				</SkipButton>
				<PlayButton>
					<PlayIcon color="#727272" size={25} />
				</PlayButton>
				<SkipButton style={{ paddingLeft: "3px" }}>
					<NextArrow color="#727272" size={20} />
				</SkipButton>
			</ButtonsContainer>
		</PlayerContainer>
	);
};

export default MusicPlayer;
