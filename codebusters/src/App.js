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
    const dataFetch = await response.json();
    setData(dataFetch.payload);
    console.log("UseEffect here")
  }
  npmErrorMsg();
}, [])


const payload = data.map(payload =>
      <div>{payload.topic}</div>
      )
      console.log(payload)

// buttonLabel is known as label in Button.js component
function HandleClick(buttonLabel){
alert(buttonLabel)
}


  return (
    
    <><div className="App">
      
      <header className="App-header">
        <div className = "groupTitle">
          </div>
      </header>
      
      
      
          </div> <img src={logo} className="App-logo" alt="logo" />

      <>
       <ToggleSwitch label="Dark mode" />

        <div className="drinksdata">
        {payload}
        </div>
       
       <div className='wrapper'>

       <Button  label="VS CODE" onClick={HandleClick} />
       <Button  label="NPM" styleType="in" onClick={HandleClick} />
       <Button  label="GITHUB" onClick={HandleClick} />
      </div>
       
       {/*<Databox>{displayData && displayData.data  etc etc}</Databox>*/}






       </>
       
        
     
    </>);
};

export default App;