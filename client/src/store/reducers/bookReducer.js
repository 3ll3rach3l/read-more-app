import {SET_BOOKS} from '../actions/bookActions';

export default function bookReducer(state = {}, action) {
    switch (action.type) {
        case SET_BOOKS:
            return action.user;

        default:
            return state;
    }

}