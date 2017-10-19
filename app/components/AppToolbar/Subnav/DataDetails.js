import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import Slider from 'rc-slider';

import * as actions from '../../../state/data/actions';

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

        this.onFieldCheange = this.onFieldChange.bind(this);
    }

    onFieldChange(evt) {
        console.log(`Data Changes: ${JSON.stringify(evt)}`);
        let changes = {};
        changes[evt.name] = evt.value;
        this.props.dispatchEditData(changes);
    }

    renderDotAttrs(data) {
        return (
            <div className="DataDetails__dot">
                <div className="FormInput">
                    <label>Dot Radius</label>
                    <div className="FormInput__split-ctrl">
                        <div className="FormInput__split-ctrl-picker">
                            <Slider
                                min={ 0 }
                                max={ 10 }
                                defaultValue={ data.dotRadius }
                                onChange={(newVal) => {
                                    this.onFieldChange({
                                        name: 'dotRadius',
                                        value: newVal
                                    });
                                }}/>
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
        );
    }

    renderChoroplethAttrs(data) {
        return (
            <div className="DataDetails__choropleth">
                <div className="FormInput">
                    <label>Number of Classes</label>
                </div>

                <div className="FormInput">
                    <label>Color Ramp</label>
                </div>
            </div>
        );
    }

    render() {
        const data = this.props.data;

        let attrs = null;
        if (data.renderType === 'dot') {
            attrs = this.renderDotAttrs(data);
        }
        else {
            attrs = this.renderChoroplethAttrs(data);
        }

        return (
            <div className="DataDetails">

                <div className="FormInput">
                    <label>Data File</label>
                    <input type="file" />
                </div>

                <div className="FormInput">
                    <label>Display Type</label>
                    <Select
                        name="renderType"
                        clearable={false}
                        value={data.renderType}
                        options={DATA_TYPES}
                        searchable={false}
                        onChange={(selected) => {
                            this.onFieldChange({
                                name: 'renderType',
                                value: selected.value
                            });
                        }} />
                </div>

                { attrs }

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
        dispatchEditData: (changes) => {
            dispatch(actions.editData(changes));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataDetails);
