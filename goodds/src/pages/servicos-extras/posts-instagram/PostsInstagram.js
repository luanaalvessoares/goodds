import React from "react";
import './PostsInstagram.css';
import styles from '../../plataformas/Plataformas.module.css';
import Whatsapp from "../../../components/whatsapp/Whatsapp";
import Footer from "../../../components/footer/Footer";
import PackagesSection from "../../../components/packages-section/PackagesSection";
import GoogleReviews from "../../../components/google-reviews/GoogleReviews";
import CardsInfoTitle from '../../../components/cards-infos-titulo/CardsInfoTitle';
import RiCheckDoubleLine from "remixicon-react/CheckDoubleLineIcon";
import ImagePostsInstagram1 from '../../../assets/images/posts-instagram1.webp';
import ImagePostsInstagram2 from '../../../assets/images/posts-instagram2.webp';
import ImagePostsInstagram3 from '../../../assets/images/posts-instagram3.webp';
import ImagePostsInstagram4 from '../../../assets/images/posts-instagram4.webp';
import RiShoppingCartLine from 'remixicon-react/ShoppingCartLineIcon';
import RiPlugLine from 'remixicon-react/PlugLineIcon';
import RiDashboard3Line from 'remixicon-react/Dashboard3LineIcon';
import RiFundsBoxLine from 'remixicon-react/FundsBoxLineIcon';
import RiLayout5Fill from 'remixicon-react/Layout5FillIcon';
import RiSmartphoneLine from 'remixicon-react/SmartphoneLineIcon';
import TitleDescription from '../../../components/title-description/TitleDescription';
import ImageBackground from "../../../components/image-background/ImageBackground";


