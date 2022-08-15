import React from "react";
import {  HeaderSection, SmallLogo } from './styles'

const ImageModel = ({ image = {}}) => {
    return(
        <HeaderSection>        
            <SmallLogo>
                <img id="imgBlack" src={image.src}/>
            </SmallLogo>
        </HeaderSection>
    ) 
}
ImageModel.defaultProps = {
    image: {
        src: "https://via.placeholder.com/300x100"
    }
}

export default ImageModel;