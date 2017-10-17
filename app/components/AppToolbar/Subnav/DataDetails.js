import React, { Component } from 'react';
import { connect } from 'react-redux';


class DataDetails extends Component {

    constructor(props, context) {
        super(props, context);

        this.onFieldChange = this.onFieldChange.bind(this);
    }

    onFieldChange(evt) {

    }

    render() {
        const basemap = this.props.basemap;

        return (
            <div className="DataDetails">

                <div className="FormInput">
                    <label>Data File</label>
                    <input type="file" />
                </div>

                <div className="FormInput">
                    <label>Display Type</label>
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
