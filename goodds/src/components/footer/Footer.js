import React from 'react';
import styles from './Footer.module.css';
import BaseSupport from '../base-support/BaseSupport';
import logo from '../../assets/images/logo.webp';
import { Link } from "react-router-dom";
import footericon1 from '../../assets/images/footericon-5.webp';
import footericon2 from '../../assets/images/footericon-1.webp';
import footericon3 from '../../assets/images/footericon-2.webp';
import footericon4 from '../../assets/images/footericon-4.webp';
import FooterCta from '../footer-cta/FooterCta';

function Footer(props) {
    return (
        <div className={styles.containerFooter}>
            <FooterCta linkCtaWhatsapp={props.linkCtaWhatsapp} />
            <div className={styles.containerSolutionsFooter}>
                <div className={styles.footerContent}>
                    <div className={styles.footerLogo}>
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className={styles.footerMenuLinks}>
                        <div className={styles.footerMenuLinksRow}>
                            <div>
                                <Link to="/dropshipping">Loja Dropshipping</Link>
                                <span className={styles.separatorFooter}>|</span>
                            </div>
                            <div>
                                <Link to="/marketing-loja-virtual">Marketing para E-commerce</Link>
                                <span className={styles.separatorFooter}>|</span>
                            </div>
                            <div>
                                <Link to="/mineracao-produtos-dropshipping">Mineração de Produtos</Link>
                                <span className={styles.separatorFooter}>|</span>
                            </div>
                        </div>
                        <div className={styles.footerMenuLinksRow}>
                            <div className={styles.menuMiddleSeparator}></div>
                        </div>					
                        <div className={styles.footerMenuLinksRow}>
                            <div>
                                <Link to="/dropshipping">Soluções Dropshipping</Link>
                                <span className={styles.separatorFooter}>|</span>
                            </div>
                            <div>
                                <Link to="/plataformas">Plataformas</Link>
                                <span className={styles.separatorFooter}>|</span>
                            </div>
                            <div>
                                <Link to="/contato">Contato</Link>
                            </div>
                        </div>
                    </div>

                    <span className={styles.footerSectionSeparator}></span>
                    
                    <div className={styles.footerUnidades}>
                        <div className={styles.footerUnidadesRow}>
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
                        <div className={styles.footerUnidadesRow}>
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
                    <div className={styles.footerPartners}>
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
                    <div className={styles.footerCopyright}>
                        <p>2024 © GOODDS - TODOS OS DIREITOS RESERVADOS.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer;