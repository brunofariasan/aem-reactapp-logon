import styled from 'styled-components';

const StyledTitle = styled.h1`
    width: 100%;
    font-family: 'Space Mono', monospace;
    font-size: 64px;
    font-weight: 700;
    color: ${({color}) => color || '#333333'};
    letter-spacing: -0.035em;
    line-height: 95px;
    margin: 0 0 36px 0;
    @media (max-width: 768px) {
        font-size: 48px;
        line-height: 71px;
        margin: 0 0 30px 0;
    }
    @media (max-width: 390px) {
        font-size: 42px;
        line-height: 58px;
        margin: 0 0 30px 0;
    }
`;

export default StyledTitle;
