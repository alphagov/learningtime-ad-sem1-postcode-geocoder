import express from "express";
import cors from "cors";
import {log, validatePostcode, geocodePostcode, getCoordinates} from "./postcodes.js";
const base_maps_url = "http://maps.google.com/maps?z=12&t=m&q=loc:";

const app = express();

app.get("/", (req, res) => {
  return res.send("GET request to '/'");
});

app.get("/postcode/:givenPostcode", cors(), async function(req, res){
  const postcode = req.params.givenPostcode;
  if (await validatePostcode(postcode)) {
    const postcodeioResponse = await geocodePostcode(postcode);
    const coords = getCoordinates(postcodeioResponse);
    const response = [{location:`${base_maps_url}${coords[0]}+${coords[1]}`},{coordinates:coords}];
    return res.send(response);
  }
  return res.status(500).send({ error: "Not a valid postcode" });
});

app.listen("3000", () => log("Listening on port 3000"));
