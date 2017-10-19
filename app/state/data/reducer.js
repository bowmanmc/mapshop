import { types } from './actions';
import defaultState from '../defaultState';


// This reducer only works on the basemap slice of the state
export default function data(state = defaultState.data, action) {
    switch (action.type) {
        case types.DATA_EDIT:
            return Object.assign({}, state, action.changes);
        default:
            return state;
    }
};
