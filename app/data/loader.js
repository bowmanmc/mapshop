import fs from 'fs';
import mapIndex from './maps';


export default {

    loadMap(mapId, resolution) {
        // todo: this needs to be fixed to work in a packaged app...
        const details = mapIndex[mapId];
        if (Object.keys(details.files).indexOf(resolution) < 0) {
            resolution = 'medium';
        }
        const filepath = `${process.cwd()}/app/data/${details.files[resolution]}`;
        //console.log(`Loading ${filepath}`);
        const filedata = JSON.parse(fs.readFileSync(filepath, 'utf8'));
        let data = filedata;
        if (details.selector && filedata.features) {
            data = {
                type: 'FeatureCollection',
                features: []
            };
            console.log('Selecting out data with selector: ' + details.selector);
            filedata.features.forEach(feature => {
                if (feature.properties[details.selector.key] == details.selector.val) {
                    data.features.push(feature);
                }
            });
            console.log('Added ' + data.features.length + ' features...');
        }
        return data;
    },

    getInfo(mapId) {
        return mapIndex[mapId];
    }
}
