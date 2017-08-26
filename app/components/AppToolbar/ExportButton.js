import React, { Component } from 'react';


class ExportButton extends Component {


    render() {
        return (
            <a className="AppToolbar__btn" onClick={this.props.onClick}>
                <svg><use xlinkHref="images/fa/solid.svg#share-square"></use></svg>
                <span>Export</span>
            </a>
        );
    }
}

export default ExportButton;
