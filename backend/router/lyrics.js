const express = require("express");
const router = express.Router();
import axios from "axios";
import { getHTML, getLyrics } from "../lib/scraper";

router.get("/search", async (req, res, next) => {
	const { artist, song } = req.query;

	const fetchId = await axios.get(
		`https://api.genius.com/search?q=${artist}%20${song}`,
		{
			headers: {
				Authorization: "Bearer " + process.env.GENIUS_KEY
			}
		}
	);

	const id = fetchId.data.response.hits[0].result.id;

	const songDetails = await axios.get(`https://api.genius.com/songs/${id}`, {
		headers: {
			Authorization: "Bearer " + process.env.GENIUS_KEY
		}
	});

	res.json(songDetails.data);
});

router.get("/lyrics", async (req, res, next) => {
	const lyricsBaseURL = "https://genius.com";
	const url = `${lyricsBaseURL + req.query.lyricsURL}`;
	const lyricsHTML = await getHTML(url);
	const lyrics = await getLyrics(lyricsHTML);
	res.send({ lyrics });
});

module.exports = router;
