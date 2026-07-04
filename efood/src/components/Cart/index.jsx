import React from 'react';
import { Overlay, Sidebar, CartItem, TotalContainer, CheckoutButton } from './styles';

import pizzaImg from '../../assets/pizza.png'; 
import trashIcon from '../../assets/trash.svg'; 
    return (
        <Overlay>
        <Sidebar>
            <CartItem>
            <img src={pizzaImg} alt="Pizza Marguerita" />
            <div>
                <h3>Pizza Marguerita</h3>
                <span>R$ 60,90</span>
            </div>
            <button type="button">
                <img src={trashIcon} alt="Remover item" />
            </button>
            </CartItem>

            <CartItem>
            <img src={pizzaImg} alt="Pizza Marguerita" />
            <div>
                <h3>Pizza Marguerita</h3>
                <span>R$ 60,90</span>
            </div>
            <button type="button">
                <img src={trashIcon} alt="Remover item" />
            </button>
            </CartItem>

            <TotalContainer>
            <span>Valor total</span>
            <span>R$ 182,70</span>
            </TotalContainer>
            <CheckoutButton>Continuar com a entrega</CheckoutButton>
        </Sidebar>
        </Overlay>
    );
    }

export default Cart;