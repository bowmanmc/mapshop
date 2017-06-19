import React from 'react';


const RecentProject = (props) => {
    return (
        <div className="StartScreen__RecentProject">
            <div className="StartScreen__RecentProject-preview">

            </div>
            <div className="StartScreen__RecentProject-info">
                <div className="StartScreen__RecentProject-name">
                    {props.project.name}
                </div>
                <div className="StartScreen__RecentProject-meta">
                </div>
            </div>
        </div>
    );
};

export default RecentProject;
