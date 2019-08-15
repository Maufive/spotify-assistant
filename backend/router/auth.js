const express = require("express");
var request = require("request"); // "Request" library
const router = express.Router();
const querystring = require("querystring");
const cookieParser = require("cookie-parser");
import { generateRandomString } from "../lib/utils";
require("dotenv").config({ path: "./variables.env" });

const client_id = process.env.SPOTIFY_KEY;
const client_secret = process.env.SPOTIFY_SECRET;
const redirect_uri = "http://localhost:2093/auth/callback";
const stateKey = "spotify_auth_state";

router.get("/login", (req, res, next) => {
	const state = generateRandomString(16);
	res.cookie(stateKey, state);

	// application requests authorization
	const scope = "user-read-private user-read-email user-read-currently-playing";
	res.redirect(
		"https://accounts.spotify.com/authorize?" +
			querystring.stringify({
				response_type: "code",
				client_id: client_id,
				scope: scope,
				redirect_uri: redirect_uri,
				state: state
			})
	);
});

router.get("/callback", (req, res, next) => {
	// your application requests refresh and access tokens
	// after checking the state parameter

	const code = req.query.code || null;
	const state = req.query.state || null;
	const storedState = req.cookies ? req.cookies[stateKey] : null;

	if (state === null || state !== storedState) {
		res.redirect(
			"/#" +
				querystring.stringify({
					error: "state_mismatch"
				})
		);
	} else {
		res.clearCookie(stateKey);
		const authOptions = {
			url: "https://accounts.spotify.com/api/token",
			form: {
				code: code,
				redirect_uri: redirect_uri,
				grant_type: "authorization_code"
			},
			headers: {
				Authorization:
					"Basic " +
					new Buffer(client_id + ":" + client_secret).toString("base64")
			},
			json: true
		};

		console.log(authOptions);

		request.post(authOptions, (error, response, body) => {
			if (!error && response.statusCode === 200) {
				const access_token = body.access_token,
					refresh_token = body.refresh_token;

				const options = {
					url: "https://api.spotify.com/v1/me",
					headers: { Authorization: "Bearer " + access_token },
					json: true
				};

				// use the access token to access the Spotify Web API
				// DO SOMETHING WITH THE MAFAKKIN DATA
				// request.get(options, (error, response, body) => {
				// 	console.log(body);
				// 	res.json({ body });
				// });

				// skicka token till klienten via querystring
				res.redirect(
					"http://localhost:3000/playback#" +
						querystring.stringify({
							access_token: access_token,
							refresh_token: refresh_token
						})
				);
			} else {
				res.redirect(
					"/#" +
						querystring.stringify({
							error: "invalid_token"
						})
				);
			}
		});
	}
});

router.get("/refresh_token", (req, res, next) => {
	// requesting access token from refresh token
	const refresh_token = req.query.refresh_token;
	const authOptions = {
		url: "https://accounts.spotify.com/api/token",
		headers: {
			Authorization:
				"Basic " +
				new Buffer(client_id + ":" + client_secret).toString("base64")
		},
		form: {
			grant_type: "refresh_token",
			refresh_token: refresh_token
		},
		json: true
	};

	request.post(authOptions, function(error, response, body) {
		if (!error && response.statusCode === 200) {
			const access_token = body.access_token;
			res.json({
				access_token: access_token
			});
		}
	});
});

module.exports = router;
