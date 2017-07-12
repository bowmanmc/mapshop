import React from 'react';

import ColorPicker from './ColorPicker';


class BaseMapControls extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fillColor: '#ffdd00',
            stroke: '#0099cc'
        };

        this.onColorChange = this.onColorChange.bind(this);
    }

    onColorChange(evt) {
        let change = {};
        change[evt.name] = evt.value;
        this.setState(change);
    }

    render() {
        return (
            <div className="BaseMapControls">
                <div className="BaseMapControls__control">
                    <ColorPicker
                        name='fillColor'
                        color={ this.state.fillColor }
                        onChange={ this.onColorChange } />
                    Fill Color
                </div>
                <div className="BaseMapControls__control">
                    <ColorPicker
                        name='stroke'
                        color={ this.state.stroke }
                        onChange={ this.onColorChange } />
                    Stroke Color
                </div>
            </div>
        );
    }
};

export default BaseMapControls;
