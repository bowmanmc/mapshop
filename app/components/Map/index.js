import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

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

        const startTime = moment();
        const mapData = DataLoader.loadMap(basemap.mapId);
        const dataTime = moment();
        console.log(`Loaded data for ${basemap.mapId} in ${dataTime.diff(startTime)}ms`);

        const svg = SvgRenderer.render(project, basemap, data, mapData);
        const endTime = moment();
        console.log(`Rendered SVG for ${basemap.mapId} in ${endTime.diff(dataTime)}ms`);

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
