import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../config/fbConfig';
import './Login.css';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    //  Firebase login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push('/');
        }
      })
      .catch((err) => alert(err.message));
  };

  const signUp = (e) => {
    e.preventDefault();
    //  Firebase signup
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push('/');
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon-logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login__signInBtn" onClick={signIn}>
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON CLONE by Oliver CT of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and ou
          Interest-Base Ads Notice.
        </p>

        <button type="button" className="login__signUpBtn" onClick={signUp}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
