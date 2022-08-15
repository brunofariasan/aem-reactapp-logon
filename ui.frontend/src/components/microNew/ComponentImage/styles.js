import styled from "styled-components"

export const SmallLogo = styled.div `
    margin: 1% 0% 0% 0%;
    background-color: #E5E5E5;
    
    #imgBlack {
        max-width: 100%;
    }
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