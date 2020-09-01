import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/auth'
import { Redirect } from 'react-router-dom';
import {Container, TextField} from "@material-ui/core";
import {makeStyles } from "@material-ui/core/styles"
import AuthSubmitButton from '../components/auth/AuthSubmitButton';
import './LoginPage.css'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
})

function LoginPage(){
    const[name, setName] = useState('');
    const [password, setPassword] = useState('');
    const isLoggedIn= useSelector(state => state.auth.id)
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(login(name, password))

    }

    if (isLoggedIn) return <Redirect to="/" />

    return (
      <Container fixed maxWidth="sm" classes={{ root: classes.container }}>
        {/* <div className="login-form"> */}
        <h1>Sign in to readMore</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email address"
            defaultValue="you@yours.com"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          
          <TextField
            label="password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <AuthSubmitButton>Sign in</AuthSubmitButton>
        </form>
        {/* </div> */}
      </Container>
    );
}

export default LoginPage;