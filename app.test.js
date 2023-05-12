// getCoordinates(goodJSONObject) returns (long, lat) string
// getCoordinates(badJSONObject) throws TypeError (TypeError: Cannot read properties of undefined)

// main() should never return nil/undefined/etc

import {
  validatePostcode,
  geocodePostcode,
  getCoordinates,
} from "./postcodes.js";

describe("Argument parsing", () => {
  test("'node app.js se137gp' gets se137gp from argv", () => {
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

describe("Postcode to coordinate lookup", () => {
  test("geocodePostcode(se137gp) latitude is 51.46423", async () => {
    const result = await geocodePostcode("se137gp");
    expect(result).toHaveProperty("result.longitude");
  });

  test("geocodePostcode(se137gp) longitude is 51.46423", async () => {
    const result = await geocodePostcode("se137gp");
    expect(result["result"]["longitude"]).toBe(-0.015401);
  });

  test("geocodePostcode('thisisatest') returns a json response containing 'Invalid postcode'", async () => {
    const result = await geocodePostcode("thisisatest");
    expect(result["error"]).toBe("Invalid postcode");
  });
});

// describe("Coordinate JSON object cleanup", () => {
//   test("getCoordinates(correctly formatter JSON object)", () => {
//     const result = getCoordinates();
//     expect(result["error"]).toBe("Invalid postcode");
//   });
// });
