async function makeRequest(postcode) {
	const response = await fetch(`https://postcode-geocoder.onrender.com/postcode/${postcode}`);
	const jsonResponse = await response.json();
	const coordinates = jsonResponse[1]["coordinates"];
	return coordinates;
}


