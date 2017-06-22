import React, { Component } from 'react';

import MapScreen from './screens/Map';
import StartScreen from './screens/Start';


class App extends Component {
    render() {
        return (
            <div className="App">
                <StartScreen />

                <MapScreen />
            </div>
        );
    }
}

export default App;
