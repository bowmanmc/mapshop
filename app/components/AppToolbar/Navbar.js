import React, { Component } from 'react';

import Logo from '../Logo';


const Navbar = (props) => {

    return (
        <nav className="Navbar">
            <Logo />
            <ul>
                <li className={props.active === 'project' ? 'active-item': ''}
                    onClick={() => {props.onSelect('project')}}>
                    <svg><use xlinkHref="images/fa/solid.svg#file-alt"></use></svg>
                    Project
                </li>

                <li className={props.active === 'map' ? 'active-item': ''}
                    onClick={() => {props.onSelect('map')}}>
                    <svg><use xlinkHref="images/fa/solid.svg#compass"></use></svg>
                    Map
                </li>

                <li className={props.active === 'data' ? 'active-item': ''}
                    onClick={() => {props.onSelect('data')}}>
                    <svg><use xlinkHref="images/fa/solid.svg#database"></use></svg>
                    Data
                </li>

                <li className={props.active === 'legend' ? 'active-item': ''}
                    onClick={() => {props.onSelect('legend')}}>
                    <svg><use xlinkHref="images/fa/solid.svg#list-ul"></use></svg>
                    Legend
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
