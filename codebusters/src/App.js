import React, { useEffect } from "react";
import { useState } from "react";
 import logo from './Chris.png';
import lizk from "./LizK.png";
import "./App.css";

import index from "./index.js";
import Button from "./Button.js";
import DarkMode from "./DarkMode.js";
import Input from "./Input";


 
function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [allData, setAllData] = useState("");

  async function getAllErrors() {
    //this needs the local host url from the backend server
    const response = await fetch(`http://localhost:3001/errors`);
    const dataFetch = await response.json();
    // console.log(dataFetch)
    // allErrors = dataFetch.payload
    setAllData(dataFetch.payload)
    // setData(dataFetch.payload);
    // setData(dataFetch.filter(element => element.includes(text)))
  }

useEffect(() => {
  getAllErrors();
}, []);

  async function npmErrorMsg(topicType) {
    //this needs the local host url from the backend server
    const response = await fetch(`http://localhost:3001/errors/${topicType}`);
    const dataFetch = await response.json();
    setData(dataFetch.payload);
    // console.log(data);
  }


function clickMeToGetError(){
  // console.log(data);
  let filteredOutObject = allData.filter((obj) => {
    // console.log(obj)
    return obj.question.includes(text)
  })
  // console.log(filteredOutObject)
  setData(filteredOutObject)
  // setData(allErrors.filter(element => Object.values(element).includes(`${text}`)))

}

 
//  let allErrors= getAllErrors();
//   console.log(allErrors)

  // console.log(payload);

  function handleChange(userInput){
    setText(userInput)
  }

  // console.log(text)

  return (
    <>
      <div className="App">
        <header className="App-header">
         
          <div className="groupTitle"></div>
        </header>

        {/* </div> <img src={logo} className="App-logo" alt="logo" /> */}
      </div>{" "}
      <img src={logo} className="App-logo" alt="logo" />
      <img src={lizk} className="lizk" alt="logo" />
      <>
       

        

        <div className="wrapper">

        <Input text={text} handleChange={handleChange} getAllErrors = {getAllErrors}/>
        <button onClick = {clickMeToGetError}>Search</button>

          <Button label="VS CODE" topicType="VS" onClick={npmErrorMsg} />
          <Button
            label="NPM"
            topicType="npm"
            styleType="in"
            onClick={npmErrorMsg}
          />
          <Button label="GITHUB" topicType="Git" onClick={npmErrorMsg} />
          
        </div>
        <p className ="dataText">{
          data.map((payload) => {
    return <div>
      <div>{payload.question}</div>
      <div>{payload.answer}</div>
    </div>
        })
        }</p>
        <DarkMode id= 'toggle'/>
      </>
    </>
  );
}
export default App;
