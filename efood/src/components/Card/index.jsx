import React from 'react';
import { 
  CardContainer, 
  CardImage, 
  TagsContainer, 
  Tag, 
  CardBody, 
  Header, 
  Description, 
  Button 
} from './styles';


import starIcon from '../../assets/estrela.svg'; 

function Card({ image, title, rating, description, tags }) {
    return (
        <CardContainer>
        <CardImage src={image} alt={title} />
        
        {tags && tags.length > 0 && (
            <TagsContainer>
            {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
            ))}
            </TagsContainer>
        )}

        <CardBody>
            <Header>
            <h3>{title}</h3>
            <div>
                <span>{rating}</span>
                <img src={starIcon} alt="Estrela de avaliação" />
            </div>
            </Header>
            
            <Description>{description}</Description>
            
            <Button>Saiba mais</Button>
        </CardBody>
        </CardContainer>
    );
}

export default Card;