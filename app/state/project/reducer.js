import { types } from './actions';
import defaultState from '../defaultState';


// This reducer only works on the project slice of the state
export default function project(state = defaultState.project, action) {
    switch (action.type) {
        case types.PROJECT_EDIT:
            return Object.assign({}, state, action.project);
        case types.PROJECT_NEW:
            return Object.assign({}, state, {
                project: {id: 1, name: 'Ohio 2016 Election Data'}
            });
        case types.PROJECT_CLOSE:
            return Object.assign({}, state, {
                project: {}
            });
        default:
            return state;
    }
}
