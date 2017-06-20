import { types } from './actions';
import defaultState from '../defaultState';


export default function project(state = defaultState, action) {

    switch (action.type) {
        case types.PROJECT_NEW:
            return Object.assign({}, state, {
                project: {}
            });
        default:
            return state;
    }
}
