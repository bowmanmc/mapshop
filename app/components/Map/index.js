import React from 'react';
import fs from 'fs';

import SvgRenderer from './SvgRenderer';


class MapEditorCanvas extends React.Component {

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
        const mapData = this.loadMapData(this.props.project.basemap.mapId);
        const svg = SvgRenderer.render(this.props.project, mapData);
        return (
            <div ref="MapEditorCanvas" className="MapEditorCanvas">
                { svg }
            </div>
        );
    }
};

export default MapEditorCanvas;
