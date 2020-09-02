import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup} from "../store/auth";
import { Redirect, Link } from "react-router-dom";
import {Container} from "@material-ui/core";
import {makeStyles } from "@material-ui/core/styles"
import AuthSubmitButton from '../components/auth/AuthSubmitButton';
import AuthTextField from "../components/auth/AuthTextField";
import './SignUpPage.css'

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

function SignUpPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [passwordConfirm, setPasswordConfirm] = useState();
    const isLoggedIn = useSelector(state => !!state.auth.id);
    const dispatch = useDispatch();
    const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(name, email, password));
  };

//   const handleSubmitDemo = (e) => {
//     e.preventDefault();
//     dispatch(login("demo@example.com", "password"));
//   };

  if (isLoggedIn) return <Redirect to="/" />;

  return (
    <Container fixed classes={{ root: classes.container }}>
      <div className="main-container">
        <div className="signup-form-container">
          <h1>Sign up for readMore</h1>
          <p className="subheading">
            Sign up to start your reading challenge this year!
          </p>
          <div className="errors-container">
            <ul className="errors" id="sign-up-errors"></ul>
          </div>
          
            <form className="signup-form" onSubmit={handleSubmit}>
              <label htmlFor="user_name">Name</label>
              <AuthTextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                variant="outlined"
              />
              <label htmlFor="user_email">Email address</label>
              <AuthTextField
                placeholder="you@yours.com"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="user_password">Password</label>
              <AuthTextField
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="signup-btn-container">
                <AuthSubmitButton>Sign up</AuthSubmitButton>
                <span className="signIn-option">
                  Already a member?<Link to="/login">Sign in </Link>
                </span>
              </div>
            </form>
            <p>
              By clicking “Sign up” I agree to the readMore Terms of Service and
              confirm that I am at least 13 years of age. Read our Privacy
              Policy.
            </p>
          </div>
        </div>
      
    </Container>
  );
}

export default SignUpPage;
