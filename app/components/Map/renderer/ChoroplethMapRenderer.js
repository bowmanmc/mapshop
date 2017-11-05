import React from 'react';

import d3 from 'd3';
import { geoCentroid, geoPath } from 'd3-geo';
import { geoAlbersUsa, geoConicConformal } from 'd3-geo';

import fs from 'fs';

import MapIndex from '../../../data/maps';

import DataLoader from './DataLoader';
import MapUtils from './MapUtils';


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
        features.forEach(feature => {
            const featureId = feature.properties[mapInfo.idcol] || basemap.mapId;
            paths.push(
                <path key={featureId}
                    id={featureId}
                    {...mapSetup.styles}
                    d={mapSetup.path(feature)} />
            );
        });

        const mapGroup = (
            <g id={basemap.mapId}>{ paths }</g>
        );

        const viewBox = `0 0 ${mapSetup.size.width} ${mapSetup.size.height}`;
        return (
            <svg viewBox={viewBox}>
                { mapGroup }
            </svg>
        );
    }
};
