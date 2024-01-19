import React from "react";
import './CriacaoLogo.css';
import styles from '../../plataformas/Plataformas.module.css';
import Whatsapp from "../../../components/whatsapp/Whatsapp";
import Footer from "../../../components/footer/Footer";
import PackagesSection from "../../../components/packages-section/PackagesSection";
import GoogleReviews from "../../../components/google-reviews/GoogleReviews";
import CardsInfoTitle from '../../../components/cards-infos-titulo/CardsInfoTitle';
import RiCheckDoubleLine from "remixicon-react/CheckDoubleLineIcon";
import ImageCriacaoLogo1 from '../../../assets/images/criacao-logo1.webp';
import ImageCriacaoLogo2 from '../../../assets/images/criacao-logo2.webp';
import ImageCriacaoLogo3 from '../../../assets/images/criacao-logo3.webp';
import ImageCriacaoLogo4 from '../../../assets/images/criacao-logo4.webp';
import RiShoppingCartLine from 'remixicon-react/ShoppingCartLineIcon';
import RiPlugLine from 'remixicon-react/PlugLineIcon';
import RiDashboard3Line from 'remixicon-react/Dashboard3LineIcon';
import RiFundsBoxLine from 'remixicon-react/FundsBoxLineIcon';
import RiLayout5Fill from 'remixicon-react/Layout5FillIcon';
import RiSmartphoneLine from 'remixicon-react/SmartphoneLineIcon';
import TitleDescription from '../../../components/title-description/TitleDescription';
import ImageBackground from "../../../components/image-background/ImageBackground";

function CriacaoLogo() {
    const whatsapp = "https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista%20em%20Criação%20de%20Logomarca";
        
    const packageData1 = {
        packageTitle1: "Logo Simples",
        packageDescription1: "Desenvolvimento da Logo simples para aplicação na loja virtual e redes sociais.",
        packagePrice1: "1.397",
        packageNews1: "697",
        packageParcel1: "70,64",
        packageName1: "",
        included1Package1: "Criação da Logo Exclusiva",
        included2Package1: "Design Personalizado",
        included3Package1: "Arquivo em PNG",
        included13Package1: "Manual da marca",
        packageLink1: "https://dropshipping-goodds.catalog.yampi.io/criacao-de-logo/p",
        btnName1: "Comprar"
    };
    const packageData2 = {
        packageTitle2: "Logo com Manual",
        packageDescription2: "Desenvolvimento da Logo completa com manual da marca para aplicação na loja virtual, redes sociais e materiais impressos.",
        packagePrice2: "2.797",
        packageNews2: "1.397",
        packageParcel2: "141,57",
        packageName2: "",
        included1Package2: "Criação da Logo Exclusiva",
        included2Package2: "Design Personalizado",
        included3Package2: "Arquivo em PNG e PSD",
        included4Package2: "Manual da marca",
        packageLink2: "https://dropshipping-goodds.catalog.yampi.io/criacao-de-logo-com-manual-de-identidade/p",
        btnName2: "Comprar"
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
        packageLink3: "",
        btnName3: "Comprar"
    };

    return (
        <div>
            <ImageBackground isVideo="true" videoOption="2" cta={false} title="Identidade Visual" title2=" com Logos Profissionais" description="Design que reflete a essência e eleva o reconhecimento da sua marca"/>
            
            <section className={styles.plataformasContainer}>

                <div className={`${styles.plataformaShopify} ${styles.plataformaSection}`}>
                    <div className={styles.gridPlataformas}>
                        <div className={`${styles.gridPlataformasChild} ${styles.plataformaContent}`}>
                            <div className={styles.title}>
                                <h2>Identidade Marcante</h2>
                                <span>Sua logo do seu jeito</span>
                            </div>

                            <p>O primeiro contato com o cliente é através da sua logo. Entendemos sua marca e criamos designs que garantem uma impressão segura e positiva.</p>

                            <div className={styles.checkVantagens}>
                                <p>
                                    <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                    Desenvolvimento Exclusivo
                                </p>
                                <p>
                                    <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                    Design Personalizado
                                </p>
                                <p>
                                    <span className={styles.iconStyle}><RiCheckDoubleLine /> </span>
                                    Expertise em Cores e Formas
                                </p>
                            </div>
                        </div>

                        <div className={styles.gridPlataformasChild}>
                            <img src={ImageCriacaoLogo1} alt="" />
                        </div>
                    </div>
                </div>


                <div className={`${styles.plataformaWoocommerce} ${styles.plataformaSection}`}>
                    <div className={styles.gridPlataformas}>
                        <div className={styles.gridPlataformasChild}>
                            <img src={ImageCriacaoLogo2} alt="" />
                        </div>
                        
                        <div className={`${styles.gridPlataformasChild} ${styles.plataformaContent}`}>
                            <div className={styles.title}>
                                <h2>Desenvolvimento Exclusivo</h2>
                                <span>Versatilidade aplicada em arte</span>
                            </div>

                            <p>Criamos logos atemporais que permanecem relevantes e  impactantes ao longo do tempo. Nossos designs são pensados para ressonar com seu público especifico, garantindo conexão e reconhecimento da marca.</p>
                        </div>
                    </div>
                </div>


                <div className={`${styles.plataformaYampi} ${styles.plataformaSection}`}>
                    <div className={styles.gridPlataformas}>
                        <div className={`${styles.gridPlataformasChild} ${styles.plataformaContent}`}>
                            <div className={styles.title}>
                                <h2>Design Personalizado</h2>
                                <span>Sua logo incomparável</span>
                            </div>

                            <p>Entendemos sua marca para criar uma logomarca que não só se destaca, mas também conta a sua história de maneira única.</p>
                        </div>

                        <div className={styles.gridPlataformasChild}>
                            <img src={ImageCriacaoLogo3} alt="" />
                        </div>
                    </div>
                </div>


                <div className={`${styles.plataformaCartPanda} ${styles.plataformaSection}`}>
                    <div className={styles.gridPlataformas}>
                        <div className={styles.gridPlataformasChild}>
                            <img src={ImageCriacaoLogo4} alt="" />
                        </div>

                        <div className={`${styles.gridPlataformasChild} ${styles.plataformaContent}`}>
                            <div className={styles.title}>
                                <h2>Expertise em Cores e Formas</h2>
                                <span>Amplifique o reconhecimento da sua marca</span>
                            </div>

                            <p>Com um profundo conhecimento em psicologia das cores e geometria, cada elemento do seu logo é cuidadosamente escolhido para transmitir a mensagem certa.</p>
                        </div>
                    </div>
                </div>
            </section>

            <GoogleReviews />
            <PackagesSection packageData1={packageData1} segundoPacote={true} packageData2={packageData2} terceiroPacote={false} packageData3={packageData3} sectionPackageTitle="Tenha um Logo profissional" />
            <CardsInfoTitle title="Mostre ao mundo sua marca e ofereça a melhor experiência de compra" />
            
            <Footer linkCtaWhatsapp={whatsapp} mostrarSecao={true} />
            <Whatsapp whatsappMessage={whatsapp} />
        </div>
    )
}

export default CriacaoLogo;