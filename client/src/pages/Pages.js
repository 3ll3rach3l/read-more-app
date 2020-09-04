import React from 'react';

import { Route, Switch, Router } from 'react-router-dom'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage';
import HomePage from './HomePage';
import AllBooks from './AllBooks';
import history from '../store/history'

export default function Pages(){
    return(
        <Router history={history}>
            <Switch>
                <Route path="/mybooks/all" component={AllBooks}/>
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignUpPage} />
                <Route exact path="/" component={HomePage} />
            </Switch>
        </Router>
    )
}