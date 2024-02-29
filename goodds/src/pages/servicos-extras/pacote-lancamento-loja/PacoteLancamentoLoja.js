import React from "react";
import styles from './PacoteLancamentoLoja.module.css';
import Whatsapp from "../../../components/whatsapp/Whatsapp";
import Footer from "../../../components/footer/Footer";
import CardsInfoTitle from '../../../components/cards-infos-titulo/CardsInfoTitle';
import PackagesSection from "../../../components/packages-section/PackagesSection";
import GoogleReviews from "../../../components/google-reviews/GoogleReviews";
import ElementSection1 from '../../../assets/images/elementsection1-pacote-lancamento.svg';
import ImageSection1 from '../../../assets/images/imagesection1-pacote-lancamento.svg';
import ImageSection2 from '../../../assets/images/imagesection2-pacote-lancamento.svg';
import Section3Icon1 from '../../../assets/images/section3icon1-pacote-lancamento.svg';
import Section3Icon2 from '../../../assets/images/section3icon2-pacote-lancamento.svg';
import Section3Icon3 from '../../../assets/images/section3icon3-pacote-lancamento.svg';
import Section3Icon4 from '../../../assets/images/section3icon4-pacote-lancamento.svg';
import Section3Icon5 from '../../../assets/images/section3icon5-pacote-lancamento.svg';
import ImageSection4 from '../../../assets/images/imagesection4-pacote-lancamento.svg';
import Section5Grid1 from '../../../assets/images/section5grid1-pacote-lancamento.svg';
import Section5Grid2 from '../../../assets/images/section5grid2-pacote-lancamento.svg';
import Section5Grid3 from '../../../assets/images/section5grid3-pacote-lancamento.svg';
import Section5Grid4 from '../../../assets/images/section5grid4-pacote-lancamento.svg';
import Section5Grid5 from '../../../assets/images/section5grid5-pacote-lancamento.svg';
import Section5Grid6 from '../../../assets/images/section5grid6-pacote-lancamento.svg';
import Section6Element1 from '../../../assets/images/section6element1-pacote-lancamento.svg';
import Section6Element2 from '../../../assets/images/section6element2-pacote-lancamento.svg';
import Section6Element3 from '../../../assets/images/section6element3-pacote-lancamento.svg';
import Section8Element1 from '../../../assets/images/section8element1-pacote-lancamento.svg';
import Section8Element2 from '../../../assets/images/section8element2-pacote-lancamento.svg';
import Section8Element3 from '../../../assets/images/section8element3-pacote-lancamento.svg';
import ImageSection9 from '../../../assets/images/imagesection9-pacote-lancamento.svg';

