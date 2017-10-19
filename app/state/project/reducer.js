import { types } from './actions';
import defaultState from '../defaultState';


// This reducer only works on the project slice of the state
export default function project(state = defaultState.project, action) {
    switch (action.type) {
        case types.PROJECT_EDIT:
            return Object.assign({}, state, action.changes);
        default:
            return state;
    }
};
