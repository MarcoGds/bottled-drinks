import './App.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RoutesController } from './routes/Routes';

function App() {

  return (   

    <BrowserRouter>
      <RoutesController />
    </BrowserRouter>
  );
}

export default App;