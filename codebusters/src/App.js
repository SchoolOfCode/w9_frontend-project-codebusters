import React from "react";
import {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import ToggleSwitch from './ToggleSwitch.js';
import index from './index.js';
import Button from './Button.js';
import Databox from "./Databox.js";
import * as Scroll from 'react-scroll';





function App() {
  const [data, setData]=useState([])

useEffect(()=> {
  async function errorMsg() {
    //this needs the local host url from the backend server
    const response = await fetch("https://    ")
    const dataFetch = await response.json();
    setData(dataFetch.data); // unsure about the .data at the end???
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


       <Button  onClick = {()=>{setData("vscode")}}>VS CODE</Button>
       <Button  onClick = {()=>{setData("npm")}}>NPM</Button>
       <Button  onClick = {()=>{setData("github")}}>Github</Button>

       
       {/*<Databox>{displayData && displayData.data  etc etc}</Databox>*/}






       </>
       
        
     
    </>);
};

export default App;