import React from "react";
import { Routes, Route, } from 'react-router-dom';

import { Home } from './Home';
import { Products } from './Products';
import Login from './Login';
import Register from './Register';
import { Topbar } from '../components';

export function RoutesController() {

  return(
    <React.Fragment>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </React.Fragment>
  );
}