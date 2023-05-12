import { main, log } from "./app.js";

const base_maps_url = "http://maps.google.com/maps?z=12&t=m&q=loc:";

const coordinates = await main();

log(`Coordinates: ${coordinates[0]},${coordinates[1]}`);
log(`Google maps link: ${base_maps_url}${coordinates[0]}+${coordinates[1]}}`);
