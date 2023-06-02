async function makeRequest(postcode) {
	const response = await fetch(`https://postcode-geocoder.onrender.com/postcode/${postcode}`);
	const jsonResponse = await response.json();
	if ("error" in jsonResponse) {
		const errormsg = jsonResponse["error"];
		return errormsg;
	}
	const coordinates = jsonResponse[1]["coordinates"];
	return coordinates;
}

// Setup
const form = document.getElementById("postcode-form");
const result = document.getElementById("coordinates");


// Form submission Eventlistener
// TODO: #42 This should be rate limited somehow. Clicking it over and over sends a request everytime.
form.addEventListener("submit", async (e) => {
	e.preventDefault();
	let postcodeValue = document.getElementById("postcode-field").value.trim();
	postcodeValue = postcodeValue.replace(/\s+/g, "");
	document.getElementById("postcode-field").value = "";
	// TODO: #44 Add a loader while waiting for the fetch call to complete
	result.innerHTML = "Loading...";
	result.innerHTML = await makeRequest(postcodeValue);
	// TODO: #43 Catch the "Not a valid postcode" error returned by the server
});