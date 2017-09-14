import React from 'react';

import LayerControls from './LayerControls';


class MapEditorToolbar extends React.Component {

    constructor(props) {
        super(props);

        this.onLayerChange = this.onLayerChange.bind(this);
    }

    onLayerChange(id, updates) {
        let newLayers = this.props.project.basemap.map((layer, idx) => {
            if (idx === id) {
                return Object.assign({}, this.props.project.basemap[id], updates);
            }
            return layer;
        });

        let changes = Object.assign({}, this.props.project, {
            basemap: newLayers
        });
        this.props.onChange(changes);
    }

    render() {
        const project = this.props.project;

        let layerControls = [];
        for (let i = 0; i < project.basemap.length; i++) {
            let layer = project.basemap[i];
            layerControls.push(
                <LayerControls settings={ layer } onChange={ this.onLayerChange } key={ i } id={ i } />
            );
        }

        return (
            <div className="MapEditorToolbar">
                <div className="MapEditorToolbar__item">
                    <h2>Base Map</h2>
                    { layerControls }
                </div>
                <div className="MapEditorToolbar__item">
                    <h2>Data</h2>
                </div>
            </div>
        );
    }
};

export default MapEditorToolbar;
