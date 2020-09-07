import {combineReducers } from 'redux';
import authReducer from './authReducer';
import challengeReducer from './challengeReducer';
import bookReducer from './bookReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    challenge: challengeReducer,
    bookReducer
})

export default rootReducer;