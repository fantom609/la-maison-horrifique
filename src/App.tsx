import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Footer} from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <link href="app.css" rel="stylesheet"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
