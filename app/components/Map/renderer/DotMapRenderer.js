import React from 'react';
import fs from 'fs';

import MapIndex from '../../../data/maps';

import DataLoader from './DataLoader';
import MapUtils from './MapUtils';


const renderDots = (basemap, data, projection) => {
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

        const mapSetup = MapUtils.setupMap(basemap, mapData);

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
            let d = mapSetup.path(feature);
            paths.push(
                <path key={featureId}
                    id={featureId}
                    {...mapSetup.styles}
                    d={d} />
            );
            clips.push(
                <path key={featureId}
                    id={featureId}
                    d={d} />
            );
        });

        let clipPath = null;
        if (data.dotConstrainToMap) {
            clipPath = (
                <clipPath id={`clippath-${basemap.mapId}`}>
                    { clips }
                </clipPath>
            );
        }

        const basegroup = (
            <g id={basemap.mapId}>{ paths }</g>
        );

        const datagroup = renderDots(basemap, data, mapSetup.projection);

        const viewBox = `0 0 ${mapSetup.size.width} ${mapSetup.size.height}`;
        return (
            <svg viewBox={viewBox}>
                { clipPath }
                { basegroup }
                { datagroup }
            </svg>
        );
    }
};
