import React from "react";
import { useState } from "react";
 import logo from './Chris.png';
import lizk from "./LizK.png";//
import "./App.css";

import index from "./index.js";
import Button from "./Button.js";
import DarkMode from "./DarkMode.js";



 
function App() {
  const [data, setData] = useState([]);

  async function npmErrorMsg(topicType) {
    //this needs the local host url from the backend server
    const response = await fetch(`http://localhost:3001/errors/${topicType}`);
    const dataFetch = await response.json();
    setData(dataFetch.payload);
    console.log(data);
  }

  const payload = data.map((payload) => (
    <div>
      <div className = "question">{payload.question}</div> <br></br>
      <div className = "answer">{payload.answer}</div><br></br>
    </div>
  ));
  console.log(payload);

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

        <input className = "searchBox" type="text" placeholder="Ask the Oracle" />
        <p className ="dataText">{payload}</p>
        
        <DarkMode id= 'toggle'/>
        <textarea className = "textArea" placeholder="Comments" />
      </>
    </>
  );
}
export default App;
