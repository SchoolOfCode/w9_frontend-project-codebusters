
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