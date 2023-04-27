import React from 'react';
import "../index.css";

const Modal = (props) => {
    let endText='';
        if (props.score <= 10) {
        endText = "You need more practice. Try again.";
      } else if (props.score === 0 || props.score < 30) {
        endText = "Moving fast leads to catch more frogs.";
      } else if (props.score === 30 || props.score < 60) {
        endText = "You can do better.";
      } else if (props.score === 60 || props.score < 100) {
        endText = "Still more frogs are in the pond.";
      } else {
        endText = "You are a proffessional frog catcher.";
      }

    return (
        <div className='overlay'>
           <div className='modal'>
          <h2>Oops! Game Over 😳</h2> 
            <p>Your Score was: {props.score}</p>
            <p><span>{endText}</span></p>
            <button className='playAgain' onClick={props.replay}>Play Again</button>
            <button className='exit' onClick={props.exit}>Exit Game</button>
           </div>
        </div>
    );
};

export default Modal;