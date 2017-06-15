import React from 'react';

import Preview from '../components/Preview';
import Sidebar from '../components/Sidebar';


const MainScreen = () => {
    return (
        <div className="MainScreen">
            <Sidebar />
            <Preview />
        </div>
    );
};

export default MainScreen;
