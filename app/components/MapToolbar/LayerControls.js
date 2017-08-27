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
        this.props.onChange(this.props.id, change);
    }

    onMapChange(newMap) {
        this.props.onChange(this.props.id, {
            'mapId': newMap.value
        });
    }

    render() {
        const settings = this.props.settings;
        //console.log('Rendering map with settings: ' + JSON.stringify(settings));
        return (
            <div className="LayerControls">

                <div className="LayerControls__control-wide">
                    <MapSelector value={ settings.mapId } onChange={ this.onMapChange } />
                </div>

                <div className="LayerControls__control-container">
                    <div className="LayerControls__control-small">
                        <div className="LayerControls__color-picker">
                            <ColorPicker
                                name='fillColor'
                                color={ settings.fillColor }
                                onChange={ this.onColorChange } />
                        </div>
                        <div className="LayerControls__control-label">
                            Fill
                        </div>
                    </div>

                    <div className="LayerControls__control-small">
                        <div className="LayerControls__color-picker">
                            <ColorPicker
                                name='stroke'
                                color={ settings.stroke }
                                onChange={ this.onColorChange } />
                        </div>
                        <div className="LayerControls__control-label">
                            Stroke
                        </div>
                    </div>
                    <div className="LayerControls__control-small">
                        <div className="LayerControls__color-picker">
                            <input className="LayerControls__number" placeholder="1" type="number" />
                        </div>
                        <div className="LayerControls__control-label">
                            Stroke Width
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default LayerControls;
