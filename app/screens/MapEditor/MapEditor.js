import React from 'react';

const MapEditor = (props) => {
    return (
        <div className="MapEditorScreen">
            <p>map editor yo</p>
            <a href="#" onClick={props.onProjectClose}>Close Project</a>
        </div>
    );
};

export default MapEditor;
