let base_endpoint = "https://api.postcodes.io/postcodes/";

function parseArgs() {
  // print process.argv
  console.log(process.argv[0]);
}

let hardcodedPostcode = "se13 7gp"; // Postcode hardcoded for the moment

async function geocodePostcode(postcode) {
  let response = await fetch(`https://api.postcodes.io/postcodes/${postcode}`);
  return await response.json();
}

let coords = await geocodePostcode(hardcodedPostcode);
console.log(coords);

parseArgs();
