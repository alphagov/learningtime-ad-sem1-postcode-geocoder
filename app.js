import express from "express";
import { log } from "./postcodes.js";

const app = express();
// Dummy data
let postcodes = {
  1: {
    postcode: "se137gp",
    coordinates: [51.46423, -0.015401],
  },
  2: {
    postcode: "se146pw",
    coordinates: [51.471109, -0.034037],
  },
};

app.get("/", (req, res) => {
  return res.send("GET request to '/'");
});

app.get("/postcode/list", (req, res) => {
  return res.send(Object.values(postcodes));
});

app.get("/postcode/:postcode", (req, res) => {
  return res.send(postcodes[req.params.postcode]);
});

app.listen("3000", () => log("Listening on port 3000"));
