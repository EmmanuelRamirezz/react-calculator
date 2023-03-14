import React from "react";
import './style-sheets/Screen.css';

//definiendo un componente con arrow function, usamos parentesis porque hacemos un return directo. Usado en componentes simples
//usamos la sintaxis de destructuracion para los props

const Screen = ({input}) => (
  <div className='input'>
    {input}
  </div>
);

export default Screen;