import styled from 'styled-components';

    
    export const Banner = styled.div`
    width: 100%;
    height: 280px;
    background-image: url(${(props) => props.$bgImage});
    background-size: cover;
    background-position: center;
    position: relative;
    color: #FFFFFF;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .container {
        position: relative;
        z-index: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-top: 24px;
        padding-bottom: 32px;
    }

    h2 {
        font-size: 32px;
        font-weight: 100;
    }

    h1 {
        font-size: 32px;
        font-weight: bold;
    }
    `;

    export const MenuGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    margin-top: 80px;
    margin-bottom: 120px;
    `;