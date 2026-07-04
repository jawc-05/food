import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import { RestaurantHeader, Banner, MenuGrid } from './styles';

import logoImg from '../../assets/logo.png';
import pizzaImg from '../../assets/pizza.png';

    function Restaurant() {
    const menuItems = [
        {
        id: 1,
        title: "Pizza Marguerita",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        image: pizzaImg,
        },
        {
        id: 2,
        title: "Pizza Marguerita",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        image: pizzaImg,
        },
        {
        id: 3,
        title: "Pizza Marguerita",
        description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        image: pizzaImg,
        }
    ];

    return (
        <>
        <RestaurantHeader>
            <Link to="/">Restaurantes</Link>
            <Link to="/">
            <img src={logoImg} alt="efood logo" />
            </Link>
            <span>0 produto(s) no carrinho</span>
        </RestaurantHeader>

        <Banner $bgImage={pizzaImg}>
            <div className="container">
            <h2>Italiana</h2>
            <h1>La Dolce Vita Trattoria</h1>
            </div>
        </Banner>

        <main className="container">
            <MenuGrid>
            {menuItems.map((item) => (
                <Card
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                rating="" 
                tags={[]}
                />
            ))}
            </MenuGrid>
        </main>
        </>
    );
    }

export default Restaurant;