import express from "express";
import cors from "cors";
const cookieParser = require("cookie-parser");
const auth = require("./router/auth");
const lyrics = require("./router/lyrics");
require("dotenv").config({ path: "./variables.env" });

const app = express();
app.use(cors());
app.use(cookieParser());

app.use("/auth", auth);
app.use("/lyrics", lyrics);

app.listen(2093, () => {
	console.log(`App running on localhost:2093`);
});
