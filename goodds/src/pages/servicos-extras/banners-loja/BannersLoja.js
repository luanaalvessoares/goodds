import React from "react";
import './BannersLoja.css';
import styles from '../../plataformas/Plataformas.module.css';
import Whatsapp from "../../../components/whatsapp/Whatsapp";
import Footer from "../../../components/footer/Footer";
import PackagesSection from "../../../components/packages-section/PackagesSection";
import GoogleReviews from "../../../components/google-reviews/GoogleReviews";
import CardsInfoTitle from '../../../components/cards-infos-titulo/CardsInfoTitle';
import RiCheckDoubleLine from "remixicon-react/CheckDoubleLineIcon";
import ImageBannersLoja1 from '../../../assets/images/banners-loja1.webp';
import ImageBannersLoja2 from '../../../assets/images/banners-loja2.webp';
import ImageBannersLoja3 from '../../../assets/images/banners-loja3.webp';
import ImageBannersLoja4 from '../../../assets/images/banners-loja4.webp';
import RiShoppingCartLine from 'remixicon-react/ShoppingCartLineIcon';
import RiPlugLine from 'remixicon-react/PlugLineIcon';
import RiDashboard3Line from 'remixicon-react/Dashboard3LineIcon';
import RiFundsBoxLine from 'remixicon-react/FundsBoxLineIcon';
import RiLayout5Fill from 'remixicon-react/Layout5FillIcon';
import RiSmartphoneLine from 'remixicon-react/SmartphoneLineIcon';
import TitleDescription from '../../../components/title-description/TitleDescription';
import ImageBackground from "../../../components/image-background/ImageBackground";

function BannersLoja() {
    const whatsapp = "https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista%20em%20Banners";
        
    const packageData1 = {
        packageTitle1: "01 banner",
        packageDescription1: "Desenvolvimento de 01 banner profissional exclusivo para o seu site.",
        packagePrice1: "279",
        packageNews1: "139",
        packageParcel1: "312,42",
        packageName1: "Start:",
        included1Package1: "01 arte",
        included2Package1: "Planejamento estratégico",
        included3Package1: "Copy persuasiva",
        included4Package1: "Design profissional",
        packageLink1: "https://dropshipping-goodds.catalog.yampi.io/desenvolvimento-de-loja-dropshipping-global-start/p"
    };
    const packageData2 = {
        packageTitle2: "03 banners",
        packageDescription2: "Desenvolvimento de 03 banners profissionais exclusivos para o seu site.",
        packagePrice2: "417",
        packageNews2: "299",
        packageParcel2: "520,75",
        packageName2: "Mega:",
        included1Package2: "03 artes",
        included2Package2: "Planejamento estratégico",
        included3Package2: "Copy persuasiva",
        included4Package2: "Design profissional",
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
        <div>
            <ImageBackground isVideo="true" videoOption="2" cta={false} title="Banners profissionais" title2=" com design atraente" description="Criamos banners personalizados que convertem cliques em vendas"/>

            <section className={styles.plataformasContainer}>

                <div className={`${styles.plataformaShopify} ${styles.plataformaSection}`}>
                    <div className={styles.gridPlataformas}>
                        <div className={`${styles.gridPlataformasChild} ${styles.plataformaContent}`}>
                            <div className={styles.title}>
                                <h2>Artes exclusivas para sua marca</h2>
                                <span>Uma imagem vale mais que mil palavras</span>
                            </div>

                            <p>Nossos banners são criados para atrair imediatamente a atenção do seu pblico alvo, combinando estética e clareza para destacar seus produtos.</p>

                            <div className={styles.checkVantagens}>
                                <p>
                                    <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                    Design Estratégico
                                </p>
                                <p>
                                    <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                    Banners Personalizados
                                </p>
                                <p>
                                    <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                    Comunicação Visual Eficaz
                                </p>
                            </div>
                        </div>

                        <div className={styles.gridPlataformasChild}>
                            <img src={ImageBannersLoja1} alt="" />
                        </div>
                    </div>
                </div>


                <div className={`${styles.plataformaWoocommerce} ${styles.plataformaSection}`}>
                    <div className={styles.gridPlataformas}>
                        <div className={styles.gridPlataformasChild}>
                            <img src={ImageBannersLoja2} alt="" />
                        </div>
                        
                        <div className={`${styles.gridPlataformasChild} ${styles.plataformaContent}`}>
                            <div className={styles.title}>
                                <h2>Design Estratégico</h2>
                                <span>Maximize conversões</span>
                            </div>

                            <p>Utilizamos princípios de marketing digital para criar banners que conduzam a ação do cliente, seja ela uma compra ou um clique.</p>
                        </div>
                    </div>
                </div>


                <div className={`${styles.plataformaYampi} ${styles.plataformaSection}`}>
                    <div className={styles.gridPlataformas}>
                        <div className={`${styles.gridPlataformasChild} ${styles.plataformaContent}`}>
                            <div className={styles.title}>
                                <h2>Banners Personalizados</h2>
                                <span>Desenvolvimento rápido e exclusivo</span>
                            </div>

                            <p>Cada banner é cuidadosamente personalizado para se alinhar à identidade visual da sua marca, garantindo consistência e profisssionalismo.</p>
                        </div>

                        <div className={styles.gridPlataformasChild}>
                            <img src={ImageBannersLoja3} alt="" />
                        </div>
                    </div>
                </div>


                <div className={`${styles.plataformaCartPanda} ${styles.plataformaSection}`}>
                    <div className={styles.gridPlataformas}>
                        <div className={styles.gridPlataformasChild}>
                            <img src={ImageBannersLoja4} alt="" />
                        </div>

                        <div className={`${styles.gridPlataformasChild} ${styles.plataformaContent}`}>
                            <div className={styles.title}>
                                <h2>Comunicação Visual Eficaz</h2>
                                <span>Design atraente com conteúdo persuasivo</span>
                            </div>

                            <p>Entendemos a importância de comunicar a essência do seu produto rapidamente, por isso nossas artes são claras, concisas e cativantes.</p>
                        </div>
                    </div>
                </div>
            </section>

            <GoogleReviews />
            <PackagesSection packageData1={packageData1} packageData2={packageData2} terceiroPacote={false} packageData3={packageData3} sectionPackageTitle="Banners para sua loja" />
            <CardsInfoTitle title="Mostre ao mundo sua marca e ofereça a melhor experiência de compra" />
            
            <Footer linkCtaWhatsapp={whatsapp} mostrarSecao={true} />
            <Whatsapp whatsappMessage={whatsapp} />
        </div>
    )
}

export default BannersLoja;