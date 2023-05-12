const base_endpoint = "https://api.postcodes.io/postcodes/";

// Quicker logging helper function
export function log(msg) {
  console.log(msg);
}

export async function validatePostcode(postcode) {
  const rawresponse = await fetch(`${base_endpoint}${postcode}/validate`);
  const response = await rawresponse.json();
  return response["result"];
}

export async function geocodePostcode(postcode) {
  const response = await fetch(
    `https://api.postcodes.io/postcodes/${postcode}`
  );
  return await response.json();
}

export function getCoordinates(rawJSON) {
  const longitude = rawJSON["result"]["longitude"];
  const latitude = rawJSON["result"]["latitude"];
  return [latitude, longitude];
}

export async function main(postcodeFromArgs) {
  const postcode = postcodeFromArgs;
  const postcodeIsValid = await validatePostcode(postcode);
  if (postcodeIsValid) {
    const coordinates = await geocodePostcode(postcode);
    return getCoordinates(coordinates);
  } else {
    throw new Error(`${postcode} is not a valid uk postcode.`);
  }
}
