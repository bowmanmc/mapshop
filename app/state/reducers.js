import { combineReducers } from 'redux';

import basemapReducer from './basemap/reducer';
import projectReducer from './project/reducer';


const rootReducer = combineReducers({
    basemap: basemapReducer,
    project: projectReducer
});

export default rootReducer;
