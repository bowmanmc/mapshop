import React from 'react';

import Navbar from './Navbar';
import Subnav from './subnav';


class AppToolbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            active: 'data'
        };

        this.activate = this.activate.bind(this);
    }

    activate(item) {
        this.setState({
            active: item
        });
    }

    render() {
        return (
            <div className="AppToolbar">
                <Navbar onSelect={this.activate} active={this.state.active}  />
                <Subnav active={this.state.active} active={this.state.active} />
            </div>
        );
    }
};

export default AppToolbar;
