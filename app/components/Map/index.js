import React from 'react';
import { connect } from 'react-redux';

import DataLoader from '../../data/loader';
import SvgRenderer from './SvgRenderer';


class MapEditorCanvas extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const basemap = this.props.basemap;
        const data = this.props.data;
        const project = this.props.project;

        const mapData = DataLoader.loadMap(basemap.mapId);

        const svg = SvgRenderer.render(project, basemap, data, mapData);

        return (
            <div ref="MapEditorCanvas" className="MapEditorCanvas">
                { svg }
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return state; // we need everything
}

export default connect(mapStateToProps, null)(MapEditorCanvas);
