import express from "express";
import { log } from "./postcodes.js";

const app = express();
// Dummy data
let postcodeList = {
  "se137gp": {
    coordinates: [51.46423, -0.015401],
  },
  "se146pw": {
    coordinates: [51.471109, -0.034037],
  },
};

app.get("/", (req, res) => {
  return res.send("GET request to '/'");
});

app.get("/postcode/list", (req, res) => {
  return res.send(Object.values(postcodeList));
});

app.get('/postcode/:singlePostcode', function(req, res){
  const postcode = req.params.singlePostcode
  const coordinates = postcodeList[postcode]
  return res.send(coordinates);
});

app.listen("3000", () => log("Listening on port 3000"));
