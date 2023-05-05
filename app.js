let base_endpoint = "https://api.postcodes.io/postcodes/";

function getPostcodeFromArgs() {
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

async function geocodePostcode(postcode) {
  let response = await fetch(`https://api.postcodes.io/postcodes/${postcode}`);
  return await response.json();
}

let rawJSONResponse = await geocodePostcode(getPostcodeFromArgs());
function getCoordinates(rawJSON) {
  let longitude = rawJSON["result"]["longitude"];
  let latitude = rawJSON["result"]["latitude"];
  console.log(`(${longitude}, ${latitude})`);
}

getCoordinates(rawJSONResponse);
