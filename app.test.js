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
  test("node app.js se137gp", () => {
    // Set up virtual command prompt
    process.argv = ["node", "app.js"];
    process.argv.push("se137gp");

    const result = getPostcodeFromArgs();
    expect(result).toBe("se137gp");
  });

  test("node app.js se137gp", () => {
    // Set up virtual command prompt
    process.argv = ["node", "app.js"];
    process.argv.push("se137gp");

    const result = getPostcodeFromArgs();
    expect(result).toBe("se137gp");
  });

  test("throws an error if more than 3 args", () => {
    // Set up virtual command prompt
    process.argv = ["node", "app.js"];
    process.argv.push("se13");
    process.argv.push("7gp");

    expect(() => {
      getPostcodeFromArgs();
    }).toThrow("Too many arguments.");
  });

  test("throws an error if no postcode arg given", () => {
    // Set up virtual command prompt
    process.argv = ["node", "app.js"];
    expect(() => {
      getPostcodeFromArgs();
    }).toThrow();
  });
});

describe("Postcode validation", () => {
  test("validatePostcode(se137gp) returns true", async () => {
    const result = await validatePostcode("se137gp");
    expect(result).toBe(true);
  });

  test("validatePostcode(thisisn'tarealpostcode) returns false", async () => {
    const result = await validatePostcode("thisisn'tarealpostcode");
    expect(result).toBe(false);
  });
});
