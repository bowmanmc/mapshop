import React from 'react';

import AppToolbar from '../components/AppToolbar';
import Map from '../components/Map';
import StateOverlay from '../components/StateOverlay';


const MapEditorScreen = () => {
    //console.log('Rendering: ' + JSON.stringify(this.props.project));
    //<Map project={ this.props.project } />
    return (
        <div className="MapEditorScreen">
            <div className="MapEditorScreen__apptoolbar">
                <AppToolbar />
            </div>
            <div className="MapEditorScreen__workarea">
                <StateOverlay />
            </div>
        </div>
    );
}

export default MapEditorScreen;
