import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background-color: #FFEBD9; 
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;

    export const Logo = styled.img`
    margin-bottom: 32px;
    `;

    export const SocialLinks = styled.ul`
    display: flex;
    gap: 8px;
    margin-bottom: 80px;
    `;

    export const Copyright = styled.p`
    font-size: 10px;
    text-align: center;
    max-width: 480px;
    line-height: 14px;
`;