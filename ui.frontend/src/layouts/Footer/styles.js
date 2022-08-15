import styled from "styled-components"

export const Footer = styled.footer `
    position: fixed;
`;

export const SectionFooter = styled.div `
    justify-content: space-between;
    display: flex;
`;

export const StopwatchSection = styled.div `
    display: flex;
    align-items: center;
    height: inherit;
    width: 65%;
    margin: 0% 0% 0% 8%;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const TextoFooter = styled.p `
    width: 44%;
    font-size: clamp(0.001em, 0.6em + 0.175vw, 0.75em);
    display: flex;
    text-align: end;
`;

export const LineDiv = styled.div `
    margin: 0% 16% 0% 4%;
`;

export const Line = styled.div `
    height: 70px;
    border-right: 1px solid #FFFFFF;
`;

export const TextRefresh = styled.p `
    width: 79px;
    text-align-last: right;
    display: flex;
    margin: 0 34px 0px 0px;

`;

export const StopwatchDiv = styled.div `
    margin: 1% 0% 0% 0%;
    height: 100%;
`;

export const Stopwatch = styled.p `
    font-family: system-ui;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
    text-align: center;
    color: #FFFFFF;
`;

export const TextSeconds = styled.p `
    text-align-last: center;
`;

export const SectionButtons = styled.div `
    display: flex;
    margin: 0 0 0 3%;

    @media screen and (max-width: 768px){
        margin: 0 0 0 0%;
        width: 100%;
    }
`;