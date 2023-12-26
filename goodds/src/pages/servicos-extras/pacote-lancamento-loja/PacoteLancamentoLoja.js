import React from "react";
import './PacoteLancamentoLoja.css';
import styles from '../../plataformas/Plataformas.module.css';
import Whatsapp from "../../../components/whatsapp/Whatsapp";
import Footer from "../../../components/footer/Footer";
import CardsInfoTitle from '../../../components/cards-infos-titulo/CardsInfoTitle';
import PackagesSection from "../../../components/packages-section/PackagesSection";
import GoogleReviews from "../../../components/google-reviews/GoogleReviews";
import RiCheckDoubleLine from "remixicon-react/CheckDoubleLineIcon";
import PlataformaShopify from '../../../assets/images/plataforma-shopify.webp';
import PlataformaWoocommerce from '../../../assets/images/plataforma-woocommerce.webp';
import PlataformaYampi from '../../../assets/images/plataforma-yampi.webp';
import PlataformaCartPanda from '../../../assets/images/plataforma-cartpanda.webp';
import PlataformaLojaIntegrada from '../../../assets/images/plataforma-lojaintegrada.webp';
import PlataformaNuvemShop from '../../../assets/images/plataforma-nuvemshop.webp';
import PlayStore from '../../../assets/images/playstore.svg';
import AppStore from '../../../assets/images/appstore.svg';
import CellPlataformas from '../../../assets/images/cell-plataformas.webp';
import RiShoppingCartLine from 'remixicon-react/ShoppingCartLineIcon';
import RiPlugLine from 'remixicon-react/PlugLineIcon';
import RiDashboard3Line from 'remixicon-react/Dashboard3LineIcon';
import RiFundsBoxLine from 'remixicon-react/FundsBoxLineIcon';
import RiLayout5Fill from 'remixicon-react/Layout5FillIcon';
import RiSmartphoneLine from 'remixicon-react/SmartphoneLineIcon';
import TitleDescription from '../../../components/title-description/TitleDescription';
import ImageBackground from "../../../components/image-background/ImageBackground";
import Loading from '../../../assets/images/loading-gif.gif';

function PacoteLancamentoLoja() {
    const whatsapp = "https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista%20em%20lançamento%20de%20loja";

    const packageData1 = {
        packageTitle1: "Start",
        packageDescription1: "Desenvolvimento de Loja Virtual profissional com ferramentas que potencializam suas vendas, com cadastro de 30 produtos e integrada com fornecedores.",
        packagePrice1: "4.999",
        packageNews1: "2.999",
        packageParcel1: "312,42",
        packageName1: " no Start",
        included1Package1: "Criação da Loja Virtual",
        included2Package1: "Criação da Logomarca",
        included3Package1: "Mineração e cadastro de 30 produtos",
        packageLink1: "https://dropshipping-goodds.catalog.yampi.io/desenvolvimento-de-loja-dropshipping-global-start/p"
    };
    const packageData2 = {
        packageTitle2: "Mega",
        packageDescription2: "A solução mais interessante, considerada a melhor e mais completa da Goodds inclui acessoria de marketing e anúncios.",
        packagePrice2: "7.999",
        packageNews2: "4.999",
        packageParcel2: "520,75",
        packageName2: " no Mega",
        included1Package2: "Criação da Loja Virtual",
        included2Package2: "Criação da Logomarca",
        included3Package2: "Mineração e cadastro de 30 produtos",
        included4Package2: "30 dias de acessoria de Marketing",
        packageLink2: "https://dropshipping-goodds.catalog.yampi.io/desenvolvimento-de-loja-dropshipping-global-mega/p"
    };
    const packageData3 = {
        packageTitle3: "",
        packageDescription3: "",
        packagePrice3: "",
        packageNews3: "",
        packageParcel3: "",
        packageName3: "",
        included1Package3: "",
        included2Package3: "",
        included3Package3: "",
        included4Package3: "",
        packageLink3: ""
    };

    return (
        <div className="pagesArtes" id="pacoteLancamentoLoja">


            <h1> EM CONSTRUÇÃO </h1>
            
            <img src={Loading} alt="Carregando" />

            {/* <ImageBackground isVideo="true" videoOption="2" cta={false} title="Tenha um e-commerce profissional" title2=" e venda todos os dias" description="Mais de 9.000 clientes em 12 países"/>

            <section className={styles.plataformasContainer}>

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
            </section>

            <CardsInfoTitle title="Mostre ao mundo sua marca e ofereça a melhor experiência de compra" />
            <PackagesSection packageData1={packageData1} packageData2={packageData2} terceiroPacote={false} packageData3={packageData3} sectionPackageTitle="Tenha uma Loja Completa" />
            <GoogleReviews />

            <Footer linkCtaWhatsapp={whatsapp} mostrarSecao={true} />
            <Whatsapp whatsappMessage={whatsapp} /> */}
        </div>
    )
}

export default PacoteLancamentoLoja;