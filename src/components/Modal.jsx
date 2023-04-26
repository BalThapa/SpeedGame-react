import React from 'react';
import "../index.css";

const Modal = (props) => {
    /*let endText='';
        if (props.score === 0) {
        endText.textContent = "You need more practice. Try again.";
      } else if (props.score === 0 || props.score < 20) {
        endText.textContent = "Moving fast leads to catch more frogs.";
      } else if (props.score === 20 || props.score < 40) {
        endText.textContent = "You can do better.";
      } else if (props.score === 40 || props.score < 80) {
        endText.textContent = "Still more frogs are in the pond.";
      } else {
        endText.textContent = "You are a proffessional frog catcher.";
      }*/

    return (
        <div className='overlay'>
           <div className='modal'>
           <p>Oops! Game Over 😳</p>
            <p>Your Score was: {props.score}</p>
            <p><span>{props.endText}</span></p>
            <button id="close" onClick={props.close}>X</button>
           </div>
        </div>
    );
};

export default Modal;