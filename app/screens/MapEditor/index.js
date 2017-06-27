import React from 'react';
import { connect }  from 'react-redux';

import MapEditorCanvas from './MapEditorCanvas';
import MapEditorToolbar from './MapEditorToolbar';
import * as actions from '../../state/project/actions';


class MapEditorScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="MapEditorScreen">
                <MapEditorToolbar />
                <MapEditorCanvas />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        project: state.project
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchCloseProject: () => {
            dispatch(actions.closeProject());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapEditorScreen);
