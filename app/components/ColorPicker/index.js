import React from 'react';
import { SketchPicker } from 'react-color';


class ColorPicker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pickerOpen: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleChange(color) {
        this.props.onChange({
            name: this.props.name,
            value: color.hex
        });
    }

    handleClick() {
        this.setState({
            pickerOpen: !this.state.pickerOpen
        });
    }

    handleClose() {
        this.setState({
            pickerOpen: false
        });
    }

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
            background: this.props.color
        };

        return (
            <span>
                <div className="ColorPicker" style={ btnStyle } onClick={ this.handleClick } />
                <span className="ColorPicker__value" onClick={ this.handleClick } >{ this.props.color }</span>
                { this.state.pickerOpen ?
                    <div style={ popover }>
                        <div style={ cover } onClick={ this.handleClose } />
                        <SketchPicker disableAlpha={true} color={ this.props.color } onChange={ this.handleChange } />
                    </div> : null
                }
            </span>
        );
    }
};

export default ColorPicker;
