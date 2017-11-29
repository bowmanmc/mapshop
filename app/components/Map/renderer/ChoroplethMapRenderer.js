import React from 'react';

import * as d3 from 'd3';
import { geoCentroid, geoPath } from 'd3-geo';
import { geoAlbersUsa, geoConicConformal } from 'd3-geo';
import { schemeBlues } from 'd3-scale-chromatic';

import fs from 'fs';

import MapIndex from '../../../data/maps';

import DataLoader from './DataLoader';
import MapUtils from './MapUtils';


export default {

    render: function(project, basemap, data, mapData, mapInfo) {

        let mapSetup = MapUtils.setupMap(basemap, mapData);

        let choroplethData = null;
        if (data.filepath) {
            choroplethData = DataLoader.loadChoroplethData(data.filepath, data.choroplethColumnGeo, data.choroplethColumnValue);
        }

        let color = null;
        if (choroplethData && typeof(choroplethData.MT_MIN) !== 'undefined') {
            color = d3.scaleThreshold()
                .domain(d3.range(choroplethData.MT_MIN, choroplethData.MT_MAX))
                .range(schemeBlues[data.choroplethNumClasses]);
        }

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
            const geoType = feature.properties[data.choroplethGeoType];
            //console.log(`${geoType}: ${choroplethData[geoType]}`);

            if (color) {
                const val = choroplethData[geoType];
                const c = color(val);
                if (c) {
                    mapSetup.styles.fill = c ;
                }
            }

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
