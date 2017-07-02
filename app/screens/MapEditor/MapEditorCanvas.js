import fs from 'fs';
import React from 'react';


class MapEditorCanvas extends React.Component {

    constructor(props) {
        super(props);
    }

    loadMapData() {
        // todo: this needs to be fixed to work in a packaged app...
        const filepath = `${process.cwd()}/app/data/state.oh.json`;
        console.log('Loading: ' + filepath);
        const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));
        //console.log('Loaded data: ' + JSON.stringify(data));
        return data;
    }

    render() {
        const mapData = this.loadMapData();

        return (
            <div className="MapEditorCanvas">
            </div>
        );
    }
};

export default MapEditorCanvas;
