import { remote } from 'electron';
import fs from 'fs';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOMServer from 'react-dom/server';
import moment from 'moment';

import MapLoader from '../../data/loader';
import SvgRenderer from '../map/renderer';


class ExportButton extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            isExporting: false
        };

        this.exportSvg = this.exportSvg.bind(this);
    }

    exportSvg() {
        // if we're already exporting, just return
        if (this.state.isExporting) {
            return;
        }

        const { basemap, data, project } = this.props;
        const startTime = moment();

        this.setState({isExporting: true}, () => {
            const mapData = MapLoader.loadMap(basemap.mapId, basemap.resolution);
            const mapInfo = MapLoader.getInfo(basemap.mapId);
            const jsx = SvgRenderer.render(project, basemap, data, mapData, mapInfo);
            const svg = ReactDOMServer.renderToStaticMarkup(jsx);
            const renderTime = moment();
            console.log(`Rendered SVG in ${renderTime.diff(startTime)}ms`);

            const dialog = remote.dialog;
            let filename = dialog.showSaveDialog({
                title: 'Export Map as SVG',
                defaultPath: 'maptop.svg'
            });

            if (!filename) {
                this.setState({isExporting: false});
                return; // user cancelled
            }

            const writeTimeStart = moment();
            fs.writeFile(filename, svg, 'utf-8', (err) => {
                if (err) {
                    console.log(`Error writing file ${filename}`, err);
                }
                this.setState({isExporting: false});
                const writeTimeEnd = moment();
                console.log(`Wrote SVG file in ${writeTimeEnd.diff(writeTimeStart)}ms`);
            });
        });
    }

    render() {
        let icon = <svg><use xlinkHref="images/fa/solid.svg#share-square"></use></svg>;
        if (this.state.isExporting) {
            icon = <svg className="spinner"><use xlinkHref="images/fa/solid.svg#spinner-third"></use></svg>
        }

        return (
            <button className="Subnav__button" onClick={this.exportSvg}>
                { icon }
                <p> Export as SVG </p>
            </button>
        );
    }
}

const mapStateToProps = (state) => {
    // We'll need most pieces to pass to the renderer
    return state;
};

export default connect(mapStateToProps)(ExportButton);
