// PSEUDO

// validatePostcode(goodPostcode) returns true
// validatePostcode(badPostcode) returns false
// validatePostcode(int) returns false

// geocodePostcode(goodPostcode) returns (long, lat)
// geocodePostcode(badPostcode) throws TypeError (/Cannot read properties/)

// getCoordinates(goodJSONObject) returns (long, lat) string
// getCoordinates(badJSONObject) throws TypeError (TypeError: Cannot read properties of undefined)

// main() should never return nil/undefined/etc

import {
  validatePostcode,
  geocodePostcode,
  getCoordinates,
  getPostcodeFromArgs,
} from ".";

describe("Argument parsing", () => {
  test("npm app.js se137gp", () => {
    process.argv = ["node", "app.js", "se137gp"];
    const result = getPostcodeFromArgs();
    expect(result).toBe("se137gp");
  });
});
