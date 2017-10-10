import React, { Component } from 'react';


class Subnav extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        console.log('Active: ' + this.props.active);
        return (
            <div>
                <div className={this.props.active ? 'Subnav': 'Subnav__hidden'}>
                    <div className="Subnav__item">
                        <h2>Project</h2>
                    </div>
                    <div className="Subnav__item">
                        <h2>Map</h2>
                    </div>
                    <div className="Subnav__item">
                        <h2>Data</h2>
                    </div>
                    <div className="Subnav__item">
                        <h2>Legend</h2>
                    </div>
                </div>
                <div className={this.props.active ? 'Subnav__dismiss': 'Subnav__dismiss-hidden'} onClick={this.props.onDismiss}></div>
            </div>
        );
    }
}

export default Subnav;
