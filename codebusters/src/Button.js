import React from "react";
import "./Button.css";



const Button = ({ label }) => {
    return (
<div class='wrapper'>




  <div class='bttn out cyan'>
    <span>VS Code</span>
    <div class='corners top'></div>
    <div class='corners bottom'></div>
  </div>




  <div class='bttn in'>
    <span>NPM</span>
    <div class='corners top'></div>
    <div class='corners bottom'></div>
  </div>




  <div class='bttn out cyan'>
    <span>GitHub</span>
    <div class='corners top'></div>
    <div class='corners bottom'></div>
  </div>




{/*
 <div class='box out'>
    <div class='content'>
      <p>Bacon ipsum dolor amet meatloaf corned beef frankfurter tongue</p>
    </div>
    <div class='corners top'></div>
    <div class='corners bottom'></div>
  </div>


//MORE BUTTONS IF NEEDED

  <div class='box in'>
    <div class='content'>
      <p>Short ribs boudin cow landjaeger spare ribs cupim.</p>
    </div>
    <div class='corners top'></div>
    <div class='corners bottom'></div>
  </div>
    
    */}


</div>
    )}


export default Button;