import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';


const resolutions = {
    'high': './app/data/countries/usa/cb_2015_us_state_500k.json',
    'medium': './app/data/countries/usa/cb_2015_us_state_5m.json',
    'low': './app/data/countries/usa/cb_2015_us_state_20m.json',
};

const keys = ['high', 'medium', 'low'];

keys.forEach(resolutionKey => {
    // US Tiger file is a featurecollection
    console.log('Reading TIGER file ' + resolutions[resolutionKey]);
    const usjson = JSON.parse(fs.readFileSync(resolutions[resolutionKey], 'utf8'));
    const features = usjson.features;
    //console.log(JSON.stringify(features[0].properties));

    // Loop through each feature in the feature collection (state) and
    // write out to a separate json file.
    let states = {};
    features.forEach(feature => {
        const st = feature.properties.STUSPS.toLowerCase();
        console.log(`Processing ${st}`);
        //console.log(`    Props: ${JSON.stringify(feature.properties)}`);

        const fips = feature.properties.STATEFP;
        const gins = feature.properties.STATENS;
        const aff = feature.properties.AFFGEOID;
        const geoid = feature.properties.GEOID;
        const postal = feature.properties.STUSPS;
        const name = feature.properties.NAME;

        const file = `countries/usa/${st}/${st}-${resolutionKey}.json`;
        const key = `usa-${st}`;
        const outPath = './app/data/' + file;
        const outDir = path.dirname(outPath);

        mkdirp.sync(outDir);
        console.log('Writing file: ' + outPath);
        fs.writeFileSync(outPath, JSON.stringify(feature));
        states[key] = {
            name: name,
            fips: fips,
            gins: gins,
            aff: aff,
            geoid: geoid,
            postal: postal,
            name: name,
            files: {
                'high': `countries/usa/${st}/${st}-high.json`,
                'medium': `countries/usa/${st}/${st}-medium.json`,
                'low': `countries/usa/${st}/${st}-low.json`
            }
        };
    });

    // sort states by key
    const ordered = {};
    Object.keys(states).sort().forEach(function(key) {
      ordered[key] = states[key];
    });
    const statesOut = './app/data/countries/usa/states.js';
    fs.writeFileSync(statesOut, JSON.stringify(ordered, null, 4));
});
