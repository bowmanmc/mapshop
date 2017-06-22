import React from 'react';
import { connect }  from 'react-redux';

import SidebarActions from './SidebarActions';
import RecentProjects from './RecentProjects';
import Logo from '../../components/Logo';


class OpenProjectScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let className = "OpenProjectScreen";
        // Hide this screen when a project is loaded into state. Show it if
        // there is no project loaded.
        if (!this.props.project) {
            className = "OpenProjectScreen Screen-hidden";
        }

        return (
            <div className={className}>
                <div className="OpenProjectScreen__Background" />
                <div className="OpenProjectScreen__Content">
                    <div className="OpenProjectScreen__Sidebar">
                        <Logo />
                        <SidebarActions />
                    </div>
                    <div className="OpenProjectScreen__Main">
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

export default connect(mapStateToProps)(OpenProjectScreen);
