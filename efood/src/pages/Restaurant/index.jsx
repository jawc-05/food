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

  // 2. O Fetch disparando ao carregar a página
  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => {
        // Pegando o primeiro restaurante da lista para popular a tela
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
    // 3. Truque de mestre: criando um "alias" para não quebrar o seu Carrinho
    // O seu componente Cart espera 'image' e 'title', mas a API manda 'foto' e 'nome'
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

      {/* 4. Banner agora é dinâmico (só renderiza quando restauranteData existir) */}
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
          {/* 5. Mapeando os dados reais da API */}
          {menuItems.map((item) => (
            <Card
              key={item.id}
              image={item.foto} // Puxando "foto" da API
              title={item.nome} // Puxando "nome" da API
              description={item.descricao}
              buttonText="Adicionar ao carrinho" // Corrigido conforme o Figma!
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