function PostsInstagram() {
    const whatsapp = "https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista%20em%20posts%20e%20artes%20para%20de%20Instagram";
        
    const packageData1 = {
        packageTitle1: "Insta Start",
        packageDescription1: "15 posts Instagram no Feed + 6 posts no Instagram Stories",
        packagePrice1: "1.999",
        packageNews1: "999",
        packageParcel1: "101,24",
        packageName1: " no Insta Start",
        included1Package1: "15 posts no Feed",
        included2Package1: "6 posts no Stories",
        included3Package1: "Planejamento estratégico",
        included4Package1: "Copys persuasivas",
        included5Package1: "Artes profissionais",
        included6Package1: "Gestão de postagens",
        packageLink1: "https://dropshipping-goodds.catalog.yampi.io/pacote-insta-start/p",
        btnName1: "Comprar"
    };
    const packageData2 = {
        packageTitle2: "Insta Pro",
        packageDescription2: "30 posts Instagram no Feed + 15 posts no Instagram Stories.",
        packagePrice2: "3.798",
        packageNews2: "1.899",
        packageParcel2: "192,45",
        packageName2: " no Insta Pro",
        included1Package2: "30 posts no Feed",
        included2Package2: "15 posts no Stories",
        included3Package2: "Planejamento estratégico",
        included4Package2: "Copys persuasivas",
        included5Package2: "Artes profissionais",
        included6Package2: "Gestão de postagens",
        packageLink2: "https://dropshipping-goodds.catalog.yampi.io/pacote-insta-pro/p",
        btnName2: "Comprar"
    };
    const packageData3 = {
        packageTitle3: "Insta Super",
        packageDescription3: "60 posts Instagram no Feed + 30 posts no Instagram Stories.",
        packagePrice3: "7.398",
        packageNews3: "3.699",
        packageParcel3: "374,86",
        packageName3: " no Insta Super",
        included1Package3: "60 posts no Feed",
        included2Package3: "30 posts no Stories",
        included3Package3: "Planejamento estratégico",
        included4Package3: "Copys persuasivas",
        included5Package3: "Artes profissionais",
        included6Package3: "Gestão de postagens",
        packageLink3: "https://dropshipping-goodds.catalog.yampi.io/pacote-insta-super/p",
        btnName3: "Comprar"
    };

    return (
        <div>
            <ImageBackground isVideo="true" videoOption="2" cta={false} title="Sua marca em destaque" title2=" no Instagram" description="Criamos e gerenciamos seus posts para garantir impacto e crescimento"/>
            
            <section className={styles.plataformasContainer}>

                <div className={`${styles.plataformaShopify} ${styles.plataformaSection}`}>
                    <div className={styles.gridPlataformas}>
                        <div className={`${styles.gridPlataformasChild} ${styles.plataformaContent}`}>
                            <div className={styles.title}>
                                <h2>Impulsione seu Instagram</h2>
                                <span>O Instagram é uma vitrine poderosa</span>
                            </div>

                            <p>Com nosso serviço de gestão de posts, transformamos seu perfil em uma ferramenta de marketing eficaz, aumentando sua visibilidade e atraindo mais clientes.</p>

                            <div className={styles.checkVantagens}>
                                <p>
                                    <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                    Conteúdo Criativo
                                </p>
                                <p>
                                    <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                    Planejamento Estratégico
                                </p>
                                <p>
                                    <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                    Gestão de Postagens
                                </p>
                            </div>
                        </div>

                        <div className={styles.gridPlataformasChild}>
                            <img src={ImagePostsInstagram1} alt="" />
                        </div>
                    </div>
                </div>


                <div className={`${styles.plataformaWoocommerce} ${styles.plataformaSection}`}>
                    <div className={styles.gridPlataformas}>
                        <div className={styles.gridPlataformasChild}>
                            <img src={ImagePostsInstagram2} alt="" />
                        </div>
                        
                        <div className={`${styles.gridPlataformasChild} ${styles.plataformaContent}`}>
                            <div className={styles.title}>
                                <h2>Conteúdo Criativo</h2>
                                <span>Criamos posts inovadores que engajam</span>
                            </div>

                            <p>Nosso objetivo é gerar não apenas likes, mas interações significativas que construam uma comunidade fiel em torno da sua marca, impulsionando suas vendas e transformando seguidores em clientes.</p>

                        </div>
                    </div>
                </div>


                <div className={`${styles.plataformaYampi} ${styles.plataformaSection}`}>
                    <div className={styles.gridPlataformas}>
                        <div className={`${styles.gridPlataformasChild} ${styles.plataformaContent}`}>
                            <div className={styles.title}>
                                <h2>Planejamento Estratégico</h2>
                                <span>Tenha sucesso no Instagram com planos sob medida</span>
                            </div>

                            <p>Desenvolvemos estratégias sob medida, focadas em metas claras, seja aumentar vendas, melhorar o engajamento ou elevar o reconhecimento da marca.</p>
                        </div>

                        <div className={styles.gridPlataformasChild}>
                            <img src={ImagePostsInstagram3} alt="" />
                        </div>
                    </div>
                </div>


                <div className={`${styles.plataformaCartPanda} ${styles.plataformaSection} ${styles.pagesArtes}`}>
                    <div className={styles.gridPlataformas}>
                        <div className={styles.gridPlataformasChild}>
                            <img src={ImagePostsInstagram4} alt="" />
                        </div>

                        <div className={`${styles.gridPlataformasChild} ${styles.plataformaContent}`}>
                            <div className={styles.title}>
                                <h2>Gestão de Postagens</h2>
                                <span>Mais tempo para você e para seu negócio</span>
                            </div>

                            <p>Deixe a gestão do Instagram conosco e concentre-se no que você faz melhor. Enquanto gerencia seu negócio, nós cuidamos de construir e manter sua presença online forte e consistente no Instagram.</p>

                        </div>
                    </div>
                </div>
            </section>

            <GoogleReviews />
            <PackagesSection packageData1={packageData1} segundoPacote={true} packageData2={packageData2} terceiroPacote={true} packageData3={packageData3} sectionPackageTitle="Tenha um Instagram Profissional" />
            <CardsInfoTitle title="Mostre ao mundo sua marca e ofereça a melhor experiência de compra" />
            
            <Footer linkCtaWhatsapp={whatsapp} mostrarSecao={true} />
            <Whatsapp whatsappMessage={whatsapp} />
        </div>
    )
}

export default PostsInstagram;