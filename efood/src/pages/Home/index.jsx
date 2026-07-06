import React, { useState, useEffect } from 'react';
import Hero from '../../components/Hero';
import Card from '../../components/Card';
import { RestaurantList } from './styles';

import logoImg from '../../assets/logo.svg';

    function Home() {
    const [restaurantes, setRestaurantes] = useState([]);

    useEffect(() => {
        fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
        .then((res) => res.json())
        .then((data) => setRestaurantes(data))
        .catch((erro) => console.error('Erro ao buscar restaurantes:', erro));
    }, []);

    const obterTags = (restaurante) => {
        const tags = [];
        
        if (restaurante.destacado) {
        tags.push('Destaque da semana');
        }
        
        if (restaurante.tipo) {
        const tipoFormatado = restaurante.tipo.charAt(0).toUpperCase() + restaurante.tipo.slice(1);
        tags.push(tipoFormatado);
        }
        
        return tags;
    };

    return (
        <div>
        <Hero>
            <img src={logoImg} alt="efood logo" />
            <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
        </Hero>
        
        <main className="container">
            <RestaurantList>
            {restaurantes.map((restaurante) => (
                <Card 
                key={restaurante.id}
                id={restaurante.id} 
                image={restaurante.capa} 
                title={restaurante.titulo} 
                rating={restaurante.avaliacao} 
                description={restaurante.descricao} 
                tags={obterTags(restaurante)} 
                />
            ))}
            </RestaurantList>
        </main>
        </div>
    );
    }

export default Home;