let base_endpoint = "https://api.postcodes.io/postcodes/";

function getPostcodeFromArgs() {
  let postcode = process.argv[2];
  if (postcode) {
    return String(postcode);
  }
  throw new Error(
    "No postcode given. You can provide a postcode by running `node app.js <postcode>. Your postcode should not contain spaces.`"
  );
}

async function geocodePostcode(postcode) {
  let response = await fetch(`https://api.postcodes.io/postcodes/${postcode}`);
  return await response.json();
}

let coords = await geocodePostcode(getPostcodeFromArgs());
console.log(coords);
