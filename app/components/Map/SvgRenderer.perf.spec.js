import moment from 'moment';

import MapIndex from '../../data/maps';
import DataLoader from '../../data/loader';
import SvgRenderer from './SvgRenderer';

const BUDGET = 5 * 1000; // in ms

describe('SvgRenderer Performance Checks', () => {

    // Get all maps in the Data Index and render each one with some default styles
    // Make sure all maps render under our performance budget
    const maps = Object.keys(MapIndex);
    let basemap = {
        fillColor: '#ffdd00',
        stroke: null
    };

    // Test each map and fail if it doesn't meet our performance requirements
    maps.forEach(mapId => {
        it(`Render ${mapId} in under ${BUDGET}ms`, () => {
            const mapInfo = MapIndex[mapId];
            const mapData = DataLoader.loadMap(mapId);
            basemap.mapId = mapId;
            const start = moment();
            SvgRenderer.render(null, basemap, {}, mapData);
            const end = moment();
            const dur = end.diff(start);
            expect(dur).toBeLessThan(BUDGET);
        });
    });
});
