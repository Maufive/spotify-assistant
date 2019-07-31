import axios from "axios";
import cheerio from "cheerio";

async function getHTML(url) {
	const { data: html } = await axios.get(url);
	return html;
}

async function getLyrics(html) {
	const $ = cheerio.load(html);
	const div = $(".lyrics p");
	const lyrics = div.html();
	return lyrics;
}

export { getHTML, getLyrics };
