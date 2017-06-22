import React from 'react';


const SidebarActions = (props) => {
    return (
        <div className="OpenProjectScreen__SidebarActions">
            <ul>
                <li><a onClick={props.onNewProject}>New Project</a></li>
                <li><a href="">Open Project</a></li>
            </ul>
        </div>
    );
};

export default SidebarActions;
