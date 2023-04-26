import React from 'react';
import "../index.css"


const Circle = (props) => {
    return (
      
        <div className={`circle ${props.activ ? 'active' :''}`} onClick={props.click}>   
           
        </div>
    );
};

export default Circle;