import React from 'react';
import styles from './Plataformas.module.css';
import TitleDescription from '../../components/title-description/TitleDescription';
import Footer from '../../components/footer/Footer';
import Whatsapp from "../../components/whatsapp/Whatsapp";
import RiCheckDoubleLine from "remixicon-react/CheckDoubleLineIcon";
import PlataformaShopify from '../../assets/images/plataforma-shopify.webp';
import PlataformaWoocommerce from '../../assets/images/plataforma-woocommerce.webp';
import PlataformaYampi from '../../assets/images/plataforma-yampi.webp';
import PlataformaCartPanda from '../../assets/images/plataforma-cartpanda.webp';
import PlataformaLojaIntegrada from '../../assets/images/plataforma-lojaintegrada.webp';
import PlataformaNuvemShop from '../../assets/images/plataforma-nuvemshop.webp';
import PlayStore from '../../assets/images/playstore.svg';
import AppStore from '../../assets/images/appstore.svg';
import CellPlataformas from '../../assets/images/cell-plataformas.webp';
import RiShoppingCartLine from 'remixicon-react/ShoppingCartLineIcon';
import RiPlugLine from 'remixicon-react/PlugLineIcon';
import RiDashboard3Line from 'remixicon-react/Dashboard3LineIcon';
import RiFundsBoxLine from 'remixicon-react/FundsBoxLineIcon';
import RiLayout5Fill from 'remixicon-react/Layout5FillIcon';
import RiSmartphoneLine from 'remixicon-react/SmartphoneLineIcon';

