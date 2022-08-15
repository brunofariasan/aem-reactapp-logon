import React, { useState, useEffect} from "react";
import { StopwatchSection, Footer, SectionFooter, TextoFooter, LineDiv, 
        Line, TextRefresh, StopwatchDiv, Stopwatch, TextSeconds, SectionButtons } from './styles'
import {ButtonRenew, ButtonLogout, ButtonRenewMobile} from '../../components/Form/style.button'
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const Footerr = ({textInfo, textRefresh, textSeconds}) => {
let history = useHistory();
var [totalTimeInseconds, setTotalTimeInSeconds] = useState(600)
var seconds = totalTimeInseconds
    
  useEffect(()=> {
    if(seconds === 0){
        history.push("/content/reactapp/us/en/login.html")
    }else{ 
        setTimeout(() => {
        setTotalTimeInSeconds(seconds - 1)
      }, 1000)
    }
  }, [seconds])

    const Logout = (event) => {
    event.preventDefault();
    history.push("/content/reactapp/us/en/login.html")
    } 
    var sessionRenewal = () => {
        seconds = 601;
    }
    
  return (
    <Footer>
        <SectionFooter>
            <StopwatchSection>
                <TextoFooter>
                    {textInfo}
                </TextoFooter>
                <LineDiv>
                    <Line>
                    </Line>
                </LineDiv>
                <TextRefresh>
                    {textRefresh} 
                </TextRefresh>
                <StopwatchDiv>
                    <Stopwatch>
                        {seconds.toString().padStart(2, "0")}
                    </Stopwatch>
                    <TextSeconds>
                        {textSeconds}
                    </TextSeconds>
                </StopwatchDiv>
            </StopwatchSection>
            <SectionButtons>
                <ButtonRenew onClick={sessionRenewal}>Continuar Navegando</ButtonRenew>
                <ButtonLogout onClick={Logout}>Logout</ButtonLogout>
                <ButtonRenewMobile onClick={sessionRenewal}>Continuar Navegando</ButtonRenewMobile>
            </SectionButtons>
        </SectionFooter>
    </Footer>
  );
 }  
    Footerr.prototype = {
    textInfo: PropTypes.string,
    textRefresh: PropTypes.string,
    textSeconds: PropTypes.string
    };
    Footerr.defaultProps = {
    textInfo: "Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.",
    textRefresh: "Application refresh in",
    textSeconds: "Seconds"
};
  
export default Footerr;