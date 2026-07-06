import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import Cart from '../../components/Cart';
import Modal from '../../components/Modal'; 
import Hero from '../../components/Hero';

import { Banner, MenuGrid } from './styles';

import logoImg from '../../assets/logo.svg';

function Restaurant() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    // 1. Novos estados para a API
    const [restauranteData, setRestauranteData] = useState(null);
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
        .then((res) => res.json())
        .then((data) => {
            const restauranteAtual = data[0]; 
            setRestauranteData(restauranteAtual);
            setMenuItems(restauranteAtual.cardapio);
        })
        .catch((erro) => console.error('Erro ao carregar a API:', erro));
    }, []);

    const handleOpenModal = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const handleAddToCart = (item) => {
        const itemFormatadoParaOCarrinho = {
        ...item,
        image: item.foto,
        title: item.nome
        };

        setCartItems([...cartItems, itemFormatadoParaOCarrinho]);
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

        {restauranteData && (
            <Banner $bgImage={restauranteData.capa}>
            <div className="container">
                <h2>{restauranteData.tipo}</h2>
                <h1>{restauranteData.titulo}</h1>
            </div>
            </Banner>
        )}

        <main className="container">
            <MenuGrid>
            {menuItems.map((item) => (
                <Card
                key={item.id}
                image={item.foto} 
                title={item.nome} 
                description={item.descricao}
                buttonText="Mais Detalhes" 
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