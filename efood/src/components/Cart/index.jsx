import React, { useState } from 'react';
import { Overlay, Sidebar, CartItem, TotalContainer, CheckoutButton, CheckoutContainer, InputGroup, Row, ButtonGroup } from './styles';
import trashIcon from '../../assets/trash.svg'; 

function Cart({ isOpen, onClose, cartItems, onRemoveItem }) {
    const [step, setStep] = useState('cart'); 

    if (!isOpen) return null;

    const valorTotal = cartItems.length * 60.90;

    const handleCloseCart = () => {
        setStep('cart');
        onClose();
    };

    const handleDeliverySubmit = (e) => {
        e.preventDefault(); 
        setStep('payment');
    };

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        setStep('success');
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
                                <input type="text" id="receiver" placeholder="Ex: João Alfredo Williges Cunha" required />
                            </InputGroup>
                            <InputGroup>
                                <label htmlFor="address">Endereço</label>
                                <input type="text" id="address" placeholder="Ex: Rua do Comércio" required />
                            </InputGroup>
                            <InputGroup>
                                <label htmlFor="city">Cidade</label>
                                <input type="text" id="city" placeholder="Ex: Porto Alegre" required />
                            </InputGroup>
                            <Row>
                                <InputGroup>
                                    <label htmlFor="zipCode">CEP</label>
                                    <input type="text" id="zipCode" placeholder="00000-000" required />
                                </InputGroup>
                                <InputGroup>
                                    <label htmlFor="number">Número</label>
                                    <input type="number" id="number" placeholder="123" required />
                                </InputGroup>
                            </Row>
                            <InputGroup>
                                <label htmlFor="complement">Complemento (opcional)</label>
                                {/* Este é o único input sem 'required' */}
                                <input type="text" id="complement" placeholder="Apto, Bloco, etc." />
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
                            <h2>Pagamento - Valor a pagar R$ {valorTotal.toFixed(2).replace('.', ',')}</h2>
                            <InputGroup>
                                <label htmlFor="cardName">Nome no cartão</label>
                                <input type="text" id="cardName" placeholder="Ex: JOAO W CUNHA" required />
                            </InputGroup>
                            <Row>
                                <InputGroup style={{ flex: 2 }}>
                                    <label htmlFor="cardNumber">Número do cartão</label>
                                    <input type="text" id="cardNumber" placeholder="0000 0000 0000 0000" required />
                                </InputGroup>
                                <InputGroup style={{ flex: 1 }}>
                                    <label htmlFor="cvv">CVV</label>
                                    <input type="text" id="cvv" placeholder="123" required />
                                </InputGroup>
                            </Row>
                            <Row>
                                <InputGroup>
                                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                                    <input type="text" id="expiresMonth" placeholder="MM" required />
                                </InputGroup>
                                <InputGroup>
                                    <label htmlFor="expiresYear">Ano de vencimento</label>
                                    <input type="text" id="expiresYear" placeholder="AA" required />
                                </InputGroup>
                            </Row>

                            <ButtonGroup>
                                <CheckoutButton type="submit">Finalizar pagamento</CheckoutButton>
                                <CheckoutButton type="button" onClick={() => setStep('delivery')}>Voltar para a edição de endereço</CheckoutButton>
                            </ButtonGroup>
                        </form>
                    </CheckoutContainer>
                )}

                {step === 'success' && (
                    <CheckoutContainer>
                        <h2>Pedido realizado - {'{ORDER_ID}'}</h2>
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