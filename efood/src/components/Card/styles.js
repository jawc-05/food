import styled from 'styled-components';

    export const CardContainer = styled.div`
    background-color: #FFFFFF;
    border: 1px solid #E66767; 
    position: relative;
    `;

    export const CardImage = styled.img`
    width: 100%;
    height: 217px;
    object-fit: cover;
    display: block;
    `;

    export const TagsContainer = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    gap: 8px;
    `;

    export const Tag = styled.div`
    background-color: #E66767;
    color: #FFF8F2;
    padding: 6px 10px;
    font-size: 12px;
    font-weight: bold;
    `;

    export const CardBody = styled.div`
    padding: 8px;
    `;

    export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    h3 {
        font-size: 18px;
        font-weight: bold;
    }

    div {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 18px;
        font-weight: bold;
    }
    `;

    export const Description = styled.p`
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
    `;

    export const Button = styled.button`
    background-color: #E66767;
    color: #FFF8F2;
    border: none;
    padding: 4px 6px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
`;