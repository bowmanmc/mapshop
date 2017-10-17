import React, { Component } from 'react';

import BasemapDetails from './BasemapDetails';
import DataDetails from './DataDetails';
import ProjectDetails from './ProjectDetails';


const Subnav = (props) => {

    return (
        <div className='Subnav'>
            <div className={props.active === 'project' ? 'Subnav__item': 'Subnav__item-hidden'}>
                <ProjectDetails />
            </div>
            <div className={props.active === 'map' ? 'Subnav__item': 'Subnav__item-hidden'}>
                <BasemapDetails />
            </div>
            <div className={props.active === 'data' ? 'Subnav__item': 'Subnav__item-hidden'}>
                <DataDetails />
            </div>
            <div className={props.active === 'legend' ? 'Subnav__item': 'Subnav__item-hidden'}>
                <h2>Legend</h2>
            </div>
        </div>
    );
}

export default Subnav;
