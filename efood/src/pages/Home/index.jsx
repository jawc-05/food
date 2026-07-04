import React from 'react';
import Hero from '../../components/Hero';
import Card from '../../components/Card';
import { RestaurantList } from './styles';

import sushiImg from '../../assets/sushi.png';
import pastaImg from '../../assets/pasta.png';

function Home() {
    const restaurantes = [
        {
        id: 1,
        title: "Hioki Sushi",
        rating: "4.9",
        description: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
        image: sushiImg,
        tags: ["Destaque da semana", "Japonesa"]
        },
        {
        id: 2,
        title: "La Dolce Vita Trattoria",
        rating: "4.6",
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        image: pastaImg,
        tags: ["Italiana"]
        },
        {
        id: 3,
        title: "La Dolce Vita Trattoria",
        rating: "4.6",
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        image: pastaImg,
        tags: ["Italiana"]
        },
        {
        id: 4,
        title: "La Dolce Vita Trattoria",
        rating: "4.6",
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        image: pastaImg,
        tags: ["Italiana"]
        }
    ];

    return (
        <div>
        <Hero />
        
        <main className="container">
            <RestaurantList>
            {restaurantes.map((restaurante) => (
                <Card 
                key={restaurante.id}
                image={restaurante.image}
                title={restaurante.title}
                rating={restaurante.rating}
                description={restaurante.description}
                tags={restaurante.tags}
                />
            ))}
            </RestaurantList>
        </main>
        </div>
    );
}

export default Home;