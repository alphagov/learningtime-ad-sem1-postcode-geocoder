import { PostcodeResponse } from "./types/PostcodeResponse";
import Coordinates from "./types/Coordinates";

const base_endpoint = "https://api.postcodes.io/postcodes/";

// Quicker logging helper function
export function log(msg: any) {
  console.log(msg);
}

export async function validatePostcode(postcode: string) {
  const rawresponse = await fetch(`${base_endpoint}${postcode}/validate`);
  const response = await rawresponse.json();
  return response["result"];
}

export async function geocodePostcode(postcode: string) {
  const response = await fetch(
    `https://api.postcodes.io/postcodes/${postcode}`
  );
  return await response.json();
}

export function getCoordinates(rawJSON: PostcodeResponse): Coordinates {
  const longitude = rawJSON["result"]["longitude"];
  const latitude = rawJSON["result"]["latitude"];
  return [latitude, longitude];
}
