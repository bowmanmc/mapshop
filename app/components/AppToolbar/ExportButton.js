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
