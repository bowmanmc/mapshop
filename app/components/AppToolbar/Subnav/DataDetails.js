import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import Slider from 'rc-slider';

import * as actions from '../../../state/data/actions';

import ColorPicker from '../ColorPicker';
import FilePicker from '../FilePicker';

import ChoroplethMapDetails from './ChoroplethMapDetails';
import DataFileUtils from './DataFileUtils';
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

        this.onDataFileChange = this.onDataFileChange.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
    }

    onDataFileChange(evt) {
        // update data.filepath
        let changes = {};
        changes[evt.name] = evt.value;
        // Update file dependent attrs (column indexes)
        DataFileUtils.getColumns(evt.value).then(columns => {
            let latGuess = DataFileUtils.guessLatitudeColumn(columns);
            changes['dotColumnLatitude'] = latGuess;
            let lonGuess = DataFileUtils.guessLongitudeColumn(columns);
            changes['dotColumnLongitude'] = lonGuess;
            //console.log('Changes: ' + JSON.stringify(changes));
            this.props.dispatchEditData(changes);
        });
    }

    onFieldChange(evt) {
        let changes = {};
        changes[evt.name] = evt.value;
        this.props.dispatchEditData(changes);
    }

    render() {
        const basemap = this.props.basemap;
        const data = this.props.data;

        let attrs = null;
        if (data.renderType === 'dot') {
            attrs = <DotMapDetails data={ data } onChange={ this.onFieldChange } />
        }
        else {
            attrs = <ChoroplethMapDetails data={ data } basemap={ basemap } onChange={ this.onFieldChange } />
        }

        return (
            <div className="DataDetails">

                <div className="FormInput">
                    <label>Data File</label>
                    <FilePicker
                        value={ data.filepath }
                        onChange={ this.onDataFileChange }
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
        basemap: state.basemap,
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
