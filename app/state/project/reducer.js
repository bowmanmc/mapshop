import { types } from './actions';


// This reducer only works on the project slice of the state
export default function project(state = null, action) {
    let newState = null;
    switch (action.type) {
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
