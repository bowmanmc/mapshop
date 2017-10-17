import React, { Component } from 'react';
import { connect } from 'react-redux';


class StateOverlay extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const stateString = JSON.stringify(this.props.state, null, '    ');
        return (
            <div className="StateOverlay">
                <pre>{stateString}</pre>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    };
};

export default connect(mapStateToProps, null)(StateOverlay);
