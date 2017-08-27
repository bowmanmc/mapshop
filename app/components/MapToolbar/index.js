import React from 'react';

import LayerControls from './LayerControls';


class MapEditorToolbar extends React.Component {

    constructor(props) {
        super(props);

        this.onLayerChange = this.onLayerChange.bind(this);
    }

    onLayerChange(id, updates) {
        let newLayers = this.props.project.layers.map((layer, idx) => {
            if (idx === id) {
                return Object.assign({}, this.props.project.layers[id], updates);
            }
            return layer;
        });

        let changes = Object.assign({}, this.props.project, {
            layers: newLayers
        });
        this.props.onChange(changes);
    }

    render() {
        const project = this.props.project;

        let layerControls = [];
        for (let i = 0; i < project.layers.length; i++) {
            let layer = project.layers[i];
            layerControls.push(
                <LayerControls settings={ layer } onChange={ this.onLayerChange } key={ i } id={ i } />
            );
        }

        return (
            <div className="MapEditorToolbar">
                <div className="MapEditorToolbar__item">
                    <h2>Map Layers</h2>
                    { layerControls }
                </div>
            </div>
        );
    }
};

export default MapEditorToolbar;
