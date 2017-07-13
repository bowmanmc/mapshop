import React from 'react';

import ColorPicker from './ColorPicker';


class BaseMapControls extends React.Component {

    constructor(props) {
        super(props);

        this.onColorChange = this.onColorChange.bind(this);
    }

    onColorChange(evt) {
        let change = {};
        change[evt.name] = evt.value;
        this.props.onChange(change);
    }

    render() {
        const settings = this.props.settings;

        return (
            <div className="BaseMapControls">
                <div className="BaseMapControls__control">
                    <ColorPicker
                        name='fillColor'
                        color={ settings.fillColor }
                        onChange={ this.onColorChange } />
                    Fill Color
                </div>
                <div className="BaseMapControls__control">
                    <ColorPicker
                        name='stroke'
                        color={ settings.stroke }
                        onChange={ this.onColorChange } />
                    Stroke Color
                </div>
            </div>
        );
    }
};

export default BaseMapControls;
