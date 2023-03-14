import React from "react";
import './style-sheets/ClearBtn.css'

//Otra forma de escribir las props
//Creando componentes con arrow function
const ClearBtn = (props) => (
  <div className='clearBtn'>
    {props.children}
  </div>
);

export default ClearBtn;