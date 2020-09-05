import {combineReducers } from 'redux';
import authReducer from './authReducer';
//import challengeReducer from './challengeReducer';

const rootReducer = combineReducers({
    auth: authReducer
})

export default rootReducer;