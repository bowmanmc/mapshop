import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                    <label>Map Title</label>
                    <input onChange={this.onFieldChange}
                        type="text"
                        name="title"
                        placeholder="Map Title"
                        value={'test'} />
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
