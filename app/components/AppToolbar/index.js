import React from 'react';

import Logo from '../Logo';


const AppToolbar = (props) => {
    return (
        <div className="AppToolbar">
            <div className="AppToolbar__logo">
                <Logo />
            </div>
            <div className="AppToolbar__middle">
            </div>
            <div className="AppToolbar__right">
                <a className="AppToolbar__btn">
                    <svg><use xlinkHref="images/fa/solid.svg#share-square"></use></svg>
                    <span>Export</span>
                </a>
            </div>
        </div>
    );
};

export default AppToolbar;
