import styled from "styled-components"

export const SectionDate = styled.div `
    width: 458px;
    margin-left: auto;
    margin-right: auto;
    
    @media screen and (max-width: 768px) {
        display: none;
    }

    #watch{

    }
`;

export const Watch = styled.div `
    height: 166px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    line-height: 216px;
    text-align: center;
    font-size: clamp(0.1em, 5.5em + 2.9vw, 12.5em);
    color: #222222;
`;

export const FullDate = styled.div `
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: #222222;
`;

export const Main = styled.main `
display: contents;

`;

export const Section = styled.div `
    display: flex;
    justify-content: space-between;
    height: 77%;
    margin: 0 5.5% 0 0;
`;


