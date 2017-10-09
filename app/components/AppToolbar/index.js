import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { remote } from 'electron';

import fs from 'fs';

import DataLoader from '../../data/loader';
import Logo from '../Logo';
import SvgRenderer from '../Map/SvgRenderer';

import Navbar from './Navbar';


class AppToolbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            exporting: false
        };

        this.exportSvg = this.exportSvg.bind(this);
    }

    exportSvg() {
        // if we're already exporting, just return
        if (this.state.exporting) {
            return;
        }

        this.setState({exporting: true});
        const mapData = DataLoader.load(this.props.project.basemap.mapId);
        const jsx = SvgRenderer.render(this.props.project, mapData);
        const svg = ReactDOMServer.renderToStaticMarkup(jsx);

        const dialog = remote.dialog;
        let filename = dialog.showSaveDialog({
            title: 'Export Map as SVG',
            defaultPath: 'maptop.svg'
        });

        if (!filename) {
            this.setState({exporting: false});
            return; // user cancelled
        }

        fs.writeFile(filename, svg, 'utf-8', (err) => {
            if (err) {
                console.log(`Error writing file ${filename}`, err);
            }
            this.setState({exporting: false});
        });
    }

    //<ExportButton isExporting={ this.state.exporting } onClick={ this.exportSvg } />
    render() {
        return (
            <div className="AppToolbar">
                <div className="AppToolbar__logo">
                    <Logo />
                </div>
                <div className="AppToolbar__middle">
                    <Navbar project={this.props.project} />
                </div>
                <div className="AppToolbar__right">

                </div>
            </div>
        );
    }
};

export default AppToolbar;
