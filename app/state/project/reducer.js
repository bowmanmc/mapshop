import { types } from './actions';


// This reducer only works on the project slice of the state
export default function project(state = null, action) {

    switch (action.type) {
        case types.PROJECT_NEW:
            return Object.assign({}, state, {
                project: {}
            });
        default:
            return state;
    }
}
