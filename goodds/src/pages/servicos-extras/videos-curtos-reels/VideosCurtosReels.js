import React from "react";
import './VideosCurtosReels.css';
import styles from '../../plataformas/Plataformas.module.css';
import Whatsapp from "../../../components/whatsapp/Whatsapp";
import Footer from "../../../components/footer/Footer";
import PackagesSection from "../../../components/packages-section/PackagesSection";
import GoogleReviews from "../../../components/google-reviews/GoogleReviews";
import CardsInfoTitle from '../../../components/cards-infos-titulo/CardsInfoTitle';
import RiCheckDoubleLine from "remixicon-react/CheckDoubleLineIcon";
import ImageVideosCurtosReels1 from '../../../assets/images/videos-curtos-reels1.webp';
import ImageVideosCurtosReels2 from '../../../assets/images/videos-curtos-reels2.webp';
import ImageVideosCurtosReels3 from '../../../assets/images/videos-curtos-reels3.webp';
import ImageVideosCurtosReels4 from '../../../assets/images/videos-curtos-reels4.webp';
import RiShoppingCartLine from 'remixicon-react/ShoppingCartLineIcon';
import RiPlugLine from 'remixicon-react/PlugLineIcon';
import RiDashboard3Line from 'remixicon-react/Dashboard3LineIcon';
import RiFundsBoxLine from 'remixicon-react/FundsBoxLineIcon';
import RiLayout5Fill from 'remixicon-react/Layout5FillIcon';
import RiSmartphoneLine from 'remixicon-react/SmartphoneLineIcon';
import TitleDescription from '../../../components/title-description/TitleDescription';
import ImageBackground from "../../../components/image-background/ImageBackground";

