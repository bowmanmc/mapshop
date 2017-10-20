import React from 'react';
import { SketchPicker } from 'react-color';
import { CustomPicker } from 'react-color';


class ColorPicker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pickerOpen: false
        };

        this.clearColor = this.clearColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    clearColor() {
        this.props.onChange({
            name: this.props.name,
            value: 'none'
        });
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
            background: 'transparent'
        };

        let pickerInitialColor = '#b1e5d9';
        if (this.props.color && this.props.color.startsWith('#')) {
            btnStyle.background = `${this.props.color}`;
            pickerInitialColor = `${this.props.color}`;
        }

        return (
            <div className="ColorPicker SplitPicker">
                <div className="SplitPicker-picker" style={ btnStyle } onClick={ this.handleClick } />
                <div className="SplitPicker-button" onClick={ this.clearColor }>
                    <svg><use xlinkHref="images/fa/solid.svg#trash"></use></svg>
                </div>
                { this.state.pickerOpen ?
                    <div style={ popover }>
                        <div style={ cover } onClick={ this.handleClose } />
                        <SketchPicker disableAlpha={true} color={ pickerInitialColor } onChange={ this.handleChange } />
                    </div> : null
                }
            </div>
        );
    }
};

//export default CustomPicker(ColorPicker);
export default ColorPicker;
