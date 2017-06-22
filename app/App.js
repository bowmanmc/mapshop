import React, { Component } from 'react';

import MapEditorScreen from './screens/MapEditor';
import OpenProjectScreen from './screens/OpenProject';


class App extends Component {
    render() {
        return (
            <div className="App">
                <OpenProjectScreen />

                <MapEditorScreen />
            </div>
        );
    }
}

export default App;
