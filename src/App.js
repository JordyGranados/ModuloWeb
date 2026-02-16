import React from 'react';
import HolaMundo from './HolaMundo';
import Variables from './Variables';
import Bancos from './Bancos';
import './App.css';

function App() {
  return (
    <div className="App">
      <HolaMundo />
      <hr />
      <Variables />
      <hr />
      <Bancos />
    </div>
  );
}

export default App;
