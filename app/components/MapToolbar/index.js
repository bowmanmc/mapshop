import React from 'react';

import BaseMapControls from './BaseMapControls';
import DataControls from './DataControls';
import ReferenceDataControls from './ReferenceDataControls';


const MapEditorToolbar = (props) => {
    return (
        <div className="MapEditorToolbar">
            <div className="MapEditorToolbar__item">
                <h2>Base Map</h2>
                <BaseMapControls />
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
};

export default MapEditorToolbar;
