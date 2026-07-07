import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: ${(props) => (props.$isRestaurant ? '#E66767' : '#FFFFFF')};
  border: ${(props) => (props.$isRestaurant ? 'none' : '1px solid #E66767')};
  padding: ${(props) => (props.$isRestaurant ? '8px' : '0')};
  position: relative;
  
  box-sizing: border-box;
  overflow: hidden; 
  
  width: ${(props) => (props.$isRestaurant ? '320px' : '100%')};
  height: ${(props) => (props.$isRestaurant ? '338px' : '100%')};

  align-self: ${(props) => (props.$isRestaurant ? 'auto' : 'flex-start')};

  display: flex;
  flex-direction: column;
`;

export const CardImage = styled.img`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  
  height: ${(props) => (props.$isRestaurant ? '167px' : '217px')}; 
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

export const Tag = styled.span`
  background-color: #E66767;
  color: #FFEBD9;
  font-size: 12px;
  font-weight: bold;
  padding: 6px 10px;
  display: inline-block;
`;

export const CardBody = styled.div`
  padding: ${(props) => (props.$isRestaurant ? '8px 0 0 0' : '8px')};
  color: ${(props) => (props.$isRestaurant ? '#FFEBD9' : '#E66767')};
  
  display: flex;
  flex-direction: column;
  flex-grow: 1; 

  ${(props) => props.$isRestaurant && `
    header {
      margin-bottom: 8px; 
    }
    p {
      margin-bottom: 8px; 
    }
  `}
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

  ${(props) => props.$isRestaurant && `
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Trava em no máximo 3 linhas */
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 8px;
    `}
`;

export const Button = styled.button`
  background-color: ${(props) => (props.$isRestaurant ? '#FFEBD9' : '#E66767')};
  color: ${(props) => (props.$isRestaurant ? '#E66767' : '#FFEBD9')};
  border: none;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  
  box-sizing: border-box;
  
  width: ${(props) => (props.$isRestaurant ? '100%' : 'fit-content')};
  height: ${(props) => (props.$isRestaurant ? '24px' : 'auto')};
  
  display: ${(props) => (props.$isRestaurant ? 'flex' : 'inline-block')};
  align-items: center;
  justify-content: center;
  
  padding: ${(props) => (props.$isRestaurant ? '0' : '4px 6px')};
  margin-top: auto; 
`;