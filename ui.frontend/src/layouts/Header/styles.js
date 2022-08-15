import styled from "styled-components"

export const Body = styled.body `
    background-color: #E5E5E5;
    height: 100%;
`;

export const Header = styled.header `
    margin: 0px 40px 0px 0px;
`;

export const HeaderSection = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: unset;

    @media screen and (max-width: 768px) {
    
        display: flex;
        justify-content: end;
    }
`;



