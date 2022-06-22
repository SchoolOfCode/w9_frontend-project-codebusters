import React from "react";
import {useState} from "react";
import logo from './logo.svg';
import './App.css';
import ToggleSwitch from './ToggleSwitch.js';
import index from './index.js';
import Button from './Button.js';
import Databox from "./Databox.js";


function App() {
  const [data, setData]=useState([])

  async function npmErrorMsg(topicType) {
    //this needs the local host url from the backend server
    const response = await fetch(`http://localhost:3001/movies`)
    const dataFetch = await response.json();
    setData(dataFetch.payload);
    console.log(data)
  }


const payload = data.map(payload =>
      <div>{payload.topic}</div>
      )
      console.log(payload)


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

        <div className ='wrapper'>
       <Button  label="VS CODE" topicType= "VS" onClick={npmErrorMsg} />
       <Button  label="NPM" topicType="npm" styleType="in" onClick={npmErrorMsg} />
       <Button  label="GITHUB" topicType="Git" onClick={npmErrorMsg} />
       </div>
       </>
       
        
     
    </>);
};
export default App;