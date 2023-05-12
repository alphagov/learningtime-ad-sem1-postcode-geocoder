let base_endpoint = "https://api.postcodes.io/postcodes/";

// Quicker logging helper function
function log(msg) {
  console.log(msg);
}

export async function validatePostcode(postcode) {
  let rawresponse = await fetch(`${base_endpoint}${postcode}/validate`);
  let response = await rawresponse.json();
  return response["result"];
}

export function getPostcodeFromArgs() {
  let postcode = process.argv[2];
  if (process.argv.length > 3) {
    throw new Error(
      "Too many arguments. This tool expects a single UK postcode argument to be given on the command line. Your postcode should not contain any spaces.`"
    );
  }
  if (postcode) {
    return String(postcode);
  }
  throw new Error(
    "No postcode given. You can provide a UK postcode by running `node app.js <postcode>. Your postcode should not contain spaces.`"
  );
}

export async function geocodePostcode(postcode) {
  let response = await fetch(`https://api.postcodes.io/postcodes/${postcode}`);
  return await response.json();
}

export function getCoordinates(rawJSON) {
  let longitude = rawJSON["result"]["longitude"];
  let latitude = rawJSON["result"]["latitude"];
  return `(${longitude}, ${latitude})`;
}

export async function main() {
  let postcode = getPostcodeFromArgs();
  let postcodeIsValid = await validatePostcode(postcode);
  if (postcodeIsValid) {
    let coordinates = await geocodePostcode(postcode);
    let formattedCoordinates = getCoordinates(coordinates);
  } else {
    throw new Error(`${postcode} is not a valid uk postcode.`);
  }
}
