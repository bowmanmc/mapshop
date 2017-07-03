import fs from 'fs';
import React from 'react';

import Map from './Map';


class MapEditorCanvas extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="MapEditorCanvas">
                <Map />
            </div>
        );
    }
};

export default MapEditorCanvas;
