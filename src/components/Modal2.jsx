import React from 'react';
import "./modal2.css"

const Modal2 = (props) => {
  
    return (
        
      <div className='overlay'>
        <div className='modal'>
          <h2>LEVEL</h2> 
          <button className='beginner' onClick={props.beginner}>Beginner</button>
          <button className='intermediate' onClick={props.intermediate}>Intermediate</button>
          <button className='proffessional' onClick={props.proffessional}>Proffessional</button>
        </div>
      </div>
    
    );
};

export default Modal2;