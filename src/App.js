import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Checkout from './components/checkout/Checkout';
import Login from './auth/login/Login';

function App() {
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
