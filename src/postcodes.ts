// Type definitions
type Coordinates = Array<number>

interface PostcodeResponse {
  status: number;
  result: {
    postcode: string;
    quality: number;
    eastings: number;
    northings: number;
    country: string;
    nhs_ha: string;
    longitude: number;
    latitude: number;
    european_electoral_region: string;
    primary_care_trust: string;
    region: string;
    lsoa: string;
    msoa: string;
    incode: string;
    outcode: string;
    parliamentary_constituency: string;
    admin_district: string;
    parish: string;
    admin_county: null | any;
    date_of_introduction: number;
    admin_ward: string;
    ced: null | any;
    ccg: string;
    nuts: string;
    pfa: string;
    codes: {
      admin_district: string;
      admin_county: string;
      admin_ward: string;
      parish: string;
      parliamentary_constituency: string;
      ccg: string;
      ccg_id: string;
      ced: string;
      nuts: string;
      lsoa: string;
      msoa: string;
      lau2: string;
      pfa: string;
    };
  };
}

const base_endpoint = "https://api.postcodes.io/postcodes/";

// Quicker logging helper function
export function log(msg: any) {
  console.log(msg);
}

export async function validatePostcode(postcode: string) {
  const rawresponse = await fetch(`${base_endpoint}${postcode}/validate`);
  const response = await rawresponse.json();
  return response["result"];
}

export async function geocodePostcode(postcode: string) {
  const response = await fetch(
    `https://api.postcodes.io/postcodes/${postcode}`
  );
  return await response.json();
}

export function getCoordinates(rawJSON: PostcodeResponse): Coordinates {
  const longitude = rawJSON["result"]["longitude"];
  const latitude = rawJSON["result"]["latitude"];
  return [latitude, longitude];
}
