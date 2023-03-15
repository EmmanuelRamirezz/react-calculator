import React from "react";
import './style-sheets/Button.css';

function Button(props){
  //la prop es la funcion addInput
  //const isOperator = value => {
    function isOperator (value){
    return isNaN(value) && ( value !== '.') && (value !== '=');
    //Verifica si no es un número y que no sea un '.' ni un '='

  }
  return(
    <div className={`button-container ${isOperator(props.children) ? 'operator' : null}`}
    onClick={() => props.clickHandler(props.children)}>
      {/*Se agrega el arrow funcion porque sino se interpreta que está esperando a que retorne un valor. y con el arrow es una funcion que llama a otra fucnion*/}
      {/* si el valor retornado de esta funcion es verdadero entonces se agrega la clase operador al boton y si es falso no hace nada */}
      {props.children}
    </div>
  )
};

export default Button;