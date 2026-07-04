import styled from 'styled-components';

    export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7); /
    z-index: 10; /* Fica por cima de tudo */
    display: flex;
    justify-content: flex-end; 
    `;

    export const Sidebar = styled.aside`
    background-color: #E66767;
    width: 360px;
    height: 100%;
    padding: 32px 8px;
    display: flex;
    flex-direction: column;
    `;

    export const CartItem = styled.div`
    background-color: #FFEBD9;
    padding: 8px;
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
    position: relative;

    img {
        width: 80px;
        height: 80px;
        object-fit: cover;
    }

    div {
        display: flex;
        flex-direction: column;
        
        h3 {
        color: #E66767;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 16px;
        }

        span {
        color: #E66767;
        font-size: 14px;
        }
    }

    button {
        background: transparent;
        border: none;
        position: absolute;
        bottom: 8px;
        right: 8px;
        cursor: pointer;

        img {
        width: 16px;
        height: 16px;
        }
    }
    `;

    export const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    color: #FFEBD9;
    font-weight: bold;
    font-size: 14px;
    margin-top: 40px;
    margin-bottom: 16px;
    `;

    export const CheckoutButton = styled.button`
    background-color: #FFEBD9;
    color: #E66767;
    border: none;
    width: 100%;
    padding: 4px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    `;