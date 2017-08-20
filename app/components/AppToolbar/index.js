import React from 'react';
import ReactDOMServer from 'react-dom/server';

import DataLoader from '../DataLoader';
import Logo from '../Logo';
import SvgRenderer from '../Map/SvgRenderer';


class AppToolbar extends React.Component {

    constructor(props) {
        super(props);

        this.exportSvg = this.exportSvg.bind(this);
    }

    exportSvg() {
        console.log('Exporting SVG file...');
        const mapData = DataLoader.loadMapData(this.props.project.basemap.mapId);
        const jsx = SvgRenderer.render(this.props.project, mapData);
        const svg = ReactDOMServer.renderToStaticMarkup(jsx);
        console.log('Made SVG content!');
        console.log(svg);
    }

    render() {
        return (
            <div className="AppToolbar">
                <div className="AppToolbar__logo">
                    <Logo />
                </div>
                <div className="AppToolbar__middle">
                </div>
                <div className="AppToolbar__right">
                    <a className="AppToolbar__btn" onClick={this.exportSvg}>
                        <svg><use xlinkHref="images/fa/solid.svg#share-square"></use></svg>
                        <span>Export</span>
                    </a>
                </div>
            </div>
        );
    }
};

export default AppToolbar;
