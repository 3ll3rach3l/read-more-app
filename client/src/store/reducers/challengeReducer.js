import { SET_GOAL, UPDATE_GOAL } from '../actions/challengeActions';

export default function challengeReducer(state = {}, action) {
    switch (action.type) {
        case SET_GOAL:
            return action.goal;

        case UPDATE_GOAL:
            return action.goal;

        default:
            return state;
    }

}