import React from 'react';
import { FooterContainer, Logo, SocialLinks, Copyright } from './styles';

import logoImg from '../../assets/logo.svg'; 
import instagramIcon from '../../assets/instagram.svg';
import facebookIcon from '../../assets/facebook.svg';
import twitterIcon from '../../assets/twitter.svg';

function Footer() {
    return (
        <FooterContainer>
        <Logo src={logoImg} alt="efood" />
        
        <SocialLinks>
            <li>
            <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
            </li>
            <li>
            <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
            </li>
            <li>
            <a href="#"><img src={twitterIcon} alt="Twitter" /></a>
            </li>
        </SocialLinks>

        <Copyright>
            A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
        </Copyright>
        </FooterContainer>
    );
    }

export default Footer;