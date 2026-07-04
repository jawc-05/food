    import React from 'react';
    import { HeroContainer } from './styles';

    import heroImg from '../../assets/hero1.png'; 

    function Hero() {
    return (
        <HeroContainer>
        <img src={heroImg} alt="efood - Viva experiências gastronômicas no conforto da sua casa" />
        </HeroContainer>
    );
    }

export default Hero;