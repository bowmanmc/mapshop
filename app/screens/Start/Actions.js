import React from 'react';

import Logo from '../../components/Logo';


const StartActions = () => {
    return (
        <div className="StartScreen__Sidebar__Actions">
            <ul className="StartActions__New">
                <li><a href="">New Project</a></li>
                <li><a href="">Open Project</a></li>
            </ul>

            <h2>Recent Projects</h2>
            <ul className="StartActions__Recent">
                <li><a href="">Cool Project</a></li>
                <li><a href="">Numero Uno</a></li>
                <li><a href="">Number Tres</a></li>
            </ul>
        </div>
    );
};

export default StartActions;
