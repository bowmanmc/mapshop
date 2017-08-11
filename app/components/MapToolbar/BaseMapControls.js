import React from 'react';

import BaseMapSelector from './BaseMapSelector';
import ColorPicker from '../ColorPicker';


class BaseMapControls extends React.Component {

    constructor(props) {
        super(props);

        this.onColorChange = this.onColorChange.bind(this);
        this.onMapChange = this.onMapChange.bind(this);
    }

    onColorChange(evt) {
        let change = {};
        change[evt.name] = evt.value;
        this.props.onChange(change);
    }

    onMapChange(newMap) {
        this.props.onChange({
            'mapId': newMap.value
        });
    }

    render() {
        const settings = this.props.settings;
        //console.log('Rendering map with settings: ' + JSON.stringify(settings));
        return (
            <div className="BaseMapControls">
                <div className="BaseMapControls__control">
                    <BaseMapSelector value={ settings.mapId } onChange={ this.onMapChange } />
                </div>
                <div className="BaseMapControls__colors">
                    <div className="BaseMapControls__color-input">
                        <div className="BaseMapControls__color-picker">
                            <ColorPicker
                                name='fillColor'
                                color={ settings.fillColor }
                                onChange={ this.onColorChange } />
                        </div>
                        <div className="BaseMapControls__color-label">
                            Fill
                        </div>
                    </div>
                    <div className="BaseMapControls__color-input">
                        <div className="BaseMapControls__color-picker">
                            <ColorPicker
                                name='stroke'
                                color={ settings.stroke }
                                onChange={ this.onColorChange } />
                        </div>
                        <div className="BaseMapControls__color-label">
                            Stroke
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default BaseMapControls;
