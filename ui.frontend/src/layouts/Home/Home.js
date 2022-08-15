import {  Body, Main, Section, SectionLogo, TextsSection, TextsMargin, MediumText, SecondTitle, SecondTitle1, SecondTitle2, SecondTitle3, BigText, BigText1, BigText2, DivTex, DivText
        } from './styles'
import logo from '../../assets/uol-ball-transparent 1.png'
import './style.css';
import './style.css';
import PropTypes from "prop-types";

//import { useNavigate  } from 'react-router-dom';

const Home = ({titleRedOne, titleRedTwo, titleRedThree, titleRedFour, titleBlackOne, titleBlackTwo, titleBlackThree, titleBlackFour}) => {

  return (
    <Body>
      <Main>
        <Section>
          <SectionLogo>
            <img src={logo} alt="logo"/>
          </SectionLogo>
          <TextsSection>
            <TextsMargin>

              <DivTex>
                <MediumText>
                  {titleRedOne}
                </MediumText>
                <SecondTitle>
                  {titleBlackOne}
                </SecondTitle>
              </DivTex>

              <DivText>
                <BigText> 
                  {titleRedTwo}
                </BigText>
                <SecondTitle1>
                  {titleBlackTwo}
                </SecondTitle1>
              </DivText>

              <DivText>
                <BigText1> 
                  {titleRedThree}
                </BigText1>
                <SecondTitle2>
                  {titleBlackThree}
                </SecondTitle2>
              </DivText>
              
              <div>
                <BigText2>
                  {titleRedFour} 
                </BigText2>
                <SecondTitle3>
                  {titleBlackFour}
                </SecondTitle3>
              </div>
            </TextsMargin>
          </TextsSection>
        </Section>
      </Main>
    </Body>
  );
 }  
 Home.prototype = {
  titleRedOne: PropTypes.string,
  titleRedTwo: PropTypes.string,
  titleRedThree: PropTypes.string,
  titleRedFour: PropTypes.string,
  titleBlackOne: PropTypes.string,
  titleBlackTwo: PropTypes.string,
  titleBlackThree: PropTypes.string,
  titleBlackFour: PropTypes.string


};

Home.defaultProps = {
  titleRedOne: "Our mission is",
  titleRedTwo: "to transform the world",
  titleRedThree: "building digital experiences ",
  titleRedFour: "that enable our clients growth",
  titleBlackOne: "Nossa missão é",
  titleBlackTwo: "transformar o mundo",
  titleBlackThree: "construindo experiências digitais",
  titleBlackFour: "que permitam o crescimento dos nossos clientes"

 

};
  
export default Home;