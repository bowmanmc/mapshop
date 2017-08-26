import React from 'react';

import MapSelector from './MapSelector';
import ColorPicker from '../ColorPicker';


class LayerControls extends React.Component {

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
            <div className="LayerControls">
                <div className="LayerControls__control">
                    <MapSelector value={ settings.mapId } onChange={ this.onMapChange } />
                </div>
                <div className="LayerControls__colors">
                    <div className="LayerControls__color-input">
                        <div className="LayerControls__color-picker">
                            <ColorPicker
                                name='fillColor'
                                color={ settings.fillColor }
                                onChange={ this.onColorChange } />
                        </div>
                        <div className="LayerControls__color-label">
                            Fill
                        </div>
                    </div>
                    <div className="LayerControls__color-input">
                        <div className="LayerControls__color-picker">
                            <ColorPicker
                                name='stroke'
                                color={ settings.stroke }
                                onChange={ this.onColorChange } />
                        </div>
                        <div className="LayerControls__color-label">
                            Stroke
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default LayerControls;
