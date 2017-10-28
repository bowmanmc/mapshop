import React, { Component } from 'react';
import Select from 'react-select';
import Slider from 'rc-slider';

import ColorPicker from '../ColorPicker';
import DataFileUtils from './DataFileUtils';


class DotMapDetails extends Component {

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
                console.log(`Updating columns for ${nextProps.data.filepath} to ${JSON.stringify(cols)}`);
                comp.setState({columns: cols});
            });
        }
    }

    render() {
        const data = this.props.data;
        console.log('Rendering DotMapDetails with columns: ' + JSON.stringify(this.state.columns));
        return (
            <div className="DotMapDetails">
                <div className="FormInput">
                    <label>Dot Radius</label>
                    <div className="FormInput__split-ctrl">
                        <div className="FormInput__split-ctrl-picker">
                            <Slider
                                min={ 0 }
                                max={ 10 }
                                defaultValue={ data.dotRadius }
                                onChange={(newVal) => {
                                    this.props.onChange({
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
                        onChange={ this.props.onChange } />
                </div>

                <div className="FormInput">
                    <label>Latitude Column</label>
                    <Select
                        name="dotColumnLatitude"
                        clearable={false}
                        value={data.dotColumnLatitude}
                        options={this.state.columns}
                        searchable={false}
                        onChange={(selected) => {
                            this.props.onChange({
                                name: 'dotColumnLatitude',
                                value: selected.value
                            });
                        }} />
                </div>

                <div className="FormInput">
                    <label>Longitude Column</label>
                    <Select
                        name="dotColumnLongitude"
                        clearable={false}
                        value={data.dotColumnLongitude}
                        options={this.state.columns}
                        searchable={false}
                        onChange={(selected) => {
                            this.props.onChange({
                                name: 'dotColumnLongitude',
                                value: selected.value
                            });
                        }} />
                </div>
            </div>
        );
    }
}

export default DotMapDetails;
