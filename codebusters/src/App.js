import React from "react";
import {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import ToggleSwitch from './ToggleSwitch.js';
import index from './index.js';
import Buttons from './Buttons.js';




function App() {
  const [data, setData]=useState([])

useEffect(()=> {
  async function errorMsg() {
    //this needs the local host url from the backend server
    const response = await fetch("https://    ")
    const dataFetch = await response.json();
    setData(dataFetch.data);
  }
  errorMsg();
}, [])




  return (
    <><div className="App">
      
      <header className="App-header">
        <div className = "groupTitle">
          </div>
      </header>
      
      
      
          </div> <img src={logo} className="App-logo" alt="logo" />

      <>
       <ToggleSwitch label="Dark mode" />
       <Buttons />






       </>
       
        
     
    </>);
};

export default App;