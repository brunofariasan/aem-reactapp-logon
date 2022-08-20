import PropTypes from "prop-types";
import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";
import logo from '../../assets/uol-ball-transparent 1.png'
import {  Body, Main, Section, SectionLogo, TextsSection, TextsMargin, MediumText, SecondTitle, SecondTitle1, SecondTitle2, SecondTitle3, BigText, BigText1, BigText2, DivTex, DivText
} from './styles'

import './style.css';

//import { useNavigate  } from 'react-router-dom';

const Home = ({fielddOne, fielddTwo, fielddThree, fielddFour}) => {

  return (
    <Body>
      <Main>
        <Section>
          <SectionLogo>
            <img src={logo} alt="logo"/>
          </SectionLogo>
          <TextsSection>
            <TextsMargin>
              {fielddOne.map(({titleRedOne, titleBlackOne}, index) => (
                <DivTex key={index}>
                  <MediumText>
                    {titleRedOne}
                  </MediumText>
                  <SecondTitle>
                    {titleBlackOne}
                  </SecondTitle>
                </DivTex>
              ))}
              {fielddTwo.map(({titleRedTwo, titleBlackTwo}, index) => (
                <DivText key={index}>
                  <BigText> 
                    {titleRedTwo}
                  </BigText>
                  <SecondTitle1>
                    {titleBlackTwo}
                  </SecondTitle1>
                </DivText>
              ))}
              {fielddThree.map(({titleRedThree, titleBlackThree}, index) => (
                <DivText key={index}>
                  <BigText1> 
                    {titleRedThree}
                  </BigText1>
                  <SecondTitle2>
                    {titleBlackThree}
                  </SecondTitle2>
                </DivText>
              ))}
              {fielddFour.map(({titleRedFour, titleBlackFour}, index) => (
                <div key={index}>
                  <BigText2>
                    {titleRedFour} 
                  </BigText2>
                  <SecondTitle3>
                    {titleBlackFour}
                  </SecondTitle3>
                </div>
              ))}
            </TextsMargin>
          </TextsSection>
        </Section>
      </Main>
 </Body>
  );
 }  
 Home.prototype = {
  titleRedOne: PropTypes.string,
  titleBlackOne: PropTypes.string



};

Home.defaultProps = {
  fielddOne: [
    {
      titleRedOne: "Our mission is",
      titleBlackOne: "Nossa missão é"
    }
  ],
  fielddTwo: [
    {
      titleRedTwo: "to transform the world",
      titleBlackTwo: "transformar o mundo"
    }
  ],
  fielddThree: [
    {
      titleRedThree: "building digital experiences ",
      titleBlackThree: "construindo experiências digitais"
    }
  ],
  fielddFour: [
    {
      titleRedFour: "that enable our clients growth",
      titleBlackFour: "que permitam o crescimento dos nossos clientes"
    }
  ]


};

export default MapTo("reactapp/components/tabs-body-home")(Home);


