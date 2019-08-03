import express from "express";
import cors from "cors";
import axios from "axios";
import { getHTML, getLyrics } from "./lib/scraper";
require("dotenv").config({ path: "./variables.env" });

const app = express();
app.use(cors());

async function scrape(lyricsURL) {
	const url = `https://genius.com${lyricsURL}`;
	const html = await getHTML(url);
	const lyrics = await getLyrics(html);
	return lyrics;
}

app.get("/search", async (req, res, next) => {
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
	// const lyrics = await getLyrics(lyricsHTML);

	res.json(songDetails.data);
});

app.get("/lyrics", async (req, res, next) => {
	const lyricsBaseURL = "https://genius.com";
	const url = `${lyricsBaseURL + req.query.lyricsURL}`;
	const lyricsHTML = await getHTML(url);
	const lyrics = await getLyrics(lyricsHTML);
	res.send({ lyrics });
});

app.listen(2093, () => {
	console.log(`App running on localhost:2093`);
});
