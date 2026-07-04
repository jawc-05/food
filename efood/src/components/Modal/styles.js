import styled from 'styled-components';

    export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    `;

    export const ModalContent = styled.div`
    background-color: #E66767;
    color: #FFF8F2;
    padding: 32px;
    display: flex;
    gap: 24px;
    position: relative;
    max-width: 1024px;
    width: 100%;
    margin: 0 20px;

    > img {
        width: 280px;
        height: 280px;
        object-fit: cover;
    }
    `;

    export const CloseIcon = styled.img`
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
    width: 16px;
    height: 16px;
    `;

    export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 16px;
    }

    p {
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 16px;
    }

    button {
        background-color: #FFEBD9;
        color: #E66767;
        border: none;
        padding: 8px 16px;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        align-self: flex-start;
    }
    `;