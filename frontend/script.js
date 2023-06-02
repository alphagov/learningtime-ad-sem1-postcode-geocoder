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
var map = L.map("map").setView([54.613891, -4.339195], 6);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution: "&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a>"
}).addTo(map);

// Form submission Eventlistener
// TODO: #42 This should be rate limited somehow. Clicking it over and over sends a request everytime.
form.addEventListener("submit", async (e) => {
	e.preventDefault();
	// TODO: #48 Delete exisiting marker before adding a new one
	let postcodeValue = document.getElementById("postcode-field").value.trim();
	postcodeValue = postcodeValue.replace(/\s+/g, "");
	document.getElementById("postcode-field").value = "";
	document.getElementById("loader-container").classList.add("spinner-loader");
	const coordinates =	 await makeRequest(postcodeValue);
	document.getElementById("loader-container").classList.remove("spinner-loader");
	result.innerHTML = coordinates;
	map.setView(coordinates, 15);
	const marker = L.circle(coordinates, {
		color: "red",
		fillColor: "#f03",
		fillOpacity: 0.5,
		radius: 50
	}).addTo(map);
});