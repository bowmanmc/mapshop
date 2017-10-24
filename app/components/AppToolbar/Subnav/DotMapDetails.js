import React, { Component } from 'react';
import Select from 'react-select';
import Slider from 'rc-slider';

import ColorPicker from '../ColorPicker';


class DotMapDetails extends Component {

    constructor(props, context) {
        super(props, context);

        this.getFileInfo = this.getFileInfo.bind(this);
    }

    getFileInfo(data) {
        let fileInfo = {
            columns: []
        };

        // is there a dataFile present?

        return fileInfo;
    }

    render() {
        const data = this.props.data;

        const fileInfo = this.getFileInfo(data);

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
                        options={fileInfo.columns}
                        searchable={false}
                        onChange={(selected) => {
                            this.props.onFieldChange({
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
                        options={fileInfo.columns}
                        searchable={false}
                        onChange={(selected) => {
                            this.props.onFieldChange({
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
