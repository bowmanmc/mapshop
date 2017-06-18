import React from 'react';

import SidebarActions from './SidebarActions';
import RecentProjects from './RecentProjects';
import Logo from '../../components/Logo';


const StartScreen = () => {
    return (
        <div className="StartScreen">
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
};

export default StartScreen;
