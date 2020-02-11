import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from "react-router-dom";

import Container from './components/Container';
import './App.css';
import Login from "./components/Login"

function App() {
  return (
    <div className="App">
      <header className="App-header">     
        <a className="App-link">
          Friends
        </a>
      </header><br/>
      <Container/>
          {/* <Login/> */}
         </div>
     

  );
  

     
}

export default App;
