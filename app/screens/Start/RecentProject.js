import React from 'react';


const RecentProject = (props) => {
    return (
        <div className="StartScreen__RecentProject">
            <h2>{props.project.name}</h2>
        </div>
    );
};

export default RecentProject;
