import React, { Component } from 'react';


class Navbar extends Component {

    render() {

        return (
            <nav className="Navbar">
                <ul>
                    <li>
                        <svg><use xlinkHref="images/fa/solid.svg#file-alt"></use></svg>
                        Project
                    </li>

                    <li>
                        <svg><use xlinkHref="images/fa/solid.svg#compass"></use></svg>
                        Map
                    </li>

                    <li>
                        <svg><use xlinkHref="images/fa/solid.svg#database"></use></svg>
                        Data
                    </li>

                    <li>
                        <svg><use xlinkHref="images/fa/solid.svg#list-ul"></use></svg>
                        Legend
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
