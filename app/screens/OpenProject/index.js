import React from 'react';
import { connect }  from 'react-redux';

import SidebarActions from './SidebarActions';
import RecentProjects from './RecentProjects';
import Logo from '../../components/Logo';
import * as actions from '../../state/project/actions';


class OpenProjectScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let className = "OpenProjectScreen";
        // Hide this screen when a project is loaded into state. Show it if
        // there is no project loaded.
        if (this.props.project) {
            className = "OpenProjectScreen Screen-hidden";
        }
        console.log('OpenProjectScreen rendering with className: ' + className);

        return (
            <div className={className}>
                <div className="OpenProjectScreen__Background" />
                <div className="OpenProjectScreen__Content">
                    <div className="OpenProjectScreen__Sidebar">
                        <Logo />
                        <SidebarActions
                            onNewProject={this.props.dispatchNewProject} />
                    </div>
                    <div className="OpenProjectScreen__Main">
                        <RecentProjects />
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        project: state.project
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchNewProject: () => {
            dispatch(actions.newProject());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OpenProjectScreen);
