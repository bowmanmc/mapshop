import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import MapLoader from '../../data/loader';
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
        const mapData = MapLoader.loadMap(basemap.mapId, basemap.resolution);
        const dataTime = moment();
        console.log(`Loaded data for ${basemap.mapId} in ${dataTime.diff(startTime)}ms`);

        const mapInfo = MapLoader.getInfo(basemap.mapId);
        const svg = SvgRenderer.render(project, basemap, data, mapData, mapInfo);
        const endTime = moment();
        console.log(`Rendered SVG for ${basemap.mapId} in ${endTime.diff(dataTime)}ms`);

        return (
            <div className="MapEditorCanvas">
                { svg }
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return state; // we need everything
}

export default connect(mapStateToProps, null)(MapEditorCanvas);
