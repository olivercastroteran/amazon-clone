import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />

          <button className="login__signInBtn">Sign In</button>
        </form>

        <p>
          By signing-in you agree to the AMAZON CLONE by Oliver CT of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and ou
          Interest-Base Ads Notice.
        </p>

        <button className="login__signUpBtn">Create your Amazon account</button>
      </div>
    </div>
  );
};

export default Login;
