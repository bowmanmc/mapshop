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
        const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));
        return data;
    },

    getInfo(mapId) {
        return mapIndex[mapId];
    }
}
