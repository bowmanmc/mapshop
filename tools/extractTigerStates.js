import fs from 'fs';


const TIGER_FILE = './app/data/countries/usa/cb_2015_us_state_500k.json';

// US Tiger file is a featurecollection
const usjson = JSON.parse(fs.readFileSync(TIGER_FILE, 'utf8'));
const features = usjson.features;
console.log(JSON.stringify(features[0].properties));

// Loop through each feature in the feature collection (state) and
// write out to a separate json file.
features.forEach(feature => {
    const st = feature.properties.STUSPS.toLowerCase();
        console.log(`Processing ${st}`);
    const outPath = `./app/data/countries/usa/${st}.json`;
    fs.writeFileSync(outPath, JSON.stringify(feature));
});
