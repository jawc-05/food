import React from 'react';
import { Link } from 'react-router-dom';
import { CardContainer, CardImage, TagsContainer, Tag, CardBody, Header, Description, Button } from './styles';
import starIcon from '../../assets/estrela.svg'; 

    function Card({ image, title, rating, description, tags, buttonText = "Saiba mais", onClickButton }) {
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
            {rating && (
                <div>
                <span>{rating}</span>
                <img src={starIcon} alt="Estrela" />
                </div>
            )}
            </Header>
            
            <Description>{description}</Description>
            
            {/* Se existir a função onClickButton, vira um botão normal. Se não, continua sendo um Link */}
            {onClickButton ? (
            <Button as="button" onClick={onClickButton}>{buttonText}</Button>
            ) : (
            <Button as={Link} to="/restaurante">{buttonText}</Button>
            )}
        </CardBody>
        </CardContainer>
    );
    }

export default Card;