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

process.argv = ["node", "app.js"];

describe("Argument parsing", () => {
  test("npm app.js se137gp", () => {
    process.argv.push("se137gp");
    const result = getPostcodeFromArgs();
    expect(result).toBe("se137gp");
  });

  test("throws an error if more than 3 args", () => {
    process.argv.push("se13");
    process.argv.push("7gp");
    expect(() => {
      getPostcodeFromArgs();
    }).toThrow();
  });

  ////   Can't get this to work yet. It should throw if there are only two args on the command line (i.e. if process.argv.length < 3)
  //   test("throws an error if no postcode arg given", () => {
  //     expect(() => {
  //       getPostcodeFromArgs();
  //     }).toThrow();
  //   });
});
