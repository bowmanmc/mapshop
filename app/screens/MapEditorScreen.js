import React from 'react';

import AppToolbar from '../components/AppToolbar';
import Map from '../components/Map';
import StateOverlay from '../components/StateOverlay';


const MapEditorScreen = () => {
    //<StateOverlay />
    return (
        <div className="MapEditorScreen">
            <div className="MapEditorScreen__apptoolbar">
                <AppToolbar />
            </div>
            <div className="MapEditorScreen__workarea">
                <StateOverlay />
                <Map />
            </div>
        </div>
    );
}

export default MapEditorScreen;
