import React, { Component } from 'react';


class ExportButton extends Component {

    render() {
        let icon = <svg><use xlinkHref="images/fa/solid.svg#share-square"></use></svg>;
        if (this.props.isExporting) {
            icon = <svg className="spinner"><use xlinkHref="images/fa/solid.svg#spinner-third"></use></svg>
        }

        return (
            <a className="AppToolbar__btn" onClick={this.props.onClick}>
                { icon }
                <span>Export</span>
            </a>
        );
    }
}

export default ExportButton;

/*
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
*/
