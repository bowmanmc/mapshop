import React from 'react';

import DataLoader from '../DataLoader';
import SvgRenderer from './SvgRenderer';


class MapEditorCanvas extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const layer = this.props.project.layers[0];
        const mapData = DataLoader.loadMapData(layer.mapId);
        const svg = SvgRenderer.render(this.props.project, mapData);
        return (
            <div ref="MapEditorCanvas" className="MapEditorCanvas">
                { svg }
            </div>
        );
    }
};

export default MapEditorCanvas;
