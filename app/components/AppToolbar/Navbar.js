import React, { Component } from 'react';


class Navbar extends Component {

    constructor(props, context) {
        super(props, context);

        this.selectItem = this.selectItem.bind(this);
    }

    selectItem(item) {
        if (item === this.props.active) {
            item = null;
        }
        this.props.onSelect(item);
    }

    render() {
        return (
            <nav className="Navbar">
                <ul>
                    <li className={this.props.active === 'project' ? 'active-item': ''}
                        onClick={() => {this.selectItem('project')}}>
                        <svg><use xlinkHref="images/fa/solid.svg#file-alt"></use></svg>
                        Project
                    </li>

                    <li className={this.props.active === 'map' ? 'active-item': ''}
                        onClick={() => {this.selectItem('map')}}>
                        <svg><use xlinkHref="images/fa/solid.svg#compass"></use></svg>
                        Map
                    </li>

                    <li className={this.props.active === 'data' ? 'active-item': ''}
                        onClick={() => {this.selectItem('data')}}>
                        <svg><use xlinkHref="images/fa/solid.svg#database"></use></svg>
                        Data
                    </li>

                    <li className={this.props.active === 'legend' ? 'active-item': ''}
                        onClick={() => {this.selectItem('legend')}}>
                        <svg><use xlinkHref="images/fa/solid.svg#list-ul"></use></svg>
                        Legend
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
