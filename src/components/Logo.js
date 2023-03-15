import React from "react";
import calcLogo from '../assets/calcLogo.png';
import '../components/style-sheets/Logo.css';

function Logo(){
  return(
    <div className='calc-logo--container'>
      <img 
      src={calcLogo}
      alt='App logo'
      className='calc-logo'
      />
    </div>
  )
}
export default Logo;