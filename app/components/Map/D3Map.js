import React from 'react';

import fs from 'fs';

import d3 from 'd3';
import { geoCentroid, geoConicConformal, geoPath } from 'd3-geo';


class D3Map extends React.Component {

    constructor(props) {
        super(props);
    }

    loadMapData() {
        // todo: this needs to be fixed to work in a packaged app...
        const filepath = `${process.cwd()}/app/data/state.oh.json`;
        console.log('Loading: ' + filepath);
        const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));
        //console.log('Loaded data: ' + JSON.stringify(data));
        return data;
    }

    render() {
        const project = this.props.project;

        const mapData = this.loadMapData();
        const projection = geoConicConformal();
        const path = geoPath().projection(projection);

        const width = this.props.size.width;
        const height = this.props.size.height;

        const centroid = geoCentroid(mapData.features[0]);
        const r = [centroid[0] * -1, centroid[1] * -1];
        projection.scale(1).translate([0, 0]).rotate(r);

        const b = path.bounds(mapData);
        const s = 0.95 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height);
        const t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];
        projection.scale(s).translate(t);

        const styles = {
            fill: 'none',
            stroke: project.basemap.stroke,
            'strokeWidth': 0.5
        };
        if (project.basemap.fillColor) {
            styles.fill = project.basemap.fillColor;
        }

        const state = mapData.features.map((d, i) => {
            return (
                <path
                    {...styles}
                    key={'path-' + i}
                    d={path(d)}
                    className='state'
                    />
            );
        });

        return (
            <svg ref={node => this.node = node}
                width={width} height={height}>
                {state}
            </svg>
        );
    }
};

export default D3Map;
