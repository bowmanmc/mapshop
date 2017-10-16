import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from 'rc-slider';

import ColorPicker from '../ColorPicker';
import MapSelector from '../MapSelector';


class BasemapDetails extends Component {

    constructor(props, context) {
        super(props, context);

        this.onFieldChange = this.onFieldChange.bind(this);
    }

    onFieldChange(evt) {

    }

    render() {
        const basemap = this.props.basemap;

        return (
            <div className="BasemapDetails">

                <div className="FormInput">
                    <label>Base Map</label>
                    <MapSelector value={basemap.mapId} onChange={this.onFieldChange} />
                </div>

                <div className="FormInput">
                    <label>Fill Color</label>
                    <ColorPicker
                        name='fillColor'
                        color={ basemap.fillColor }
                        onChange={ this.onFieldChange } />
                </div>

                <div className="FormInput">
                    <label>Stroke Color</label>
                    <ColorPicker
                        name='strokeColor'
                        color={ basemap.strokeColor }
                        onChange={ this.onFieldChange } />
                </div>

                <div className="FormInput">
                    <label>Stroke Width</label>
                    <div className="FormInput__split-ctrl">
                        <div className="FormInput__split-ctrl-picker">
                            <Slider
                                min={ 0 }
                                max={ 20 }
                                step={ 0.5 }
                                defaultValue={ basemap.strokeWidth } />
                        </div>
                        <div className="FormInput__split-ctrl-val">
                            { basemap.strokeWidth }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        basemap: state.basemap
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchEditProject: (changes) => {
            dispatch(actions.editBasemap(changes));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasemapDetails);
