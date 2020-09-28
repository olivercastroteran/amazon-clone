import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Checkout from './components/checkout/Checkout';
import Login from './auth/login/Login';
import { auth } from './config/fbConfig';
import { useStateValue } from './store/StateProvider';
import Payment from './components/checkout/payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51HW9jiHlSfG5NgkZeOuhQYvaNqYHNjnvTuu9e8p0VR2BOoR7Bgv3RqbNGmnnJVFUIna6OWtfTmmWp5bTDiYf09yh007kzueLP8'
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
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
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
