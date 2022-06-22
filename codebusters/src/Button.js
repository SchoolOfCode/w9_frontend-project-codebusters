// import React from "react";
// import "./Button.css";



// const Button = ({ label, styleType, onClick }) => {

// const buttonClasses = (styleType === 'in') ? "bttn in" : "bttn out cyan"

// //label dynamically ids the name of the button instead of hardcoding "NPM" etc
// //This child component will know the HandleClick function as onClick in here, as it is passed in as a prop called onClick(Line 6).
//     return (
// <>

//   <div onClick={()=>onClick(label)} className={buttonClasses}>
//     <span>{label}</span>
//     <div className='corners top'></div>
//     <div className='corners bottom'></div>
//   </div>
// </>

// /*
//  <div class='box out'>
//     <div class='content'>
//       <p>Bacon ipsum dolor amet meatloaf corned beef frankfurter tongue</p>
//     </div>
//     <div class='corners top'></div>
//     <div class='corners bottom'></div>
//   </div>


// //MORE BUTTONS IF NEEDED

//   <div class='box in'>
//     <div class='content'>
//       <p>Short ribs boudin cow landjaeger spare ribs cupim.</p>
//     </div>
//     <div class='corners top'></div>
//     <div class='corners bottom'></div>
//   </div>
    
//     */



//     )}


// export default Button;

import React from "react";
import "./Button.css";

const Button = ({ label, topicType, styleType, onClick }) => {

  const buttonClasses = (styleType === 'in') ? "bttn in" : "bttn out cyan"

      return (
  <>
    <div onClick={()=>onClick(topicType)} className={buttonClasses}>
      <span>{label}</span>
      <div className='corners top'></div>
      <div className='corners bottom'></div>
    </div>
  </>

      )}

export default Button;