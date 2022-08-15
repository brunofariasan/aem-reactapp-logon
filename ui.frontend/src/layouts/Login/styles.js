import styled from "styled-components"

export const Body = styled.body `
height: 1000px;
width: 100%;
bottom: 0;
left: 0;
margin: auto;

right: 0;
top: 0;
display: inline-flex;
@media (max-width: 450px) {
    right: auto;
}
`;


export const DivLogin = styled.div`

    max-width: 1034px;
    width: 961px;
    height: 100%;

    img{
        max-width: 1030px;
        position: fixed;
    }

    @media (max-width: 768px) {
        display: none;
    }

    #imgLogoCompassOne{
        z-index: 1;
        width: 349px;
        top: 0;
        bottom: 0;
        margin: 0;
        margin: 1% 0 0 302px;
    }


`;

export const SectionLogin = styled.div`
   
`;
export const Image = styled.div`
   display: flex;
`;

export const DivInput = styled.div`
    padding: 16px 0px;
    max-width: 80%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;

    input {
        width: 379px;
        height: 60px;
        background: #26292C;
        border: 1px solid #FFFFFF;
        border-radius: 50px;
    }
    
`;

export const Div = styled.div`

    display: inline-flex;
    flex-direction: column;
    align-items: center;
    width: 101%;
    background-color: #26292C;

    img{
        display: none;
    }

    @media (max-width: 768px) {
        .imgLogoCompass {
            display: block;
            margin: -49px 0px 48px -26px;
        }
    }

    @media (max-width: 380px) {
        body {
            height: 100%;
        }
    }
`;
export const Error = styled.div`
    display: flex;
    text-align: center;
    max-width: 50%;
    height: 66px;
    align-items: center;
    margin: 0 0px 4% 0;
`;
export const DivFlexible = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 470px;
    margin: 26% 0 72% auto;
`;

export const DivInformation = styled.div`
    align-items: stretch;
    display: flex;
    flex-direction: column;
`;


export const P = styled.div`
    font-size: clamp(0.8em,0.2em + 0.68vw,23.5em);
    color: #E9B425;
    margin: 0px 0px -20px 0;
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
    font-family: 'Poppins';
`;

export const TextTitle = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: clamp(3.1em,0.9em + 2.45vw,23.5em);
    line-height: 90px;
    color: #E0E0E0;
    width: 80%;
`;

export const TextSubtitle = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: #E0E0E0;
    font-size: clamp(0.1em, 0.75em + 0.2vw, 4.5em);
    width: 92%;
`;

export const TextLogin = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
    color: #E0E0E0;
    width: 80%;
    max-height: 25px;
    margin: 25% 0 0 0;
`;

export const DivFormat = styled.div`
    width: 50%;
    height: 1000px;
    background-color: #26292C;

    @media (max-width: 768px) {
        width: 100%;
    }
    @media (max-width: 1368px) {

    }
`;
export const DivTitle = styled.div`
    padding: 16px 0px;
    max-width: 80%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
`;