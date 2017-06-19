import React from 'react';

import RecentProject from './RecentProject';


const RecentProjects = () => {

    let projects = [{
        name: 'Ohio 2016 Election Map'
    }, {
        name: 'Project Numbero Uno'
    }, {
        name: 'Skyline Locations'
    }, {
        name: 'US Unemployment rates'
    }];

    return (
        <div className="StartScreen__RecentProjects">
            <h2>Recent Projects</h2>
            <div className="StartScreen__RecentProjects-list">
                {projects.map((project, i) => {
                    return <RecentProject key={i} project={project} />
                })}
            </div>
        </div>
    );
};

export default RecentProjects;
