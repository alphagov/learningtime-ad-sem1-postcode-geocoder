import {
  validatePostcode,
  geocodePostcode,
  getCoordinates,
  log,
} from "./postcodes.js";

const base_maps_url = "http://maps.google.com/maps?z=12&t=m&q=loc:";

export function getPostcodeFromArgs() {
  const postcode = process.argv[2];
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

const coordinates = await main(getPostcodeFromArgs());

log(`Coordinates: ${coordinates[0]},${coordinates[1]}`);
log(`Google maps link: ${base_maps_url}${coordinates[0]}+${coordinates[1]}}`);
