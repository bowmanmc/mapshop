import React from 'react';


const RecentProject = (props) => {
    return (
        <div className="OpenProjectScreen__RecentProject">
            <div className="OpenProjectScreen__RecentProject-preview">

            </div>
            <div className="OpenProjectScreen__RecentProject-info">
                <div className="OpenProjectScreen__RecentProject-name">
                    {props.project.name}
                </div>
                <div className="OpenProjectScreen__RecentProject-meta">
                </div>
            </div>
        </div>
    );
};

export default RecentProject;
