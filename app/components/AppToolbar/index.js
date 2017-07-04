import React from 'react';

import Logo from '../Logo';


const AppToolbar = (props) => {
    return (
        <div className="AppToolbar">
            <div className="AppToolbar__logo">
                <Logo />
            </div>
        </div>
    );
};

export default AppToolbar;
