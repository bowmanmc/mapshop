import React from 'react';

import BaseMapControls from './BaseMapControls';
import DataControls from './DataControls';
import ReferenceDataControls from './ReferenceDataControls';


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
                    <h2>Base Map</h2>
                    <BaseMapControls settings={ project.basemap } onChange={ this.onBasemapChange } />
                </div>

                <div className="MapEditorToolbar__item">
                    <h2>Reference Data</h2>
                    <ReferenceDataControls />
                </div>

                <div className="MapEditorToolbar__item">
                    <h2>Data</h2>
                    <DataControls />
                </div>

            </div>
        );
    }
};

export default MapEditorToolbar;
