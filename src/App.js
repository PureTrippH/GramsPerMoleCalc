import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputForm from './components/InputFormula';
import LoopButton from './components/LoopButton';
import InfoBox from './components/InfoBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InputForm />
        <InfoBox></InfoBox>
      </header>   
    </div>
  );
}


export default App;
