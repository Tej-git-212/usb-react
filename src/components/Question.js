import React from "react";
import "./styles/Question.css";

function Question(props) {
  return (
    <div className="q-box h">
      <img src={props.imageUrl} alt=""/>
      <p>{props.text}</p>
    </div>
  );
}

export default Question;
