import express from "express";
const app = express();

app.get("/", (req, res) => {
	return res.send("GET request to '/'");
});

app.listen("3000", () => log("Listening on port 3000"));
