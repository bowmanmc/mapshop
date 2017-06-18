import React from 'react';

import Logo from '../../components/Logo';


const StartScreen = () => {
    return (
        <div className="StartScreen">
            <div className="StartScreen__Background" />
            <div className="StartScreen__Content">
                <div className="StartScreen__Sidebar">
                    <Logo />
                </div>
            </div>
        </div>
    );
};

export default StartScreen;
