import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import Products from './components/Products';
import OrderHistory from './components/OrderHistory';
import Cart from './components/Cart'
import CheckOut from './components/CheckOut';
import LogIn from './components/LogIn';
import Register from './components/Register';
import LogOut from './components/LogOut';
import Home from './components/Home';

import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Header/>
      </Fragment>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/orderhistory" element={<OrderHistory />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<LogOut />} />
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
