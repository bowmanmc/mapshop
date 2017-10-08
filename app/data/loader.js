import fs from 'fs';
import mapIndex from './maps';


export default {

    loadMap(mapId) {
        // todo: this needs to be fixed to work in a packaged app...
        const details = mapIndex[mapId];
        const filepath = `${process.cwd()}/app/data/${details.file}`;
        //console.log(`Loading ${filepath}`);
        const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));
        return data;
    }

}
