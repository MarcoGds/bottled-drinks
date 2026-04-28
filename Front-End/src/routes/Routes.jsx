import React from "react";
import { Routes, Route, } from 'react-router-dom';

import { Home } from './Home';
import Login from './Login';
import Register from './Register';
import { Topbar } from '../components';
import UserPage from './UserPage';
import ProductPage from "./ProductPage"
import CartPage from "./CartPage";

export function RoutesController() {

  return(
    <React.Fragment>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </React.Fragment>
  );
}