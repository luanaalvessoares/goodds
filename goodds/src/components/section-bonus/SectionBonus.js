import React from "react";
import styles from '../../pages/venda-todos-os-dias/VendaTodosOsDias.module.css';
import stylesMain from './SectionBonus.module.css';
import RiCheckDoubleFill from 'remixicon-react/CheckDoubleFillIcon';
import RiArrowDropRightFill from 'remixicon-react/ArrowDropRightFillIcon';
import ImageParceiroPrintful from '../../assets/images/parceiro-printful.svg';

function SectionBonus(props) {
    const {
        printImage,
        printTitle,
        printSubtitle,
        bonus1,
        bonus2,
        bonus3,
        bonus4,
        bonus5,
        bonus6,
        bonus7,
        bonus8,
    } = props.bonusData;

    return (
        <section className={`${styles.containerChild} ${styles.sectionBg} ${stylesMain.sectionMain}`}>
            <div className={`${styles.child8} ${styles.child}`}>
                <div>
                    <div className={styles.child8Title}>
                        <h2>Todos os Bônus que você recebe ao adquirir nosso pacote:</h2>
                    </div>

                    <div className={styles.gridCardsInfos}>
                        <div className={`${styles.gridCardInfoChild} ${stylesMain.imagePrintfulBonus}`}>
                            <img src={printImage ? printImage : `${ImageParceiroPrintful}`} alt="" />
                        </div>

                        <div className={styles.gridCardInfoChild}>
                            <h2>{printTitle ? printTitle : 'Integração da Printful para venda de produtos personalizados sob demanda sem estoque'}</h2>

                            <p>{printSubtitle ? printSubtitle : 'A Printful é a maior empresa de Print-on-Demand do mundo. Ela disponibiliza mais de 340 produtos para serem personalizados com a sua marca.'}</p>
                        </div>
                    </div>

                    <div className={styles.gridCardsMiniInfos}>
                        <div className={styles.gridCardMiniInfoChild}>
                            <div>
                                <div>
                                    <span><RiCheckDoubleFill /></span>
                                </div>
                                <div>
                                    <p>{bonus1 ? bonus1 : 'Tema Extra de Alta Conversão'}</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.gridCardMiniInfoChild}>
                            <div>
                                <div>
                                    <span><RiCheckDoubleFill /></span>
                                </div>
                                <div>
                                    <p>{bonus2 ? bonus2 : 'Curso de Técnicas e Estratégias de Vendas'}</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.gridCardMiniInfoChild}>
                            <div>
                                <div>
                                    <span><RiCheckDoubleFill /></span>
                                </div>
                                <div>
                                    <p>{bonus3 ? bonus3 : 'Acesso a Fornecedores Nacionais Exclusivos'}</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.gridCardMiniInfoChild}>
                            <div>
                                <div>
                                    <span><RiCheckDoubleFill /></span>
                                </div>
                                <div>
                                    <p>{bonus4 ? bonus4 : 'Consultoria de Contabilidade'}</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.gridCardMiniInfoChild}>
                            <div>
                                <div>
                                    <span><RiCheckDoubleFill /></span>
                                </div>
                                <div>
                                    <p>{bonus5 ? bonus5 : 'Condições Especiais em Apps e Plataformas'}</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.gridCardMiniInfoChild}>
                            <div>
                                <div>
                                    <span><RiCheckDoubleFill /></span>
                                </div>
                                <div>
                                    <p>{bonus6 ? bonus6 : 'Receba um Funil de Vendas Validado'}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.title}>
                        <h2>
                            <span>Bônus EXCLUSIVOS </span>
                            para Venda Global
                        </h2>
                    </div>

                    <div className={`${styles.gridCardsMiniInfos} ${styles.miniInfoTwoColumns}`}>
                        <div className={styles.gridCardMiniInfoChild}>
                            <div>
                                <div>
                                    <span><RiCheckDoubleFill /></span>
                                </div>
                                <div>
                                    <p>{bonus7 ? bonus7 : 'Metodologia para Mineração Global'}</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.gridCardMiniInfoChild}>
                            <div>
                                <div>
                                    <span><RiCheckDoubleFill /></span>
                                </div>
                                <div>
                                    <p>{bonus8 ? bonus8 : 'Estudo Analítico dos Principais Países'}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.gridTwoColumnInfoBtn} ${styles.ctaBtn}`}>
                        <a href="#packageSection">
                            Preços e Soluções
                        </a>
                        <p>
                            <span><RiArrowDropRightFill />Aproveite nossa promoção de 50% OFF</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionBonus;