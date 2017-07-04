import React from 'react';

import Logo from '../../components/Logo';


const MapEditorToolbar = (props) => {
    return (
        <div className="MapEditorToolbar">
            <div className="MapEditorToolbar__logo">
                <Logo />
            </div>

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
