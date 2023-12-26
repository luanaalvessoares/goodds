import React from "react";
import './ArtesAnuncios.css';
import styles from '../../plataformas/Plataformas.module.css';
import Whatsapp from "../../../components/whatsapp/Whatsapp";
import Footer from "../../../components/footer/Footer";
import PackagesSection from "../../../components/packages-section/PackagesSection";
import GoogleReviews from "../../../components/google-reviews/GoogleReviews";
import CardsInfoTitle from '../../../components/cards-infos-titulo/CardsInfoTitle';
import RiCheckDoubleLine from "remixicon-react/CheckDoubleLineIcon";
import ImageArteAnuncio1 from '../../../assets/images/arte-anuncio1.webp';
import ImageArteAnuncio2 from '../../../assets/images/arte-anuncio2.webp';
import ImageArteAnuncio3 from '../../../assets/images/arte-anuncio3.webp';
import ImageArteAnuncio4 from '../../../assets/images/arte-anuncio4.webp';
import RiShoppingCartLine from 'remixicon-react/ShoppingCartLineIcon';
import RiPlugLine from 'remixicon-react/PlugLineIcon';
import RiDashboard3Line from 'remixicon-react/Dashboard3LineIcon';
import RiFundsBoxLine from 'remixicon-react/FundsBoxLineIcon';
import RiLayout5Fill from 'remixicon-react/Layout5FillIcon';
import RiSmartphoneLine from 'remixicon-react/SmartphoneLineIcon';
import TitleDescription from '../../../components/title-description/TitleDescription';
import ImageBackground from "../../../components/image-background/ImageBackground";

function ArtesAnuncios() {
    const whatsapp = "https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista%20em%20Artes%20para%20Anuncios";
        
    const packageData1 = {
        packageTitle1: "01 Arte",
        packageDescription1: "Criação de 01 arte profissional para anúncios e campanhas patrocinadas.",
        packagePrice1: "399",
        packageNews1: "199",
        packageParcel1: "312,42",
        packageName1: "",
        included1Package1: "01 Arte",
        included2Package1: "Planejamento Estratégico",
        included3Package1: "Copy Persuasiva",
        included4Package1: "Design Profissional",
        packageLink1: "https://dropshipping-goodds.catalog.yampi.io/desenvolvimento-de-loja-dropshipping-global-start/p"
    };
    const packageData2 = {
        packageTitle2: "03 Artes",
        packageDescription2: "Criação de 03 artes profissionais para anúncios e campanhas patrocinadas.",
        packagePrice2: "999",
        packageNews2: "499",
        packageParcel2: "520,75",
        packageName2: "",
        included1Package2: "03 Artes",
        included2Package2: "Planejamento Estratégico",
        included3Package2: "Copy Persuasiva",
        included4Package2: "Design Profissional",
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
            <ImageBackground isVideo="true" videoOption="2" cta={false} title="Criação de artes para" title2=" anúncios que vendem" description="Artes visuais impactantes para campanhas patrocinadas"/>
            
            <section className={styles.plataformasContainer}>

                <div className={`${styles.plataformaShopify} ${styles.plataformaSection}`}>
                    <div className={styles.gridPlataformas}>
                        <div className={`${styles.gridPlataformasChild} ${styles.plataformaContent}`}>
                            <div className={styles.title}>
                                <h2>Criatividade e Conversão</h2>
                                <span>Designs criativos e estratégicos</span>
                            </div>

                            <p>Desenvolvemos artes que comunicam mensagens claras e persuasivas, capturando o interesse do público e gerando conversão.</p>

                            <div className={styles.checkVantagens}>
                                <p>
                                    <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                    Estratégia e Planejamento
                                </p>
                                <p>
                                    <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                    Artes Personalizadas
                                </p>
                                <p>
                                    <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                    Comunicação Persuasiva
                                </p>
                            </div>
                        </div>

                        <div className={styles.gridPlataformasChild}>
                            <img src={ImageArteAnuncio1} alt="" />
                        </div>
                    </div>
                </div>


                <div className={`${styles.plataformaWoocommerce} ${styles.plataformaSection}`}>
                    <div className={styles.gridPlataformas}>
                        <div className={styles.gridPlataformasChild}>
                            <img src={ImageArteAnuncio2} alt="" />
                        </div>
                        
                        <div className={`${styles.gridPlataformasChild} ${styles.plataformaContent}`}>
                            <div className={styles.title}>
                                <h2>Estratégia e Planejamento</h2>
                                <span>Suas vendas e o engajamento</span>
                            </div>

                            <p>Utilizamos estratégias visuais inovadoras para transformar visualizações em ações concretas, aumentando suas vendas e engajamento.</p>
                        </div>
                    </div>
                </div>


                <div className={`${styles.plataformaYampi} ${styles.plataformaSection}`}>
                    <div className={styles.gridPlataformas}>
                        <div className={`${styles.gridPlataformasChild} ${styles.plataformaContent}`}>
                            <div className={styles.title}>
                                <h2>Artes Personalizadas</h2>
                                <span>Destacamos seus anúncios</span>
                            </div>

                            <p>Cada design é feito sob medida para refletir a identidade e os valores da sua marca, criando uma conexão autêntica com seu público.</p>
                        </div>

                        <div className={styles.gridPlataformasChild}>
                            <img src={ImageArteAnuncio3} alt="" />
                        </div>
                    </div>
                </div>


                <div className={`${styles.plataformaCartPanda} ${styles.plataformaSection} ${styles.pagesArtes}`}>
                    <div className={styles.gridPlataformas}>
                        <div className={styles.gridPlataformasChild}>
                            <img src={ImageArteAnuncio4} alt="" />
                        </div>

                        <div className={`${styles.gridPlataformasChild} ${styles.plataformaContent}`}>
                            <div className={styles.title}>
                                <h2>Comunicação Persuasiva</h2>
                                <span>Conteúdo que reflete sua marca</span>
                            </div>

                            <p>Além de criar artes impressionantes, analisamos constantemente os resultados para otimizar e aprimorar suas campanhas, assegurando um desempenho superior e sustentável.</p>
                        </div>
                    </div>
                </div>
            </section>

            <GoogleReviews />
            <PackagesSection packageData1={packageData1} packageData2={packageData2} terceiroPacote={false} packageData3={packageData3} sectionPackageTitle="Artes e anúncios profissionais" />
            <CardsInfoTitle title="Mostre ao mundo sua marca e ofereça a melhor experiência de compra" />

            <Footer linkCtaWhatsapp={whatsapp} mostrarSecao={true} />
            <Whatsapp whatsappMessage={whatsapp} />
        </div>
    )
}

export default ArtesAnuncios;