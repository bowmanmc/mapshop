import React from 'react';

import d3 from 'd3';
import { geoCentroid, geoPath } from 'd3-geo';
import { geoAlbersUsa, geoConicConformal } from 'd3-geo';
import geojsonMerge from 'geojson-merge';

import MapIndex from '../../data/maps';


export default {

    render: function(project, mapData) {

        const merged = geojsonMerge(mapData);

        let projection = geoConicConformal(); // default projection
        const projectionId = MapIndex[project.basemap[0].mapId].projection;
        if (projectionId) {
            if (projectionId === 'albers') {
                projection = geoAlbersUsa();
            }
        }

        const path = geoPath().projection(projection);

        const width = 1000;
        const height = 1000;

        const centroid = geoCentroid(merged);
        const r = [centroid[0] * -1, centroid[1] * -1];
        projection.scale(1).translate([0, 0]);
        if (projection.rotate) {
            projection.rotate(r);
        }

        const b = path.bounds(merged);
        const s = 0.95 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height);
        const t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];
        projection.scale(s).translate(t);

        const groups = [];
        project.basemap.forEach((layer, i) => {
            let styles = {
                fill: null,
                stroke: null,
                strokeWidth: 1
            };
            if (layer.fillColor) {
                styles.fill = `${layer.fillColor}`;
            }

            if (layer.stroke) {
                styles.stroke = `${layer.stroke}`;
            }
            groups.push(
                <g id={layer.mapId} key={layer.mapId}>
                    <path {...styles} d={path(mapData[i])} />
                </g>
            );
        });

        const viewBox = `0 0 ${width} ${height}`;
        return (
            <svg viewBox={viewBox}>{groups}</svg>
        );
    }
};
