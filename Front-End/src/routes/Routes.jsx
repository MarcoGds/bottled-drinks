import React from "react";
import { Routes, Route, } from 'react-router-dom';

import { Home } from './Home';
import { Products } from './Products';
import Login from './Login';
import Register from './Register';
import { Topbar } from '../components';
import UserPage from './UserPage';

export function RoutesController() {

  return(
    <React.Fragment>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </React.Fragment>
  );
}