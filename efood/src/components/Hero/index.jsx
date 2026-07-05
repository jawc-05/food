import React from 'react';
import { HeroContainer } from './styles';
import bgImg from '../../assets/hero-bg.svg'; 

function Hero({ children, $isRestaurant }) {
    return (
        <HeroContainer $bgImage={bgImg} $isRestaurant={$isRestaurant}>
        {children}
        </HeroContainer>
    );
}

export default Hero;