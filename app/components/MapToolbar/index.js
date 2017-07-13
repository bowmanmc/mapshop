import React from 'react';

import BaseMapControls from './BaseMapControls';
import DataControls from './DataControls';
import ReferenceDataControls from './ReferenceDataControls';


class MapEditorToolbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            basemap: {
                fillColor: '#ffdd00',
                stroke: '#0099cc'
            }
        };

        this.onBasemapChange = this.onBasemapChange.bind(this);
    }

    onBasemapChange(updates) {
        let bm = Object.assign({}, this.state.basemap, updates);
        this.setState({
            basemap: bm
        });
    }

    render() {
        return (
            <div className="MapEditorToolbar">
                <div className="MapEditorToolbar__item">
                    <h2>Base Map</h2>
                    <BaseMapControls settings={ this.state.basemap } onChange={ this.onBasemapChange } />
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
