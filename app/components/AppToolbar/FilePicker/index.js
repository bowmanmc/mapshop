import React from 'react';

import Path from 'path';


class FilePicker extends React.Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.selectFile = this.selectFile.bind(this);
    }

    handleChange(evt) {
        const file = this.fileInput.files[0];
        const path = file.path;

        this.props.onChange({
            name: this.props.name,
            value: path
        });
    }

    selectFile() {
        this.fileInput.click();
    }

    render() {

        let filename = '';
        if (this.props.value) {
            filename = Path.basename(this.props.value);
        }

        return (
            <div className="FilePicker SplitPicker">
                <div className="SplitPicker-picker" onClick={ this.selectFile }>
                    { filename }
                </div>
                <div className="SplitPicker-button" onClick={ this.selectFile }>
                    <svg><use xlinkHref="images/fa/solid.svg#folder-open"></use></svg>
                </div>
                <input type="file" ref={(input) => {
                    this.fileInput = input;
                }} onChange={ this.handleChange } />
            </div>
        );
    }
};

export default FilePicker;
