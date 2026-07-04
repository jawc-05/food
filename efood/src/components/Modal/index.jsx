import React from 'react';
import { ModalOverlay, ModalContent, CloseIcon, ModalBody } from './styles';
import closeImg from '../../assets/close.svg'; 

function Modal({ isOpen, onClose, item, onAddToCart }) {
    if (!isOpen || !item) return null;

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseIcon src={closeImg} alt="Fechar" onClick={onClose} />
                
                <img src={item.image} alt={item.title} />
                
                <ModalBody>
                    <div>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p>Serve: de 2 a 3 pessoas</p> 
                    </div>
                    
                    <button onClick={() => onAddToCart(item)}>
                        Adicionar ao carrinho - R$ 60,90
                    </button>
                </ModalBody>
            </ModalContent>
        </ModalOverlay>
    );
}

export default Modal;