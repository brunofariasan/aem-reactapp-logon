import React from "react";
import { TextTitle,TextSubtitle, TextLogin, DivTitle, Error, 
            Div,DivFlexible, Body, DivInput, P, DivInformation,DivFormat} from './styles'
import {Button} from '../../components/Form/style.button'
import logoCompass from '../../assets/compassuol-logo-white 3.png'
import './style.css';
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import ImageLayout from "../../components/microNew/ImageLayoutLogin/ImageLayoutLogin";

import  Input  from "../../components/Form/Inputs";
import useForm from "../../hook/useForm";
//import { useNavigate } from 'react-router-dom';
const Login = ( {titleCenter, textOne, textButton } ) => { 

    let history = useHistory();
    const username = useForm('username');
    const password = useForm('password');
    const bu = useForm('error');
    const [form, setForm] = React.useState({ username: "", password: "" });

 function handleSubmit(event) {
    event.preventDefault();
    if(username.validate() && password.validate()){
        history.push("/content/reactapp/us/en/home.html");
        
    }
 }
  return (
    <>
    <Body>
    <DivFormat>
        <DivInformation>
            <Div>
                <form onSubmit={handleSubmit}>
                    <DivFlexible>
                        <DivTitle>
                            <TextTitle>
                                <img class="imgLogoCompass" src={logoCompass} alt="logo"/>
                                {titleCenter}
                            </TextTitle>
                            <TextSubtitle>
                                {textOne}
                            </TextSubtitle>
                            <TextLogin>
                                Login
                            </TextLogin>
                        </DivTitle>    
                        <DivInput>                         
                            <Input id="user" type="username" placeholder="Usuário" name="username"  {...username}/>
                        </DivInput>
                        <DivInput>
                            <Input id="lock"  placeholder="Senha" type="password" name="password" {...password}/>
                        </DivInput>
                        <Error>
                        <P>{username.error || password.error}</P>
                        </Error>
                        <Button id="button-login" type='submit'>
                            {textButton}
                        </Button>
                    </DivFlexible>
                </form>
            </Div>
        </DivInformation>
    </DivFormat>        
    <ImageLayout />
    </Body>
    </>
  );
}
  
Login.prototype = {
    titleCenter: PropTypes.string,
    textOne: PropTypes.string,
    textButton: PropTypes.string
};

Login.defaultProps = {
    titleCenter: "Olá,",
    textOne: "Para continuar navegando de forma segura, efetue o login na rede",
    textButton: "Login"
};
export default Login;