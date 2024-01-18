const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.static("client-side"));
app.use(express.json());

let data = require("./data.json");

// get method for individual artist
app.get("/artist", function (req, resp) {
	const key = req.query.temp.toLowerCase();
	let found = false;
	for (let artist of data.artists) {
		if (artist.ArtistName.toLowerCase() == key) {
			resp.send(artist);
			found = true;
			break;
		}
	}

	if (!found) {
		resp.status(404).json({ error: "Artist not found" });
	}
});

// get method for all artists
app.get("/artists", function (req, resp) {
	resp.send(data.artists);
});

// get method for comments
app.get("/comments", function (req, resp) {
	const artist = req.query.artist;

	let comments = [];

	for (let comment of data.comments) {
		if (comment.ArtistName == artist) {
			comments.push(comment.Comment);
		}
	}

	resp.send(comments);
});

app.post("/add-comments", function (req, resp) {
	const file = fs.readFileSync("./data.json", "utf8");
	const Comment = req.body.Comment;
	const ArtistName = req.body.ArtistName;
	const artistToFind = data.artists.find((artist) => artist.ArtistName == ArtistName);

	let temp = JSON.parse(file);

	if (!artistToFind) {
		resp.status(404).json({ error: "Artist not found" });
	} else {
		temp.comments.push({ ArtistName: ArtistName, Comment: Comment });
		data = temp;
		fs.writeFileSync("./data.json", JSON.stringify(temp));
		console.log(req.body);
		resp.send(req.body);
	}
});

app.post("/add-artist", function (req, resp) {
	const file = fs.readFileSync("./data.json", "utf8");
	data = JSON.parse(file);
	const newArtist = {
		ArtistName: req.body.ArtistName.trim(),
		Quote: req.body.Quote.trim(),
		CoverImage: req.body.CoverImage.trim(),
		SpotifyURL: req.body.SpotifyURL,
		Card3A: req.body.Card3A.split(",").map((s) => s.trim()),
		Card4: req.body.Card4.split(",").map((s) => s.trim()),
		Card1: req.body.Card1.trim(),
		Card2: req.body.Card2.trim(),
	};

	data.artists.push(newArtist);
	fs.writeFileSync("./data.json", JSON.stringify(data));
	resp.send(newArtist);
});

module.exports = app;
