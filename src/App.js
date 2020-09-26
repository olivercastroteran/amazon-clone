import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Checkout from './components/checkout/Checkout';
import Login from './auth/login/Login';
import { auth } from './config/fbConfig';
import { useStateValue } from './store/StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('user: ', authUser);

      if (authUser) {
        // user is login
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // user is logout
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
