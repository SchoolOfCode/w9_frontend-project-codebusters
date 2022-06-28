import React from "react";
import { useState, useEffect } from "react";
 import logo from '../Images/Chris.png';
import lizk from "../Images/LizK.png";//
import "../Style/App.css";
import Button from "../Button/Button.js";
import DarkMode from "../ToggleMode/DarkMode.js";
import Input from "../Input";


 
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
    console.log(data);
  }

  // const payload = data.map((payload) => (
  //   <div>
  //     <div className = "question">{payload.question}</div> <br></br>
  //     <div className = "answer">{payload.answer}</div><br></br>
  //   </div>
  // ));
  // console.log(payload);

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
     <h1 id = "mainTitle" >    [Error Oracle]  </h1>
     <img src={logo} className="App-logo" alt="logo" />
     <img src={lizk} className="lizk" alt="logo" />
      <div className="App">
        <header className="App-header">


         
          <div className="groupTitle"></div>
        </header>

      
      </div>{" "}
      
      <>
       

        <div className="wrapper">
          <Button label="VS CODE" topicType="VS" onClick={npmErrorMsg} />
          <Button
            label="NPM"
            topicType="npm"
            styleType="in"
            onClick={npmErrorMsg}
          />
          <Button label="GIT" topicType="Git" onClick={npmErrorMsg} />

        
          
        </div>

        <Input text={text} handleChange={handleChange} getAllErrors = {getAllErrors}/>
        <button className="searchButton" onClick = {clickMeToGetError}>Search</button>
        {/* <button onClick = {clickMeToGetError}>Search</button> */}
        {/* <input className = "searchBox" type="text" placeholder="Ask the Oracle" /> */}

        <p className ="dataText">{
          data.map((payload) => {
    return <div>
      <div className="question">{payload.question}</div> <br></br>
      <div className="answer">{payload.answer}</div><br></br>
    </div>
        })
        }</p>
        
        <DarkMode id= 'toggle'/>
        <textarea className = "textArea" placeholder="Comments" />
      </>
    </>
  );
}
export default App;