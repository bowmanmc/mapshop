import React, { Component } from 'react';
import Select from 'react-select';
import Slider from 'rc-slider';

import MapLoader from '../../../data/loader';

import ColorPicker from '../ColorPicker';
import DataFileUtils from './DataFileUtils';


const COLOR_RAMPS = [
    {value: 'schemeGnBu', label: 'GnBu'},
    {value: 'schemePuBu', label: 'PuBu'},
    {value: 'schemeYlGn', label: 'YlGn'},
    {value: 'schemeYlGnBu', label: 'YlGnBu'},
    {value: 'schemeYlOrRd', label: 'YlOrRd'},
    {value: 'schemeBlues', label: 'Blues'},
    {value: 'schemeGreens', label: 'Greens'},
    {value: 'schemeGreys', label: 'Greys'},
    {value: 'schemeOranges', label: 'Oranges'},
    {value: 'schemePurples', label: 'Purples'},
    {value: 'schemeReds', label: 'Reds'}
];

class ChoroplethMapDetails extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            columns: []
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data.filepath !== this.props.data.filepath) {
            let comp = this;
            DataFileUtils.getColumns(nextProps.data.filepath).then(cols => {
                //console.log(`Updating columns for ${nextProps.data.filepath} to ${JSON.stringify(cols)}`);
                comp.setState({columns: cols});
            });
        }
    }

    render() {
        const basemap = this.props.basemap;
        const data = this.props.data;

        const mapData = MapLoader.loadMap(basemap.mapId, basemap.resolution);

        let repFeature = mapData;
        if (mapData.features && mapData.features.length > 0) {
            repFeature = mapData.features[0];
        }
        console.log('Properties: ' + JSON.stringify(repFeature.properties));

        let cols = Object.keys(repFeature.properties).sort();
        let matchColumns = [];
        cols.forEach(col => {
            matchColumns.push({
                value: col,
                label: `${col} (${repFeature.properties[col]})`
            });
        });

        return (
            <div className="ChoroplethMapDetails">
                <div className="FormInput">
                    <label>Number of Classes </label>
                    <div className="FormInput__split-ctrl">
                        <div className="FormInput__split-ctrl-picker">
                            <Slider
                                min={ 3 }
                                max={ 9 }
                                defaultValue={ data.choroplethNumClasses }
                                onChange={(newVal) => {
                                    this.props.onChange({
                                        name: 'choroplethNumClasses',
                                        value: newVal
                                    });
                                }}/>
                        </div>
                        <div className="FormInput__split-ctrl-val">
                            { data.choroplethNumClasses }
                        </div>
                    </div>
                </div>

                <div className="FormInput">
                    <label>Color Ramp</label>
                    <Select
                        name="choroplethColorRamp"
                        clearable={false}
                        value={data.choroplethColorRamp}
                        options={COLOR_RAMPS}
                        searchable={false}
                        onChange={(selected) => {
                            this.props.onChange({
                                name: 'choroplethColorRamp',
                                value: selected.value
                            });
                        }} />
                </div>

                <div className="FormInput">
                    <label>Geo Column Type</label>
                    <Select
                        name="choroplethGeoType"
                        clearable={false}
                        value={data.choroplethGeoType}
                        options={matchColumns}
                        searchable={false}
                        onChange={(selected) => {
                            this.props.onChange({
                                name: 'choroplethGeoType',
                                value: selected.value
                            });
                        }} />
                </div>

                <div className="FormInput">
                    <label>Geo Data Column</label>
                    <Select
                        name="choroplethColumnGeo"
                        clearable={false}
                        value={data.choroplethColumnGeo}
                        options={this.state.columns}
                        searchable={false}
                        onChange={(selected) => {
                            this.props.onChange({
                                name: 'choroplethColumnGeo',
                                value: selected.value
                            });
                        }} />
                </div>

                <div className="FormInput">
                    <label>Value Data Column</label>
                    <Select
                        name="choroplethColumnValue"
                        clearable={false}
                        value={data.choroplethColumnValue}
                        options={this.state.columns}
                        searchable={false}
                        onChange={(selected) => {
                            this.props.onChange({
                                name: 'choroplethColumnValue',
                                value: selected.value
                            });
                        }} />
                </div>
            </div>
        );
    } // render
}

export default ChoroplethMapDetails;
