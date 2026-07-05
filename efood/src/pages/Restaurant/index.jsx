import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import Cart from '../../components/Cart';
import Modal from '../../components/Modal'; 
import Hero from '../../components/Hero';

import {Banner, MenuGrid } from './styles';

import logoImg from '../../assets/logo.svg';
import pizzaImg from '../../assets/pizza.png';
import pastaImg from '../../assets/pasta.png'

    function Restaurant() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const menuItems = [
        { id: 1, title: "Pizza Marguerita", description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!", image: pizzaImg },
        { id: 2, title: "Pizza Marguerita", description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!", image: pizzaImg },
        { id: 3, title: "Pizza Marguerita", description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!", image: pizzaImg },
        { id: 4, title: "Pizza Marguerita", description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!", image: pizzaImg },
        { id: 5, title: "Pizza Marguerita", description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!", image: pizzaImg },
        { id: 6, title: "Pizza Marguerita", description: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!", image: pizzaImg }
    
    ];

    const handleOpenModal = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const handleAddToCart = (item) => {
        setCartItems([...cartItems, item]);
        setIsModalOpen(false);
        setIsCartOpen(true); 
    };

    const handleRemoveItem = (indexToRemove) => {
        setCartItems(cartItems.filter((_, index) => index !== indexToRemove));
    };

    return (
        <>
        <Hero $isRestaurant>
            <div className="container">
                <Link to="/">Restaurantes</Link>
                <Link to="/">
                    <img src={logoImg} alt="efood logo" />
                </Link>
                <span onClick={() => setIsCartOpen(true)} style={{ cursor: 'pointer' }}>
                {cartItems.length} produto(s) no carrinho
                </span>
            </div>
        </Hero>

        <Banner $bgImage={pastaImg}>
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
                    buttonText="Mais detalhes"
                    onClickButton={() => handleOpenModal(item)}
                    $isRestaurant={true} 
            />
        ))}
        </MenuGrid>
        </main>

        <Cart 
            isOpen={isCartOpen} 
            onClose={() => setIsCartOpen(false)} 
            cartItems={cartItems}
            onRemoveItem={handleRemoveItem}
        />

        <Modal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            item={selectedItem}
            onAddToCart={handleAddToCart}
        />
        </>
    );
    }

export default Restaurant;