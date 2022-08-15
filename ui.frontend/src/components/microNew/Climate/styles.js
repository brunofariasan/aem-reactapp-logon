import styled from "styled-components"

export const NameCity = styled.div `
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    color: #222222;
    text-align:end;
    margin: 12% 0% 0% 0%;

`;

export const TemperatureInformation = styled.div `
    display: flex;
    height: 63px;
    align-items: center;

    #imgTempo {
        width: 64px;
    }
`;

export const CurrentTemperature = styled.p `
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 900;
    font-size: 50px;
    line-height: 72px;
    text-align: center;
    color: #222222;
    font-size: clamp(2.1em, 0.5em + 2.9vw, 3.15em);
`;

export const ClimateSection = styled.div `

`;
