import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // Importe os hooks do Redux
import { open, add } from '../../store/reducers/cart'; // Importe as ações

import Card from '../../components/Card';
import Cart from '../../components/Cart';
import Modal from '../../components/Modal'; 
import Hero from '../../components/Hero';
import { Banner, MenuGrid } from './styles';
import logoImg from '../../assets/logo.svg';

function Restaurant() {
    const { id } = useParams();
    const dispatch = useDispatch(); 
    
    const cartItems = useSelector((state) => state.cart.items); 
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const [restauranteData, setRestauranteData] = useState(null);
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
        .then((res) => res.json())
        .then((data) => {
            const restauranteAtual = data.find((r) => r.id === Number(id));
            if (restauranteAtual) {
            setRestauranteData(restauranteAtual);
            setMenuItems(restauranteAtual.cardapio);
            }
        })
        .catch((erro) => console.error('Erro ao carregar a API:', erro));
    }, [id]);

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

        dispatch(add(itemFormatadoParaOCarrinho));
        setIsModalOpen(false);
        
        dispatch(open()); 
    };

    return (
        <>
        <Hero $isRestaurant>
            <div className="container">
            <Link to="/">Restaurantes</Link>
            <Link to="/">
                <img src={logoImg} alt="efood logo" />
            </Link>
            <span onClick={() => dispatch(open())} style={{ cursor: 'pointer' }}>
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
                buttonText="Mais detalhes" 
                onClickButton={() => handleOpenModal(item)}
                $isRestaurant={true} 
                />
            ))}
            </MenuGrid>
        </main>

        <Cart />

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