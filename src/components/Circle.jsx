import React from 'react';
import "../index.css"


const Circle = (props) => {
    return (
      
        <div className={props.active ? 'circle active' :'circle'} onClick={props.click}
        style={{pointerEvents: props.playStatus ? 'all':'none'}}> 

       
         
           
        </div>
    );
};

export default Circle;