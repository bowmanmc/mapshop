import React from 'react';
import Select from 'react-select';

import MapIndex from '../../data/maps';


class MapSelector extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const val = this.props.value || 'usa-oh';

        // Convert to array of {label/value} objects for react-select
        const mapIds = Object.keys(MapIndex);
        let options = [];
        mapIds.map(id => {
            options.push({
                label: MapIndex[id].name,
                value: id
            });
        });

        return (
            <Select
                name="basemap"
                clearable={false}
                value={val}
                options={options}
                onChange={this.props.onChange}
            />
        );
    }
}

export default MapSelector;
