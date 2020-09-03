import React from 'react';

import { Route } from 'react-router-dom'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage';
import HomePage from './HomePage';

export default function Pages(){
    return(
        <>
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route exact path="/" component={HomePage} />
        </>
    )
}