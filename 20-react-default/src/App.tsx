import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './Counter';

function App() {
  return (
    <div className="App">
      <img src={logo} width={80} className="App-logo" alt="logo" />
      <Counter/>
    </div>
  );
}

export default App;
