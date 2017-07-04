import React from 'react';


const MapEditorToolbar = (props) => {
    return (
        <div className="MapEditorToolbar">
            <div className="MapEditorToolbar__item">
                <a className="MapEditorToolbar__link">Data</a>
            </div>

            <div className="MapEditorToolbar__item">
                <a className="MapEditorToolbar__link">Reference</a>
            </div>

            <div className="MapEditorToolbar__item">
                <a className="MapEditorToolbar__link">Base Map</a>
            </div>

        </div>
    );
};

export default MapEditorToolbar;
