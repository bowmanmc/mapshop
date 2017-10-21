import React, { Component } from 'react';
import Slider from 'rc-slider';

import ColorPicker from '../ColorPicker';


const DotMapDetails = (props) => {

    const data = props.data;

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
                                props.onChange({
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
                    onChange={ props.onChange } />
            </div>
        </div>
    );
}

export default DotMapDetails;
