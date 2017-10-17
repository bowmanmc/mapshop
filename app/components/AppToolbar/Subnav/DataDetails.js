import React, { Component } from 'react';
import { connect } from 'react-redux';

import Select from 'react-select';
import Slider from 'rc-slider';

import ColorPicker from '../ColorPicker';


const DATA_TYPES = [{
    label: 'Dot',
    value: 'dot'
}, {
    label: 'Choropleth',
    value: 'choropleth'
}];

class DataDetails extends Component {

    constructor(props, context) {
        super(props, context);

        this.onFieldChange = this.onFieldChange.bind(this);
    }

    onFieldChange(evt) {

    }

    render() {
        const data = this.props.data;

        return (
            <div className="DataDetails">

                <div className="FormInput">
                    <label>Data File</label>
                    <input type="file" />
                </div>

                <div className="FormInput">
                    <label>Display Type</label>
                    <Select
                        name="datatype"
                        clearable={false}
                        value={data.renderType}
                        options={DATA_TYPES} />
                </div>

                <div className="DataDetails__dot">
                    <div className="FormInput">
                        <label>Dot Radius</label>
                        <div className="FormInput__split-ctrl">
                            <div className="FormInput__split-ctrl-picker">
                                <Slider
                                    min={ 0 }
                                    max={ 10 }
                                    defaultValue={ data.dotRadius } />
                            </div>
                            <div className="FormInput__split-ctrl-val">
                                { data.dotRadius }
                            </div>
                        </div>
                    </div>

                    <div className="FormInput">
                        <label>Dot Color</label>
                        <ColorPicker
                            name='dotColor'
                            color={ data.dotColor }
                            onChange={ this.onFieldChange } />
                    </div>
                </div>

                <div className="DataDetails__choropleth">
                    <div className="FormInput">
                        <label>Number of Classes</label>
                    </div>

                    <div className="FormInput">
                        <label>Color Ramp</label>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchEditProject: (changes) => {
            dispatch(actions.editData(changes));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataDetails);