function PacoteLancamentoLoja() {
    const whatsapp = "https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista%20em%20lançamento%20de%20loja";

    const pacote1 = {
        packageTitle1: "Lançamento de Loja",
        packageDescription1: "Um pacote com serviços que facilita o lançamento do seu site, ampliando sua presença online e te ajudando nos primeiros passos para o sucesso.",
        packagePrice1: "1.997",
        packageNews1: "997",
        packageParcel1: "101,04",
        packageName1: " no Pacote",
        included1Package1: "9 artes profissionais para o grid do seu Instagram",
        included2Package1: "Criação e configuração Google Meu Negócio",
        included3Package1: "Script de atendimento inicial para Whatsapp",
        included4Package1: "Criação do linktree para a bio do seu Instagram",
        included5Package1: "3 capas para os destaques do seu perfil",
        packageLink1: "https://dropshipping-goodds.catalog.yampi.io/pacote-de-lancamento-de-loja/p",
        bandeiras1: false,
        btnName1: "comprar",
        botaoDegrade: false,
    };
    const pacote2 = {
        packageTitle2: "",
        packageDescription2: "",
        packagePrice2: "",
        packageNews2: "",
        packageParcel2: "",
        packageName2: "",
        included1Package2: "",
        included2Package2: "",
        included3Package2: "",
        included4Package2: "",
        included5Package2: "",
        included6Package2: "",
        included7Package2: "",
        included8Package2: "",
        included9Package2: "",
        included11Package2: "",
        packageLink2: ""
    };
    const pacote3 = {
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
        included5Package3: "",
        included6Package3: "",
        included7Package3: "",
        included8Package3: "",
        included9Package3: "",
        included10Package3: "",
        packageLink3: ""
    };

    return (
        <div id="pacoteLancamentoLoja">
            <section className={`${styles.section} ${styles.section1}`}>
                <div className={styles.gridTwoColumns}>
                    <div>
                        <h1>Pacote Para Lançamento <br/> de Loja</h1>
                        <p>Criamos um pacote com serviços para facilitar o lançamento do seu site!</p>
                        <div>
                            <img src={ElementSection1} alt=""/>
                        </div>
                    </div>
                    <div>
                        <img src={ImageSection1} alt=""/>
                    </div>
                </div>
            </section>

            <section className={`${styles.section} ${styles.section2}`}>
                <div className={styles.gridTwoColumns}>
                    <div>
                        <h2>Comece com o pé direito! Dê o start para o sucesso da sua marca.</h2>
                    </div>
                    <div>
                        <img src={ImageSection2} alt=""/>
                    </div>
                </div>
            </section>

            <section className={`${styles.section} ${styles.section3}`}>
                <div>
                    <div className={styles.section3Title}>
                        <p>O que nosso pacote inclui:</p>
                    </div>

                    <div className={styles.gridBenefitsLine1}>
                        <div className={styles.gridItem}>
                            <img src={Section3Icon1} alt=""/>
                            <p>9 artes profissionais para o grid do seu Instagram</p>
                        </div>
                        <div className={styles.gridItem}>
                            <img src={Section3Icon2} alt=""/>
                            <p>Criação e configuração Google Meu Negócio</p>
                        </div>
                        <div className={styles.gridItem}>
                            <img src={Section3Icon3} alt=""/>
                            <p>Script de atendimento inicial para Whatsapp</p>
                        </div>
                    </div>

                    <div className={styles.gridBenefitsLine2}>
                        <div className={styles.gridItem}>
                            <img src={Section3Icon4} alt=""/>
                            <p>Criação do linktree para a bio do seu Instagram</p>
                        </div>
                        <div className={styles.gridItem}>
                            <img src={Section3Icon5} alt=""/>
                            <p>3 capas para os destaques do seu perfil</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.section} ${styles.section4}`}>
                <div className={styles.gridTwoColumns}>
                    <div>
                        <p>Vá além do básico!</p>
                        <img src={ImageSection4} alt=""/>
                    </div>
                    <div>
                        <div>
                            <h3>Amplie sua presença online</h3>
                            <p>Estruturamos o seu Instagram para passar mais credibilidade aos clientes que irão acessar o seu perfil.</p>
                        </div>
                        <div className={styles.separator}></div>
                        <div>
                            <h3>Primeiros passos para o sucesso</h3>
                            <p>Configuramos duas ferramentas que irão ajudar ao acesso em sua loja, além de um script de atendimento personalizado para a sua marca.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.section} ${styles.section5}`}>
                <div>
                    <div>
                        <h2>09 artes para o Grid<br/>do seu Intagram</h2>
                    </div>
                    <div className={styles.gridSection5}>
                        <div className={styles.gridInstagram}>
                            <img src={Section5Grid2} alt=""/>
                            <img src={Section5Grid3} alt=""/>
                        </div>
                        <div></div>
                        <div className={styles.mockupPhone}>
                            <img src={Section5Grid1} alt=""/>
                        </div>
                        <div className={styles.gridInstagram}>
                            <div className={styles.gridLikeInstagram}>
                                <img src={Section5Grid4} alt=""/>
                                <img src={Section5Grid6} className={styles.likeInstagram} alt=""/>
                            </div>
                            <img src={Section5Grid5} alt=""/>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.section} ${styles.section6}`}>
                <div className={styles.gridTwoColumns}>
                    <div>
                        <img className={styles.abstractImage} src={Section6Element1} alt=""/>
                        <h3>Criação e configuração<br/>Google meu negócio</h3>
                        <img src={Section6Element2} alt=""/>
                        <img className={styles.abstractImage} src={Section6Element1} alt=""/>
                    </div>
                    <div>
                        <img src={Section6Element3} alt=""/>
                    </div>
                </div>
            </section>

            {/* <section className={`${styles.section} ${styles.section6}`}>
                <div className={styles.gridTwoColumns}>
                    <div>
                        <img className={styles.abstractImage} src={Section6Element1} alt=""/>
                        <h3>Criação e configuração<br/>Google meu negócio</h3>
                        <img src={Section6Element2} alt=""/>
                        <img className={styles.abstractImage} src={Section6Element1} alt=""/>
                    </div>
                    <div>
                        <img src={Section6Element3} alt=""/>
                    </div>
                </div>
            </section> */}

            <section className={`${styles.section} ${styles.section8}`}>
                <div className={styles.gridTwoColumns}>
                    <div>
                        <h3>Criação do Linktree para<br/>a bio do seu Instagram</h3>
                        <div>
                            <img src={Section8Element1} alt=""/>
                            <img src={Section8Element2} alt=""/>                            
                        </div>
                    </div>
                    <div>
                        <img src={Section8Element3} alt=""/>
                    </div>
                </div>
            </section>

            <section className={`${styles.section} ${styles.section9}`}>
                <div>
                    <div>
                        <img src={Section3Icon1} alt=""/>
                    </div>
                    <div>
                        <h3>3 capas para os<br/>destaques do seu perfil</h3>
                    </div>
                    <div>
                        <img src={ImageSection9} alt=""/>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <GoogleReviews />
            </section>

            <section>
                <PackagesSection packageData1={pacote1} segundoPacote={false} packageData2={pacote2} terceiroPacote={false} packageData3={pacote3}  sectionPackageTitle="Pacote Lançamento de Loja" />
            </section>

            <Footer linkCtaWhatsapp={whatsapp} mostrarSecao={false} />
            <Whatsapp whatsappMessage={whatsapp} />

        </div>
    )
}

export default PacoteLancamentoLoja;