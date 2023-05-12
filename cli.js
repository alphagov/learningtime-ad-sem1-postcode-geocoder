import { main, log } from "./app.js";

let base_maps_url = "http://maps.google.com/maps?z=12&t=m&q=loc:";

let coordinates = await main();

log(`Coordinates: ${coordinates[0]},${coordinates[1]}`);
log(`Google maps link: ${base_maps_url}${coordinates[0]}+${coordinates[1]}}`);
