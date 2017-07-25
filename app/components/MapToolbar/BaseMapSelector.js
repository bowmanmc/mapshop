import React from 'react';

import Select from 'react-select';


const options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];

class BaseMapSelector extends React.Component {

    constructor(props) {
        super(props);
    }

    onChange(evt) {
        console.log(`Selected: ${JSON.stringify(evt)}`);
    }

    render() {
        return (
            <Select
                name="basemap"
                value="one"
                options={options}
                onChange={this.onChange}
            />
        );
    }
}

export default BaseMapSelector;
