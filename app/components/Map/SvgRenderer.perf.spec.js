import moment from 'moment';

import DataIndex from '../../data';
import DataLoader from '../../data/loader';
import SvgRenderer from './SvgRenderer';


describe('SvgRenderer Performance', () => {
    const BUDGET = 100; // 100ms max to render a map
    it('renders all maps under performance budget', () => {
        const maps = Object.keys(DataIndex);
        let project = {
            basemap: [{
                fillColor: '#ffdd00',
                stroke: null
            }]
        };
        maps.forEach(mapId => {
            const mapInfo = DataIndex[mapId];
            const mapData = DataLoader.load(mapId);
            project.basemap[0].mapId = mapId;
            const start = moment();
            SvgRenderer.render(project, [mapData]);
            const end = moment();
            const dur = end.diff(start);
            if (dur > BUDGET) {
                console.log(`Map ${mapId} is over budget! (${dur}ms)`);
            }
        });
    });

});
