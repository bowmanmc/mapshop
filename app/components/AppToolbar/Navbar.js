import React, { Component } from 'react';


class Navbar extends Component {

    render() {

        return (
            <nav className="Navbar">
                <ul>
                    <li>Project</li>
                    <li>Map</li>
                    <li>Data</li>
                    <li>Legend</li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
