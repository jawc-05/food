import React from 'react';
import { Overlay, Sidebar, CartItem, TotalContainer, CheckoutButton } from './styles';
import trashIcon from '../../assets/trash.svg'; 

function Cart({ isOpen, onClose, cartItems, onRemoveItem }) {
    if (!isOpen) return null;

    const valorTotal = cartItems.length * 60.90;

    return (
        <Overlay onClick={onClose}>
            <Sidebar onClick={(e) => e.stopPropagation()}>
                
                {cartItems.map((item, index) => (
                    <CartItem key={index}>
                        <img src={item.image} alt={item.title} />
                        <div>
                            <h3>{item.title}</h3>
                            <span>R$ 60,90</span>
                        </div>
                        <button type="button" onClick={() => onRemoveItem(index)}>
                            <img src={trashIcon} alt="Remover item" />
                        </button>
                    </CartItem>
                ))}

                <TotalContainer>
                    <span>Valor total</span>
                    <span>R$ {valorTotal.toFixed(2).replace('.', ',')}</span>
                </TotalContainer>
                <CheckoutButton>Continuar com a entrega</CheckoutButton>
            </Sidebar>
        </Overlay>
    );
}

export default Cart;