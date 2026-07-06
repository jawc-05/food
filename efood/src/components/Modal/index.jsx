import React from 'react';
import { ModalOverlay, ModalContent, CloseIcon, ModalBody } from './styles';
import closeImg from '../../assets/close.svg'; 

function Modal({ isOpen, onClose, item, onAddToCart }) {
    if (!isOpen || !item) return null;

    const formatPrice = (price) => {
        return price.toFixed(2).replace('.', ',');
    };

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseIcon src={closeImg} alt="Fechar" onClick={onClose} />
                
                <img src={item.foto} alt={item.nome} />
                
                <ModalBody>
                    <div>
                        <h2>{item.nome}</h2>
                        <p>{item.descricao}</p>
                        
                        <p>Serve: {item.porcao}</p> 
                    </div>
                    
                    <button onClick={() => onAddToCart(item)}>
                        Adicionar ao carrinho - R$ {formatPrice(item.preco)}
                    </button>
                </ModalBody>
            </ModalContent>
        </ModalOverlay>
    );
}

export default Modal;