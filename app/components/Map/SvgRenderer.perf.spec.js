import moment from 'moment';

import DataIndex from '../../data';
import DataLoader from '../../data/loader';
import SvgRenderer from './SvgRenderer';

const BUDGET = 100; // 100ms max to render a map

describe('SvgRenderer Performance Checks', () => {

    // Get all maps in the Data Index and render each one with some default styles
    // Make sure all maps render under our performance budget
    const maps = Object.keys(DataIndex);
    let project = {
        basemap: [{
            fillColor: '#ffdd00',
            stroke: null
        }]
    };
    // Test each map and fail if it doesn't meet our performance requirements
    maps.forEach(mapId => {
        it(`Render ${mapId} in under ${BUDGET}ms`, () => {
            const mapInfo = DataIndex[mapId];
            const mapData = DataLoader.load(mapId);
            project.basemap[0].mapId = mapId;
            const start = moment();
            SvgRenderer.render(project, [mapData]);
            const end = moment();
            const dur = end.diff(start);
            expect(dur).toBeLessThan(BUDGET);
        });
    });
});
