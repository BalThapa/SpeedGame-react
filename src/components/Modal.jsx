import React from 'react';
import "../index.css";

const Modal = (props) => {
    return (
        <div className='overlay'>
           <div className='modal'>
           <p>Oops! Game Over 😳</p>
                <p>Your Score was: <span class="scoreEnd">0</span></p>
                <p><span id="endText"></span></p>
                <button id="close" onClick={props.click}>X</button>
           </div>
        </div>
    );
};

export default Modal;