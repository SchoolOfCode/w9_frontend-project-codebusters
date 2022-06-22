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
  async function npmErrorMsg() {
    //this needs the local host url from the backend server
    const response = await fetch("http://localhost:3001/movies")
    //const response = await fetch("http://localhost:3001/movies?type=all")
    const dataFetch = await response.json();
    //setData(dataFetch.payload);
    console.log("UseEffect here")
  }
  npmErrorMsg();
}, [])


const payload = data.map(payload =>
      <div>{payload.topic}</div>
      )
console.log(payload + "Hello")


// buttonLabel is known as label in Button.js component
async function HandleClick(buttonLabel){
alert(buttonLabel)
// agree on error type endpoint //////need to work on this 
const response = await fetch("http://localhost:3001/movies")
//const response = await fetch(`http://localhost:3001/errors/${topicType}`)
const dataFetch = await response.json();
setData(dataFetch.payload);
console.log("Handleclick function here")
}

const buttonPayload = data.map(payload =>
      <div>{payload.question}</div>
      )
console.log(buttonPayload + "payload button")


  return (
    
    <><div className="App">
      
      <header className="App-header">
        <div className = "groupTitle">
          </div>
      </header>
      
      
      
          </div> <img src={logo} className="App-logo" alt="logo" />

      <>
       <ToggleSwitch label="Dark mode" />

        {/*<div className="errorsdata">
        {payload}
        </div>*/}

      <div className="errorsdata">
        {buttonPayload}
      </div>
       
       <div className='wrapper'>

       <Button  label="VS CODE" topicType= "VS" onClick={HandleClick} />
       <Button  label="NPM" topicType="npm" styleType="in" onClick={HandleClick} />
       <Button  label="GITHUB" topicType="Git" onClick={HandleClick} />
       /clarify topic////////////
      </div>
       
       {/*<Databox>{displayData && displayData.data  etc etc}</Databox>*/}

       </>
          
    </>);
};

export default App;