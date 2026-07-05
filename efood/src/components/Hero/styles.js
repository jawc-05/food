import styled from 'styled-components';

export const HeroContainer = styled.header`
  background-color: #FFEBD9; 
  background-image: url(${(props) => props.$bgImage});
  background-size: 2031.81px 384px; 
  
  background-position: ${(props) => (props.$isRestaurant ? 'center -23px' : 'center -24px')};
  background-repeat: repeat; 

  height: ${(props) => (props.$isRestaurant ? '186px' : '384px')};
  
  padding: ${(props) => (props.$isRestaurant ? '0' : '40px 0 0 0')};
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => (props.$isRestaurant ? 'center' : 'flex-start')};

  
  ${(props) => !props.$isRestaurant && `
    > img {
      width: 125px;
      height: 57.5px;
    }

    h1 {
      width: 539px;
      height: 84px;
      margin: 138.5px 0 0 0; 
      padding: 0;
      font-family: 'Roboto', sans-serif;
      font-weight: 900;
      font-size: 36px;
      line-height: 100%;
      color: #E66767;
      text-align: center;
    }
  `}

  .container {
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 18px;
    width: 100%;
    
    a {
      color: #E66767;
      text-decoration: none;
    }

    img {
      max-width: 125px;
    }
  }
`;