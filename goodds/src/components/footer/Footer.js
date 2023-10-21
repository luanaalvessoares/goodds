import React from 'react';
import './Footer.css';
import BaseSupport from '../base-support/BaseSupport';
import logo from '../../assets/images/logo.webp';
import footericon1 from '../../assets/images/footericon-1.webp';
import footericon2 from '../../assets/images/footericon-2.webp';
import footericon3 from '../../assets/images/footericon-3.webp';
import footericon4 from '../../assets/images/footericon-4.webp';

function Footer() {
    return (
        <div className="containerFooter">
            <BaseSupport></BaseSupport>
            <div className="containerSolutionsFooter">
                <div className="footerContent">
                    <div className="footerLogo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="footerMenuLinks">
                        <div className="footerMenuLinksRow">
                            <div>
                                <a href="#!">Desenvolvimento de Loja</a>
                                <span className="separatorFooter">|</span>
                            </div>
                            <div>
                                <a href="#!">Loja Print-On-demand</a>
                                <span className="separatorFooter">|</span>
                            </div>
                            <div>
                                <a href="#!">Consultoria Marketplace</a>
                                <span className="separatorFooter">|</span>
                            </div>
                        </div>
                        <div className="footerMenuLinksRow">
                            <div className="menuMiddleSeparator"></div>
                        </div>					
                        <div className="footerMenuLinksRow">
                            <div>
                                <a href="#!">Soluções Dropshipping</a>
                                <span className="separatorFooter">|</span>
                            </div>
                            <div>
                                <a href="#!">Marketing para Ecommerce</a>
                                <span className="separatorFooter">|</span>
                            </div>
                            <div>
                                <a href="#!">Contato</a>
                            </div>
                        </div>
                    </div>
                    <div className="footerUnidades">
                        <div className="footerUnidadesRow">
                            <div>
                                <h5>Florida | USA</h5>
                                <span>Broward</span>
                            </div>
                            <div>
                                <h5>São Paulo | SP</h5>
                                <span>Av. Paulista | Bela Vista</span>
                            </div>
                            <div>
                                <h5>Campo Limpo Paulista | SP</h5>
                                <span>Av. João XXII | Jd Paulista</span>
                            </div>
                        </div>
                        <div className="footerUnidadesRow">
                            <div>
                                <h5>Florianópolis | SC</h5>
                                <span>Av. Rio Branco | Centro</span>
                            </div>
                            <div>
                                <h5>Belo Horizonte | MG</h5>
                                <span>Av. dos Andradas | Centro</span>
                            </div>				
                        </div>
                    </div>
                    <div className="footerPartners">
                        <div>
                            <img src={footericon1} alt=""/>
                        </div>
                        <div>
                            <img src={footericon2} alt=""/>
                        </div>
                        <div>
                            <img src={footericon3} alt=""/>
                        </div>
                        <div>
                            <img src={footericon4} alt=""/>
                        </div>
                    </div>
                    <div className="footerCopyright">
                        <p>2023 © GOODDS - TODOS OS DIREITOS RESERVADOS.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer;