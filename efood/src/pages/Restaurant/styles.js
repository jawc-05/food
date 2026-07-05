import styled from 'styled-components';

    
export const Banner = styled.div`
  background-image: url(${(props) => props.$bgImage});
  background-size: cover;
  background-position: center;
  
  height: 280px; 
  
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background-color: rgba(0, 0, 0, 0.4); 
    z-index: 1;
  }

  .container {
    position: relative;
    z-index: 2; 
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px 0;
    
    h2 {
      font-size: 32px;
      font-weight: 100;
      color: #FFFFFF;
      opacity: 0.8;
    }

    h1 {
      font-size: 32px;
      font-weight: bold;
      color: #FFFFFF;
    }
  }
`;

    export const MenuGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    margin-top: 80px;
    margin-bottom: 120px;
    `;