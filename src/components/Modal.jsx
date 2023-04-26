import React from 'react';
import "../index.css";

const Modal = (props) => {
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