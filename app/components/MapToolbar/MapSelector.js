import React from 'react';
import Select from 'react-select';

import States from './States';


class MapSelector extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const val = this.props.value || 'OH';

        return (
            <Select
                name="basemap"
                clearable={false}
                value={val}
                options={States}
                onChange={this.props.onChange}
            />
        );
    }
}

export default MapSelector;
