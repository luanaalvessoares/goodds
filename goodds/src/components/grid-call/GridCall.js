import React from "react";
import styles from '../../pages/venda-todos-os-dias/VendaTodosOsDias.module.css';
import stylesMain from './GridCall.module.css';
import RiArrowDropRightFill from 'remixicon-react/ArrowDropRightFillIcon';
import ImageCall1 from '../../assets/images/call-start.svg';
import ImageCall2 from '../../assets/images/call-aprovacao.svg';
import ImageCall3 from '../../assets/images/call-marketing.svg';

function GridCall() {
    return (
        <section className={`${styles.containerChild} ${stylesMain.sectionMain}`}>
            <div className={`${styles.child7} ${styles.child}`}>
                <div>
                    <div className={styles.titleSub}>
                        <h2>Acompanhe todas as etapas do desenvolvimento</h2>
                        <p>Pensamos em absolutamente tudo e compreendemos a importância de você acompanhar de perto todas as execuções.</p>
                    </div>

                    <div className={styles.gridCardsInfos}>
                        <div className={styles.gridCardInfoChild}>
                            <div>
                                <img src={ImageCall1} alt=""/>
                            </div>
                            <div>
                                <h3>Reunião Start</h3>
                                <p>Após a contratação do pacote fazemos uma reunião com você para definir as personalizações da sua loja e também para te orientar sobre tudo.</p>
                            </div>
                        </div>
                        <div className={styles.gridCardInfoChild}>
                            <div>
                                <img src={ImageCall2} alt=""/>
                            </div>
                            <div>
                                <h3>Reunião de Aprovação</h3>
                                <p>Criamos sua loja com exclusividade seguindo suas ideias e referências, e após o desenvolvimento você aprova tudo para que fique do seu jeito.</p>
                            </div>
                        </div>
                        <div className={styles.gridCardInfoChild}>
                            <div>
                                <img src={ImageCall3} alt=""/>
                            </div>
                            <div>
                                <h3>Reunião de Marketing</h3>
                                <p>Com toda criação concluída nossa equipe de marketing alinha em uma reunião dedicada com você as estratégias dos anúncios patrocinados.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.child7Info3}>
                        <h2>E depois do desenvolvimento?</h2>

                        <p>
                            Nosso time de 
                            <span> mentores especializados </span>
                            estão sempre de plantão para tirar suas dúvidas e auxiliar no gerenciamento da sua loja para você vender todos os dias na internet.
                        </p>
                    </div>
                            
                    <div className={`${styles.gridTwoColumnInfoBtn} ${styles.ctaBtn}`}>
                        <a href="#packageSection">
                            Preços e Soluções
                        </a>
                        <p>
                            <span className={styles.ctaBtnDesc}><RiArrowDropRightFill />Aproveite nossa promoção de 50% OFF</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GridCall;