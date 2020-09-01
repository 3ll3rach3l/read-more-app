import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/auth'
import { Redirect } from 'react-router-dom';

function LoginPage(){
    const[name, setName] = useState('');
    const [password, setPassword] = useState('');
    const isLoggedIn= useSelector(state => state.auth.id)
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(login(name, password))

    }

    if (isLoggedIn) return <Redirect to="/" />

    return (
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <label>
            Email address
            <input
              type="text"
              name="name"
              placeholder="you@yours.com"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Sign in</button>
        </form>
      </div>
    );
}

export default LoginPage;