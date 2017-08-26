import React from 'react';

import d3 from 'd3';
import { geoCentroid, geoConicConformal, geoPath } from 'd3-geo';


export default {
    render: function(project, mapData) {

        const projection = geoConicConformal();
        const path = geoPath().projection(projection);

        const width = 1000;
        const height = 1000;

        const centroid = geoCentroid(mapData);
        const r = [centroid[0] * -1, centroid[1] * -1];
        projection.scale(1).translate([0, 0]).rotate(r);

        const b = path.bounds(mapData);
        const s = 0.95 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height);
        const t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];
        projection.scale(s).translate(t);

        let styles = {
            fill: null,
            stroke: null,
            strokeWidth: 1
        };
        if (project.basemap.fillColor) {
            styles.fill = `${project.basemap.fillColor}`;
        }

        if (project.basemap.stroke) {
            styles.stroke = `${project.basemap.stroke}`;
        }

        const viewBox = `0 0 ${width} ${height}`;
        return (
            <svg viewBox={viewBox}>
                <path {...styles} d={path(mapData)} />
            </svg>
        );
    }
};
