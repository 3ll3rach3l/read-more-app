import React from 'react';

import { Route } from 'react-router-dom'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage';

export default function Pages(){
    return(
        <>
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        </>
    )
}