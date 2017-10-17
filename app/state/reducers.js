import { combineReducers } from 'redux';

import basemapReducer from './basemap/reducer';
import dataReducer from './data/reducer';
import projectReducer from './project/reducer';


const rootReducer = combineReducers({
    basemap: basemapReducer,
    data: dataReducer,
    project: projectReducer
});

export default rootReducer;
