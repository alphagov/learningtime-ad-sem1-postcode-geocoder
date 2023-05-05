let base_endpoint = "https://api.postcodes.io/postcodes/";

function getPostcodeFromArgs() {
  // print process.argv
  let postcode = process.argv[2];
  return String(postcode);
}

let hardcodedPostcode = "se13 7gp"; // Postcode hardcoded for the moment

async function geocodePostcode(postcode) {
  let response = await fetch(`https://api.postcodes.io/postcodes/${postcode}`);
  return await response.json();
}

let coords = await geocodePostcode(hardcodedPostcode);
console.log(coords);
