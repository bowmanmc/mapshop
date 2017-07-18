import React from 'react';

import D3Map from './D3Map';


class MapEditorCanvas extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            size: {
                height: 0,
                width: 0
            }
        };
    }

    componentDidMount(){
        let { clientHeight, clientWidth } = this.refs.MapEditorCanvas;
        this.setState({
            size: {
                height: clientHeight,
                width: clientWidth
            }
        });
    }

    render() {
        const size = this.state.size;
        //console.log('Rendering map with size ' + JSON.stringify(size));
        return (
            <div ref="MapEditorCanvas" className="MapEditorCanvas">
                <D3Map size={ size } project={ this.props.project } />
            </div>
        );
    }
};

export default MapEditorCanvas;
