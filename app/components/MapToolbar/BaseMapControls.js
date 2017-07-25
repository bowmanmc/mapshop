import React from 'react';

import BaseMapSelector from './BaseMapSelector';
import ColorPicker from '../ColorPicker';


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
                    <BaseMapSelector />
                </div>
                <div className="BaseMapControls__control">
                    <div className="BaseMapControls__control-label">
                        Fill Color:
                    </div>
                    <div className="BaseMapControls__control-input">
                        <ColorPicker
                            name='fillColor'
                            color={ settings.fillColor }
                            onChange={ this.onColorChange } />
                    </div>
                </div>
                <div className="BaseMapControls__control">
                    <div className="BaseMapControls__control-label">
                        Stroke Color:
                    </div>
                    <div className="BaseMapControls__control-input">
                        <ColorPicker
                            name='stroke'
                            color={ settings.stroke }
                            onChange={ this.onColorChange } />
                    </div>
                </div>
            </div>
        );
    }
};

export default BaseMapControls;
