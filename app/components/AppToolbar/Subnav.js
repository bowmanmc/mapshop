import React, { Component } from 'react';


class Subnav extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className='Subnav'>
                <div className={this.props.active === 'project' ? 'Subnav__item': 'Subnav__item-hidden'}>
                    <label>Title</label>
                </div>
                <div className={this.props.active === 'map' ? 'Subnav__item': 'Subnav__item-hidden'}>
                    <h2>Map</h2>
                </div>
                <div className={this.props.active === 'data' ? 'Subnav__item': 'Subnav__item-hidden'}>
                    <h2>Data</h2>
                </div>
                <div className={this.props.active === 'legend' ? 'Subnav__item': 'Subnav__item-hidden'}>
                    <h2>Legend</h2>
                </div>
            </div>
        );
    }
}

export default Subnav;
