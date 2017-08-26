import React from 'react';

import LayerControls from './LayerControls';


class MapEditorToolbar extends React.Component {

    constructor(props) {
        super(props);

        this.onBasemapChange = this.onBasemapChange.bind(this);
    }

    onBasemapChange(updates) {
        let basemap = Object.assign({}, this.props.project.basemap, updates);
        let changes = Object.assign({}, this.props.project, {
            basemap: basemap
        });
        this.props.onChange(changes);
    }

    render() {
        const project = this.props.project;

        return (
            <div className="MapEditorToolbar">
                <div className="MapEditorToolbar__item">
                    <h2>Map Layers</h2>
                    <LayerControls settings={ project.basemap } onChange={ this.onBasemapChange } />
                </div>
            </div>
        );
    }
};

export default MapEditorToolbar;
