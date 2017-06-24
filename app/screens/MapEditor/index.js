import React from 'react';
import { connect }  from 'react-redux';

import MapEditor from './MapEditor';
import * as actions from '../../state/project/actions';


class MapEditorScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MapEditor
                onProjectClose={this.props.dispatchCloseProject}
            />
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
