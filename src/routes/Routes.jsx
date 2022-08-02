import React from "react";
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { Home } from './Home';
import { Products } from './Products';
import { Login } from './Login';
import { Topbar } from '../components';
import Modal from '../components/Modal/Modal';

export function RoutesController() {

  const [openModal, setOpenModal] = useState(true);

  return(
    <React.Fragment>
      {openModal && <Modal closeModal={setOpenModal}/>}
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </React.Fragment>
  );
}