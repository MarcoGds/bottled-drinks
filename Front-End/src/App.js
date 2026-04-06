import './App.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RoutesController } from './routes/Routes';
import { useState, useEffect } from "react";
import Modal from "./components/Modal/Modal";


function App() {

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const isAgeVerified = localStorage.getItem("ageVerified");

    if (!isAgeVerified) {
      setShowModal(true);
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem("ageVerified", "true");
    setShowModal(false);
  };

  return (

    <div className="App">
      {showModal && <Modal closeModal={handleVerify} />}
      <BrowserRouter>
        <RoutesController />
      </BrowserRouter>
    </div>
  );
}

export default App;