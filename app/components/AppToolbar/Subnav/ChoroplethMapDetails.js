import React, { Component } from 'react';
import Slider from 'rc-slider';

import ColorPicker from '../ColorPicker';


const ChoroplethMapDetails = (props) => {

    const data = props.data;

    return (
        <div className="ChoroplethMapDetails">
            <div className="FormInput">
                <label>Number of Classes</label>
            </div>

            <div className="FormInput">
                <label>Color Ramp</label>
            </div>
        </div>
    );
}

export default ChoroplethMapDetails;
