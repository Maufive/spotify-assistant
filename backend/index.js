import express from "express";
import cors from "cors";
import { getHTML, getLyrics } from "./lib/scraper";

const app = express();
app.use(cors());

async function scrape() {
	const url = "https://genius.com/The-notorious-big-juicy-lyrics";
	const html = await getHTML(url);
	const lyrics = await getLyrics(html);
	return lyrics;
}

app.get("/lyrics", async (req, res, next) => {
	const lyrics = await Promise.resolve(scrape());
	res.send({ lyrics });
});

app.listen(2093, () => {
	console.log(`App running on localhost:2093`);
});
