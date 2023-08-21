import React, { Fragment, useRef } from 'react';
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

  // In order to gain access to the child component instance,
  // you need to assign it to a `ref`, so we call `useRef()` to get one
  const headerRef = useRef();

  // setActiveMenuItem is passed as a prop to child components
  // so child component can set the header active menu item
  const setActiveMenuItem = (menuItemId) => {
    headerRef.current.setMenuItemActive(menuItemId);
  }

  return (
    <Router>
      <Fragment>
        <Header ref={headerRef}/>
      </Fragment>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/orderhistory" element={<OrderHistory />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register parentFunction={setActiveMenuItem} />} />
        <Route path="/logout" element={<LogOut />} />
        <Route exact path="/" element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
