import React from 'react';
import { connect }  from 'react-redux';

import SidebarActions from './SidebarActions';
import RecentProjects from './RecentProjects';
import Logo from '../../components/Logo';


class StartScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let className = "StartScreen";
        // Hide this screen when a project is loaded into state. Show it if
        // there is no project loaded.
        if (!this.props.project) {
            className = "StartScreen Screen-hidden";
        }

        return (
            <div className={className}>
                <div className="StartScreen__Background" />
                <div className="StartScreen__Content">
                    <div className="StartScreen__Sidebar">
                        <Logo />
                        <SidebarActions />
                    </div>
                    <div className="StartScreen__Main">
                        <RecentProjects />
                    </div>
                </div>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        project: state.project
    };
}

export default connect(mapStateToProps)(StartScreen);
