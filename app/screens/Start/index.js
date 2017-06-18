import React from 'react';

import Actions from './Actions';
import Logo from '../../components/Logo';


const StartScreen = () => {
    return (
        <div className="StartScreen">
            <div className="StartScreen__Background" />
            <div className="StartScreen__Content">
                <div className="StartScreen__Sidebar">
                    <Logo />
                    <Actions />
                </div>
            </div>
        </div>
    );
};

export default StartScreen;
