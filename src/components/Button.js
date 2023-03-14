import React from "react";
import './style-sheets/Button.css';

function Button(props){
  
  //const isOperator = value => {
    function isOperator (value){
    return isNaN(value) && ( value !== '.') && (value !== '=');
    //Verifica si no es un número y que no sea un '.' ni un '='

  }
  return(
    <div className={`button-container ${isOperator(props.children) ? 'operator' : null}`}>
      {/* si el valor retornado de esta funcion es verdadero entonces se agrega la clase operador al boton y si es falso no hace nada */}
      {props.children}
    </div>
  )
};

export default Button;