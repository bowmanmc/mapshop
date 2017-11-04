import React from 'react';

import d3 from 'd3';
import { geoCentroid, geoPath } from 'd3-geo';
import { geoAlbersUsa, geoConicConformal } from 'd3-geo';

import fs from 'fs';

import MapIndex from '../../data/maps';

import DataLoader from './DataLoader';


const renderData = (basemap, data, projection) => {
    // read file
    const points = DataLoader.load(
        data.filepath,
        data.dotColumnLatitude,
        data.dotColumnLongitude);

    let circles = [];
    let i = 0;
    points.forEach(point => {
        let translate = `translate(${projection([point.lon, point.lat])})`;
        circles.push(
            <circle key={`row-${i}`}
                r={data.dotRadius}
                fill={data.dotColor}
                transform={translate} />
        );
        i++;
    });

    let g = (
        <g id='Data'>
            { circles }
        </g>
    );
    if (data.dotConstrainToMap) {
        g = (
            <g id='Data' clipPath={`url(#clippath-${basemap.mapId})`}>
                { circles }
            </g>
        );
    }

    return g;
}


export default {

    render: function(project, basemap, data, mapData, mapInfo) {

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

        let features = [];
        if (mapData.features) {
            features = mapData.features;
        }
        else {
            features.push(mapData);
        }

        let paths = [];
        let clips = [];
        features.forEach(feature => {
            const featureId = feature.properties[mapInfo.idcol] || basemap.mapId;
            let d = path(feature);
            paths.push(
                <path key={featureId} id={featureId} {...styles} d={d} />
            );
            clips.push(
                <path key={featureId} id={featureId} d={d} />
            );
        });

        let clipPath = null;
        if (data.renderType === 'dot' && data.dotConstrainToMap) {
            clipPath = (
                <clipPath id={`clippath-${basemap.mapId}`}>
                    { clips }
                </clipPath>
            );
        }

        const basegroup = (
            <g id={basemap.mapId}>{ paths }</g>
        );

        const datagroup = renderData(basemap, data, projection);

        const viewBox = `0 0 ${width} ${height}`;
        return (
            <svg viewBox={viewBox}>
                { clipPath }
                { basegroup }
                { datagroup }
            </svg>
        );
    }
};
