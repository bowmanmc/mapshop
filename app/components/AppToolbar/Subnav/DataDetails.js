import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import Slider from 'rc-slider';

import * as actions from '../../../state/data/actions';

import ColorPicker from '../ColorPicker';
import FilePicker from '../FilePicker';

import ChoroplethMapDetails from './ChoroplethMapDetails';
import DotMapDetails from './DotMapDetails';


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
        let changes = {};
        changes[evt.name] = evt.value;
        this.props.dispatchEditData(changes);
    }

    render() {
        const data = this.props.data;

        let attrs = null;
        if (data.renderType === 'dot') {
            attrs = <DotMapDetails data={ data } onChange={ this.onFieldChange } />
        }
        else {
            attrs = <ChoroplethMapDetails data={ data } onChange={ this.onFieldChange } />
        }

        return (
            <div className="DataDetails">

                <div className="FormInput">
                    <label>Data File</label>
                    <FilePicker
                        value={ data.filepath }
                        onChange={ this.onFieldChange }
                        name="filepath" />
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
