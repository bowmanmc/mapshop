import React from 'react';
import { connect }  from 'react-redux';

import AppToolbar from '../components/AppToolbar';
import Map from '../components/Map';
import MapToolbar from '../components/MapToolbar';
import * as actions from '../state/project/actions';


class MapEditorScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="MapEditorScreen">
                <div className="MapEditorScreen__apptoolbar">
                    <AppToolbar />
                </div>
                <div className="MapEditorScreen__workarea">
                    <MapToolbar />
                    <Map />
                </div>
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
