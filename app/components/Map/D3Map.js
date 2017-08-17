import React from 'react';

import fs from 'fs';

import d3 from 'd3';
import { geoCentroid, geoConicConformal, geoPath } from 'd3-geo';


class D3Map extends React.Component {

    constructor(props) {
        super(props);
    }

    getFeature(features, stateId) {
        var i, feature;
        var len = features.length;
        for (i = 0; i < len; i++) {
            feature = features[i];
            if (feature.properties.STUSPS === stateId) {
                return feature;
            }
        };
        console.log('ERROR: Couldn\'t find: ' + stateId);
    }

    loadMapData(mapId) {
        // todo: this needs to be fixed to work in a packaged app...
        const filepath = `${process.cwd()}/app/data/cb_2015_us_state_500k.json`;
        console.log('Loading: ' + filepath);
        const geojson = JSON.parse(fs.readFileSync(filepath, 'utf8'));

        const data = this.getFeature(geojson.features, mapId);
        return data;
    }

    render() {
        const project = this.props.project;

        const feature = this.loadMapData(project.basemap.mapId);
        const projection = geoConicConformal();
        const path = geoPath().projection(projection);

        const width = 1000;
        const height = 1000;

        const centroid = geoCentroid(feature);
        const r = [centroid[0] * -1, centroid[1] * -1];
        projection.scale(1).translate([0, 0]).rotate(r);

        const b = path.bounds(feature);
        const s = 0.95 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height);
        const t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];
        projection.scale(s).translate(t);

        let styles = {
            fill: 'none',
            stroke: 'none',
            strokeWidth: 1
        };
        if (project.basemap.fillColor && project.basemap.fillColor.a > 0) {
            let clr = project.basemap.fillColor;
            styles.fill = `rgba(${clr.r}, ${clr.g}, ${clr.b}, ${clr.a})`;
        }

        if (project.basemap.stroke && project.basemap.stroke.a > 0) {
            let clr = project.basemap.stroke;
            styles.stroke = `rgba(${clr.r}, ${clr.g}, ${clr.b}, ${clr.a})`;
        }

        const viewBox = `0 0 ${width} ${height}`;
        return (
            <svg ref={node => this.node = node}
                viewBox={viewBox}>
                <path
                    {...styles}
                    d={path(feature)}
                    className='state'
                />
            </svg>
        );
    }
};

export default D3Map;
