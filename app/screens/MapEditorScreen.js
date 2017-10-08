import React from 'react';
import { connect }  from 'react-redux';

import AppToolbar from '../components/AppToolbar';
import Map from '../components/Map';
import * as actions from '../state/project/actions';


class MapEditorScreen extends React.Component {
    constructor(props) {
        super(props);

        this.onProjectChange = this.onProjectChange.bind(this);
    }

    onProjectChange(changes) {
        this.props.dispatchEditProject(changes);
    }

    render() {
        //console.log('Rendering: ' + JSON.stringify(this.props.project));
        return (
            <div className="MapEditorScreen">
                <div className="MapEditorScreen__apptoolbar">
                    <AppToolbar project={ this.props.project } />
                </div>
                <div className="MapEditorScreen__workarea">
                    <Map project={ this.props.project } />
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
        },
        dispatchEditProject: (newProject) => {
            dispatch(actions.editProject(newProject));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapEditorScreen);
