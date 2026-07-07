import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { close, remove, clear } from '../../store/reducers/cart'; // Importe o clear aqui

import { Overlay, Sidebar, CartItem, TotalContainer, CheckoutButton, CheckoutContainer, InputGroup, Row, ButtonGroup } from './styles';
import trashIcon from '../../assets/trash.svg'; 

function Cart() {
    const dispatch = useDispatch();
    
    const cartItems = useSelector((state) => state.cart.items);
    const isOpen = useSelector((state) => state.cart.isOpen);
    
    const [step, setStep] = useState('cart'); 
    
    const [orderId, setOrderId] = useState('');
    const [isPurchasing, setIsPurchasing] = useState(false);
    const [formData, setFormData] = useState({
        receiver: '', address: '', city: '', zipCode: '', number: '', complement: '',
        cardName: '', cardNumber: '', cvv: '', expiresMonth: '', expiresYear: ''
    });

    if (!isOpen) return null;

    const valorTotal = cartItems.reduce((acumulador, item) => acumulador + (item.preco || 0), 0);

    const formatPrice = (price) => {
        return price ? price.toFixed(2).replace('.', ',') : '0,00';
    };

    const handleCloseCart = () => {
        setStep('cart');
        dispatch(close());
    };

    const handleRemoveItem = (index) => {
        dispatch(remove(index));
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleDeliverySubmit = (e) => {
        e.preventDefault(); 
        setStep('payment');
    };

    // 3. A MÁGICA DO POST NA API
    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        setIsPurchasing(true); 

        const payload = {
            products: cartItems.map((item) => ({ id: item.id, price: item.preco })),
            delivery: {
                receiver: formData.receiver,
                address: {
                    description: formData.address,
                    city: formData.city,
                    zipCode: formData.zipCode,
                    number: Number(formData.number),
                    complement: formData.complement
                }
            },
            payment: {
                card: {
                    name: formData.cardName,
                    number: formData.cardNumber,
                    code: Number(formData.cvv),
                    expires: {
                        month: Number(formData.expiresMonth),
                        year: Number(formData.expiresYear)
                    }
                }
            }
        };

        fetch('https://api-ebac.vercel.app/api/efood/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        .then((res) => res.json())
        .then((data) => {
            setOrderId(data.orderId);
            setStep('success');
            dispatch(clear());
        })
        .catch((err) => console.error('Erro ao finalizar compra:', err))
        .finally(() => setIsPurchasing(false));
    };

    return (
        <Overlay onClick={handleCloseCart}>
            <Sidebar onClick={(e) => e.stopPropagation()}>
                
                {step === 'cart' && (
                    <>
                        {cartItems.map((item, index) => (
                            <CartItem key={index}>
                                <img src={item.image} alt={item.title} />
                                <div>
                                    <h3>{item.title}</h3>
                                    <span>R$ {formatPrice(item.preco)}</span>
                                </div>
                                <button type="button" onClick={() => handleRemoveItem(index)}>
                                    <img src={trashIcon} alt="Remover item" />
                                </button>
                            </CartItem>
                        ))}

                        <TotalContainer>
                            <span>Valor total</span>
                            <span>R$ {formatPrice(valorTotal)}</span>
                        </TotalContainer>
                        {cartItems.length > 0 ? (
                            <CheckoutButton onClick={() => setStep('delivery')}>Continuar com a entrega</CheckoutButton>
                        ) : (
                            <CheckoutButton style={{ opacity: 0.5, cursor: 'not-allowed' }}>Carrinho vazio</CheckoutButton>
                        )}
                    </>
                )}

                {step === 'delivery' && (
                    <CheckoutContainer>
                        <form onSubmit={handleDeliverySubmit}>
                            <h2>Entrega</h2>
                            <InputGroup>
                                <label htmlFor="receiver">Quem irá receber</label>
                                <input type="text" id="receiver" value={formData.receiver} onChange={handleInputChange} required />
                            </InputGroup>
                            <InputGroup>
                                <label htmlFor="address">Endereço</label>
                                <input type="text" id="address" value={formData.address} onChange={handleInputChange} required />
                            </InputGroup>
                            <InputGroup>
                                <label htmlFor="city">Cidade</label>
                                <input type="text" id="city" value={formData.city} onChange={handleInputChange} required />
                            </InputGroup>
                            <Row>
                                <InputGroup>
                                    <label htmlFor="zipCode">CEP</label>
                                    <input type="text" id="zipCode" value={formData.zipCode} onChange={handleInputChange} required />
                                </InputGroup>
                                <InputGroup>
                                    <label htmlFor="number">Número</label>
                                    <input type="number" id="number" value={formData.number} onChange={handleInputChange} required />
                                </InputGroup>
                            </Row>
                            <InputGroup>
                                <label htmlFor="complement">Complemento (opcional)</label>
                                <input type="text" id="complement" value={formData.complement} onChange={handleInputChange} />
                            </InputGroup>

                            <ButtonGroup>
                                <CheckoutButton type="submit">Continuar com o pagamento</CheckoutButton>
                                <CheckoutButton type="button" onClick={() => setStep('cart')}>Voltar para o carrinho</CheckoutButton>
                            </ButtonGroup>
                        </form>
                    </CheckoutContainer>
                )}

                {step === 'payment' && (
                    <CheckoutContainer>
                        <form onSubmit={handlePaymentSubmit}>
                            <h2>Pagamento - Valor a pagar R$ {formatPrice(valorTotal)}</h2>
                            <InputGroup>
                                <label htmlFor="cardName">Nome no cartão</label>
                                <input type="text" id="cardName" value={formData.cardName} onChange={handleInputChange} required />
                            </InputGroup>
                            <Row>
                                <InputGroup style={{ flex: 2 }}>
                                    <label htmlFor="cardNumber">Número do cartão</label>
                                    <input type="text" id="cardNumber" value={formData.cardNumber} onChange={handleInputChange} required />
                                </InputGroup>
                                <InputGroup style={{ flex: 1 }}>
                                    <label htmlFor="cvv">CVV</label>
                                    <input type="number" id="cvv" value={formData.cvv} onChange={handleInputChange} required />
                                </InputGroup>
                            </Row>
                            <Row>
                                <InputGroup>
                                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                                    <input type="number" id="expiresMonth" value={formData.expiresMonth} onChange={handleInputChange} required />
                                </InputGroup>
                                <InputGroup>
                                    <label htmlFor="expiresYear">Ano de vencimento</label>
                                    <input type="number" id="expiresYear" value={formData.expiresYear} onChange={handleInputChange} required />
                                </InputGroup>
                            </Row>

                            <ButtonGroup>
                                <CheckoutButton type="submit" disabled={isPurchasing}>
                                    {isPurchasing ? 'Finalizando...' : 'Finalizar pagamento'}
                                </CheckoutButton>
                                <CheckoutButton type="button" onClick={() => setStep('delivery')}>Voltar para a edição de endereço</CheckoutButton>
                            </ButtonGroup>
                        </form>
                    </CheckoutContainer>
                )}

                {step === 'success' && (
                    <CheckoutContainer>
                        {/* 4. EXIBINDO O ID QUE VEIO DA API */}
                        <h2>Pedido realizado - {orderId}</h2>
                        <p>
                            Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
                        </p>
                        <p>
                            Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
                        </p>
                        <p>
                            Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
                        </p>
                        <p>
                            Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
                        </p>

                        <ButtonGroup>
                            <CheckoutButton type="button" onClick={handleCloseCart}>Concluir</CheckoutButton>
                        </ButtonGroup>
                    </CheckoutContainer>
                )}

            </Sidebar>
        </Overlay>
    );
}

export default Cart;