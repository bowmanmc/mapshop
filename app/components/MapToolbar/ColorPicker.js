import React from 'react';
import { SketchPicker } from 'react-color';


class ColorPicker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pickerOpen: false,
            color: '#ffdd00'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleChange(color) {
        this.setState({
            color: color.hex
        });
    };

    handleClick() {
        this.setState({
            pickerOpen: !this.state.pickerOpen
        });
    };

    handleClose() {
        this.setState({
            pickerOpen: false
        });
    };

    render() {
        const popover = {
            position: 'absolute',
            zIndex: '2'
        };

        const cover = {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px'
        };

        const btnStyle = {
            background: this.state.color
        };

        return (
            <span>
                <div className="ColorPicker" style={ btnStyle } onClick={ this.handleClick } />
                { this.state.pickerOpen ?
                    <div style={ popover }>
                        <div style={ cover } onClick={ this.handleClose } />
                        <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
                    </div> : null
                }
            </span>
        );
    }
};

export default ColorPicker;
