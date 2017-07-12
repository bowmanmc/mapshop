import React from 'react';

import ColorPicker from './ColorPicker';


class BaseMapControls extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fillColorPickerOpen: false
        };
    }

    render() {

        return (
            <div className="BaseMapControls">
                <div className="BaseMapControls__control">
                    Fill Color: <ColorPicker />
                </div>
            </div>
        );
    }
};

export default BaseMapControls;
