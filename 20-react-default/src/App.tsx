import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CounterScreen } from './CounterScreen';

function App() {
  return (
    <div className="App">
      <img src={logo} width={80} className="App-logo" alt="logo" />
      <CounterScreen/>
    </div>
  );
}

export default App;
