import React from 'react';


class FilePicker extends React.Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(foo, bar, baz) {
        debugger;
    }

    render() {
        return (
            <div className="FilePicker SplitPicker">
                <div className="SplitPicker-picker" onClick={ this.selectFile } />
                <div className="SplitPicker-button" onClick={ this.selectFile }>
                    <svg><use xlinkHref="images/fa/solid.svg#folder-open"></use></svg>
                </div>
                <input type="file" />
            </div>
        );
    }
};

export default FilePicker;