function Plataformas() {
    const whatsapp = "https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista%20em%20Dropshipping";

    return (
        <section className={styles.plataformasContainer}>
            <div>
                <TitleDescription title="Sua loja nas melhores plataformas" description="Somos representantes oficiais da Shopify no Brasil e também desenvolvemos lojas em qualquer outra plataforma." />
            </div>

            <div className={`${styles.plataformaShopify} ${styles.plataformaSection}`}>
                <div className={styles.gridPlataformas}>
                    <div className={`${styles.gridPlataformasChild} ${styles.plataformaContent}`}>
                        <div className={styles.title}>
                            <h2>Shopify</h2>
                            <span>Sua loja rumo ao sucesso começa aqui</span>
                        </div>

                        <p>Uma plataforma de e-commerce completa para gerenciar e expandir o seu negócio, escolhida por milhares de lojas no mundo todo.</p>

                        <div className={styles.checkVantagens}>
                            <p>
                                <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                Vantagem 1
                            </p>
                            <p>
                                <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                Vantagem 2
                            </p>
                            <p>
                                <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                Vantagem 3
                            </p>
                        </div>
                    </div>

                    <div className={styles.gridPlataformasChild}>
                        <img src={PlataformaShopify} alt="" />
                    </div>
                </div>
            </div>


            <div className={`${styles.plataformaWoocommerce} ${styles.plataformaSection}`}>
                <div className={styles.gridPlataformas}>
                    <div className={styles.gridPlataformasChild}>
                        <img src={PlataformaWoocommerce} alt="" />
                    </div>
                    
                    <div className={`${styles.gridPlataformasChild} ${styles.plataformaContent}`}>
                        <div className={styles.title}>
                            <h2>Woocommerce</h2>
                            <span>Alta conversão e fácil de usar</span>
                        </div>

                        <p>Uma plataforma completa com milhares de integrações para escalar suas vendas.</p>

                        <div className={styles.checkVantagens}>
                            <p>
                                <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                Vantagem 1
                            </p>
                            <p>
                                <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                Vantagem 2
                            </p>
                            <p>
                                <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                Vantagem 3
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className={`${styles.plataformaYampi} ${styles.plataformaSection}`}>
                <div className={styles.gridPlataformas}>
                    <div className={`${styles.gridPlataformasChild} ${styles.plataformaContent}`}>
                        <div className={styles.title}>
                            <h2>Yampi</h2>
                            <span>Checkout Transparente + Agilidade</span>
                        </div>

                        <p>Feito para simplificar o fluxo de pagamento, reduzindo o número de passos.</p>

                        <div className={styles.checkVantagens}>
                            <p>
                                <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                Vantagem 1
                            </p>
                            <p>
                                <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                Vantagem 2
                            </p>
                            <p>
                                <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                Vantagem 3
                            </p>
                        </div>
                    </div>

                    <div className={styles.gridPlataformasChild}>
                        <img src={PlataformaYampi} alt="" />
                    </div>
                </div>
            </div>


            <div className={`${styles.plataformaCartPanda} ${styles.plataformaSection}`}>
                <div className={styles.gridPlataformas}>
                    <div className={styles.gridPlataformasChild}>
                        <img src={PlataformaCartPanda} alt="" />
                    </div>

                    <div className={`${styles.gridPlataformasChild} ${styles.plataformaContent}`}>
                        <div className={styles.title}>
                            <h2>CartPanda</h2>
                            <span>Checkout Transparente + Agilidade</span>
                        </div>

                        <p>Uma plataforma de e-commerce completa para gerenciar e expandir o seu negócio, escolhida por milhares de lojas no mundo todo.</p>

                        <div className={styles.checkVantagens}>
                            <p>
                                <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                Vantagem 1
                            </p>
                            <p>
                                <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                Vantagem 2
                            </p>
                            <p>
                                <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                Vantagem 3
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className={`${styles.plataformaLojaIntegrada} ${styles.plataformaSection}`}>
                <div className={styles.gridPlataformas}>
                    <div className={`${styles.gridPlataformasChild} ${styles.plataformaContent}`}>
                        <div className={styles.title}>
                            <h2>Loja Integrada</h2>
                            <span>Checkout Transparente + Agilidade</span>
                        </div>

                        <p>Uma plataforma de e-commerce completa para gerenciar e expandir o seu negócio, escolhida por milhares de lojas no mundo todo.</p>

                        <div className={styles.checkVantagens}>
                            <p>
                                <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                Vantagem 1
                            </p>
                            <p>
                                <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                Vantagem 2
                            </p>
                            <p>
                                <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                Vantagem 3
                            </p>
                        </div>
                    </div>

                    <div className={styles.gridPlataformasChild}>
                        <img src={PlataformaLojaIntegrada} alt="" />
                    </div>
                </div>
            </div>


            <div className={`${styles.plataformaNuvemShop} ${styles.plataformaSection}`}>
                <div className={styles.gridPlataformas}>
                    <div className={styles.gridPlataformasChild}>
                        <img src={PlataformaNuvemShop} alt="" />
                    </div>

                    <div className={`${styles.gridPlataformasChild} ${styles.plataformaContent}`}>
                        <div className={styles.title}>
                            <h2>NuvemShop</h2>
                            <span>Checkout Transparente + Agilidade</span>
                        </div>

                        <p>Uma plataforma de e-commerce completa para gerenciar e expandir o seu negócio, escolhida por milhares de lojas no mundo todo.</p>

                        <div className={styles.checkVantagens}>
                            <p>
                                <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                Vantagem 1
                            </p>
                            <p>
                                <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                Vantagem 2
                            </p>
                            <p>
                                <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                Vantagem 3
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.included}>
                <div>
                    <TitleDescription title="Incluso nas plataformas" />
                </div>

                <div className={styles.vantagensGrid}>

                    <div className={styles.vantagensGridChild}>
                        <p>
                            <span className={styles.iconStyle}><RiDashboard3Line /> </span>
                            Carregamento Rápido
                        </p>
                    </div>

                    <div className={styles.vantagensGridChild}>
                        <p>
                            <span className={styles.iconStyle}><RiFundsBoxLine /> </span>
                            Otimização de Marketing
                        </p>
                    </div>

                    <div className={styles.vantagensGridChild}>
                        <p>
                            <span className={styles.iconStyle}><RiShoppingCartLine /> </span>
                            Integração com Marketplaces
                        </p>
                    </div>

                    <div className={styles.vantagensGridChild}>
                        <p>
                            <span className={styles.iconStyle}><RiPlugLine /> </span>
                            Milhares de Plugins
                        </p>
                    </div>

                    <div className={styles.vantagensGridChild}>
                        <p>
                            <span className={styles.iconStyle}><RiLayout5Fill /> </span>
                            Design Completo
                        </p>
                    </div>

                    <div className={styles.vantagensGridChild}>
                        <p>
                            <span className={styles.iconStyle}><RiSmartphoneLine /> </span>
                            Responsividade
                        </p>
                    </div>
                </div>
            </div>

            <div>

            </div>

            <div className={`${styles.cellPlataformas} ${styles.plataformaSection}`}>
                <div className={styles.gridPlataformas}>
                    <div className={`${styles.gridPlataformasChild} ${styles.plataformaContent}`}>
                        <div className={`${styles.title} ${styles.AppCell}`}>
                            <h3>Gerencie seu e-commerce via App Android ou iOS!</h3>
                        </div>

                        <p>Cadastre seus produtos, processe pedidos, receba notificações e acompanhe as vendas de um App fácil e intuitivo.</p>
                        
                        <div className={styles.flexOsIcons}>
                            <div>
                                <img src={AppStore} alt="" />
                            </div>

                            <div>
                                <img src={PlayStore} alt="" />
                            </div>
                        </div>

                    </div>

                    <div className={styles.gridPlataformasChild}>
                        <img src={CellPlataformas} alt="" />
                    </div>
                </div>
            </div>

            <Whatsapp whatsappMessage={whatsapp} />
            <Footer />
        </section>
    )
}

export default Plataformas;