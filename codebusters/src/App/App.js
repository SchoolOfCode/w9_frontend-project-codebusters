import { useState, useEffect } from "react";
import logo from '../Images/Chris.png';
import lizk from "../Images/LizK.png";
import "./App.css";
import Button from "../Button/Button.js";
import DarkMode from "../ToggleMode/DarkMode.js";
import Input from "../Input/Input.js";


 
function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [allData, setAllData] = useState("");

  async function getAllErrors() {
    const response = await fetch(`http://localhost:3001/errors`);
    const dataFetch = await response.json();
    // console.log(dataFetch)
    setAllData(dataFetch.payload)
  }

useEffect(() => {
  getAllErrors();
}, []);

  async function fetchErrorByTopicType(topicType) {
    const response = await fetch(`http://localhost:3001/errors/${topicType}`);
    const dataFetch = await response.json();
    setData(dataFetch.payload);
    console.log(data);
  }

  function clickToGetErrorByInput(){
    // console.log(data);
    let filteredOutObject = allData.filter((obj) => {
      // console.log(obj)
      return obj.question.includes(text)
    })
    // console.log(filteredOutObject)
    setData(filteredOutObject)
  }
  
  function userInput(userInput){
      setText(userInput)
    }
  

  return (
     <>
      <h1 id = "mainTitle" > [Error Oracle] </h1>
      <img src={logo} className="App-logo" alt="logo" />
      <img src={lizk} className="lizk" alt="logo" />
    <>
       
    <div className="wrapper">
      <Button 
      label="VS CODE" 
      topicType="VS" 
      onClick={fetchErrorByTopicType} 
      />

      <Button
      label="NPM"
      topicType="npm"
      styleType="in"
      onClick={fetchErrorByTopicType}
      />

      <Button 
      label="GIT" 
      topicType="Git" 
      onClick={fetchErrorByTopicType} 
       />
    </div>

    <Input 
    text={text} 
    userInput={userInput} 
    getAllErrors = {getAllErrors}
    clickToGetErrorByInput = {clickToGetErrorByInput}
    />
       
    <p 
    className ="dataText">{
    data.map((payload) => {
       return <div>
         <div className="question">{payload.question}</div> <br></br>
         <div className="answer">{payload.answer}</div><br></br>
         </div>
    })}
    </p>
        
    <DarkMode id= 'toggle'/>

    <textarea 
    className = "textArea" 
    placeholder="Comments"
    />
      </>
    </>
  );
}

export default App;
