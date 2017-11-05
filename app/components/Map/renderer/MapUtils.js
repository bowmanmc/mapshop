import d3 from 'd3';
import { geoCentroid, geoPath } from 'd3-geo';
import { geoAlbersUsa, geoConicConformal } from 'd3-geo';

import MapIndex from '../../../data/maps';


export default {

    setupMap(basemap, mapData) {
        let projection = geoConicConformal(); // default projection
        const projectionId = MapIndex[basemap.mapId].projection;
        if (projectionId) {
            if (projectionId === 'albers') {
                projection = geoAlbersUsa();
            }
        }

        const path = geoPath().projection(projection);

        const width = 1000;
        const height = 1000;

        const centroid = geoCentroid(mapData);
        const r = [centroid[0] * -1, centroid[1] * -1];
        projection.scale(1).translate([0, 0]);
        if (projection.rotate) {
            projection.rotate(r);
        }

        const b = path.bounds(mapData);
        const s = 0.95 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height);
        const t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];
        projection.scale(s).translate(t);

        let styles = {
            fill: null,
            stroke: null,
            strokeWidth: 1
        };
        if (basemap.fillColor) {
            styles.fill = basemap.fillColor;
        }

        if (basemap.strokeColor) {
            styles.stroke = basemap.strokeColor;
        }

        if (basemap.strokeWidth) {
            styles.strokeWidth = basemap.strokeWidth;
        }

        return {
            path: path,
            projection: projection,
            styles: styles,
            size: {
                width: width,
                height: height
            }
        };
    }

}