function VideoCurtoReels() {
    const whatsapp = "https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista%20em%20vídeos%20e%20reels";
    

    const packageData1 = {
        packageTitle1: "15 segundos",
        packageDescription1: "Fazemos a edição e a produção de um vídeo com 15 segundos de conteúdo para as redes sociais e aplicação em campanhas patrocinadas.",
        packagePrice1: "999",
        packageNews1: "499",
        packageParcel1: "",
        packageName1: "",
        included1Package1: "15 segundos de vídeo",
        included2Package1: "Planejamento estratégico",
        included3Package1: "Desenvolvimento artístico e criativo",
        included4Package1: "Finalização e pós produção",
        packageLink1: "https://dropshipping-goodds.catalog.yampi.io/desenvolvimento-de-loja-dropshipping-global-start/p"
    };
    const packageData2 = {
        packageTitle2: "30 segundos",
        packageDescription2: "Fazemos a edição e a produção de um vídeo com 30 segundos de conteúdo para as redes sociais e aplicação em campanhas patrocinadas.",
        packagePrice2: "1.999",
        packageNews2: "999",
        packageParcel2: "312,42",
        packageName2: "",
        included1Package2: "30 segundos de vídeo",
        included2Package2: "Planejamento estratégico",
        included3Package2: "Desenvolvimento artístico e criativo",
        included4Package2: "Finalização e pós produção",
        packageLink2: "https://dropshipping-goodds.catalog.yampi.io/desenvolvimento-de-loja-dropshipping-global-start/p"
    };
    const packageData3 = {
        packageTitle3: "60 segundos",
        packageDescription3: "Fazemos a edição e a produção de um vídeo com 60 segundos de conteúdo para as redes sociais e aplicação em campanhas patrocinadas.",
        packagePrice3: "2.999",
        packageNews3: "1.499",
        packageParcel3: "520,75",
        packageName3: "",
        included1Package3: "60 segundos de vídeo",
        included2Package3: "Planejamento estratégico",
        included3Package3: "Desenvolvimento artístico e criativo",
        included4Package3: "Finalização e pós produção",
        packageLink3: "https://dropshipping-goodds.catalog.yampi.io/desenvolvimento-de-loja-dropshipping-global-mega/p"
    };

    return (
        <div>
            <ImageBackground isVideo="true" videoOption="2" cta={false} title="Damos vida à sua marca com" title2=" vídeos e reels impactantes" description="Criação de vídeos curtos para anúncios de produtos"/>

            <section className={styles.plataformasContainer}>

                <div className={`${styles.plataformaShopify} ${styles.plataformaSection}`}>
                    <div className={styles.gridPlataformas}>
                        <div className={`${styles.gridPlataformasChild} ${styles.plataformaContent}`}>
                            <div className={styles.title}>
                                <h2>Conteúdo que vende</h2>
                                <span>Conteúdo dinâmico para engajamento máximo</span>
                            </div>

                            <p>Vídeos estrategicamente projetados para capturar a atenção e estimular o desejo de compra, perfeitos para o ritmo acelerado das redes sociais.</p>

                            <div className={styles.checkVantagens}>
                                <p>
                                    <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                    Vídeos Personalizados
                                </p>
                                <p>
                                    <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                    Conteúdo Viral
                                </p>
                                <p>
                                    <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                    Produção Ágil
                                </p>
                            </div>
                        </div>

                        <div className={styles.gridPlataformasChild}>
                            <img src={ImageVideosCurtosReels1} alt="" />
                        </div>
                    </div>
                </div>


                <div className={`${styles.plataformaWoocommerce} ${styles.plataformaSection}`}>
                    <div className={styles.gridPlataformas}>
                        <div className={styles.gridPlataformasChild}>
                            <img src={ImageVideosCurtosReels2} alt="" />
                        </div>
                        
                        <div className={`${styles.gridPlataformasChild} ${styles.plataformaContent}`}>
                            <div className={styles.title}>
                                <h2>Vídeos Personalizados</h2>
                                <span>Design eclusivo</span>
                            </div>

                            <p>Cada vídeo é cuidadosamente criado para refletir os valores e a identidade da sua marca e dos seus produtos, criando uma conexão genuína com seu público.</p>
                        </div>
                    </div>
                </div>


                <div className={`${styles.plataformaYampi} ${styles.plataformaSection}`}>
                    <div className={styles.gridPlataformas}>
                        <div className={`${styles.gridPlataformasChild} ${styles.plataformaContent}`}>
                            <div className={styles.title}>
                                <h2>Conteúdo Viral</h2>
                                <span>Alcance mais pessoas e venda mais</span>
                            </div>

                            <p>Nossa expertise em conteúdo viral significa que seus produtos têm maior chance de serem compartilhados, ampliando seu alcance orgânico e convertendo muito mais.</p>
                        </div>

                        <div className={styles.gridPlataformasChild}>
                            <img src={ImageVideosCurtosReels3} alt="" />
                        </div>
                    </div>
                </div>


                <div className={`${styles.plataformaCartPanda} ${styles.plataformaSection}`}>
                    <div className={styles.gridPlataformas}>
                        <div className={styles.gridPlataformasChild}>
                            <img src={ImageVideosCurtosReels4} alt="" />
                        </div>

                        <div className={`${styles.gridPlataformasChild} ${styles.plataformaContent}`}>
                            <div className={styles.title}>
                                <h2>Produção Ágil</h2>
                                <span>Entrega e criação rápida</span>
                            </div>

                            <p>Mantenha sua marca sempre à frente, com produções ágeis que captam as últimas tendências e novidades, garantindo que seus produtos e conteúdos sejam sempre atuais e relevantes.</p>
                        </div>
                    </div>
                </div>
            </section>

            <GoogleReviews />
            <PackagesSection packageData1={packageData1} packageData2={packageData2} terceiroPacote={true} packageData3={packageData3} sectionPackageTitle="Tenha uma Loja Completa" />
            <CardsInfoTitle title="Mostre ao mundo sua marca e ofereça a melhor experiência de compra" />

            <Footer linkCtaWhatsapp={whatsapp} mostrarSecao={true} />
            <Whatsapp whatsappMessage={whatsapp} />
        </div>
    )
}

export default VideoCurtoReels;