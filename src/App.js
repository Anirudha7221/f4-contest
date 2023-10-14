import React from 'react';
import ReactDOM from 'react-dom';
import Head from "./Components/Head";
import Para from './Components/Para';
import Btn from './Components/Btn';
import Foot from './Components/Foot';
import './App.css';

function App() {
  return (
    <div id="containeer">
        <Head></Head>
        <Para></Para>
        <Btn></Btn>
        <Foot></Foot>
    </div>
  );
}

export default App;
