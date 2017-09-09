import React from 'react';

import DataLoader from '../../data/loader';
import SvgRenderer from './SvgRenderer';


class MapEditorCanvas extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const layers = this.props.project.layers;
        const mapData = [];
        layers.forEach(layer => {
            mapData.push(DataLoader.load(layer.mapId));
        });

        const svg = SvgRenderer.render(this.props.project, mapData);

        return (
            <div ref="MapEditorCanvas" className="MapEditorCanvas">
                { svg }
            </div>
        );
    }
};

export default MapEditorCanvas;
