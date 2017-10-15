import { types } from './actions';
import defaultState from '../defaultState';


// This reducer only works on the basemap slice of the state
export default function basemap(state = defaultState.basemap, action) {
    switch (action.type) {
        case types.BASEMAP_EDIT:
            return Object.assign({}, state, action.basemap);
        default:
            return state;
    }
};
