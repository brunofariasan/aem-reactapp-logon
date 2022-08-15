import React from "react";
import { DivLogin } from './styles'

import image from '../../../assets/image 2.png'
import logoCompass from '../../../assets/compassuol-logo-white 3.png'

const ImageLayoutLogin = () => { 
  
  return (
    <DivLogin>
      <img id="imgLogoCompassOne" src={logoCompass} alt="logo"/>
      <img clas="imgLogo" src={image} alt="logo"/>
    </DivLogin>
  );
}


export default ImageLayoutLogin;