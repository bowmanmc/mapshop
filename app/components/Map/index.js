import fs from 'fs';
import React from 'react';

import D3Map from './D3Map';


class MapEditorCanvas extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="MapEditorCanvas">
                <D3Map project={ this.props.project } />
            </div>
        );
    }
};

export default MapEditorCanvas;
