import React from "react";
import styles from '../../pages/venda-todos-os-dias/VendaTodosOsDias.module.css';
import stylesMain from './SectionBonus.module.css';
import RiCheckDoubleFill from 'remixicon-react/CheckDoubleFillIcon';
import RiArrowDropRightFill from 'remixicon-react/ArrowDropRightFillIcon';
import ImageParceiroPrintful from '../../assets/images/parceiro-printful.svg';

function SectionBonus() {
    return (
        <section className={`${styles.containerChild} ${styles.sectionBg} ${stylesMain.sectionMain}`}>
        <div className={`${styles.child8} ${styles.child}`}>
            <div>
                <div className={styles.child8Title}>
                    <h2>Todos os Bônus que você recebe ao adquirir nosso pacote:</h2>
                </div>

                <div className={styles.gridCardsInfos}>
                    <div className={`${styles.gridCardInfoChild} ${stylesMain.imagePrintfulBonus}`}>
                        <img src={ImageParceiroPrintful} alt="" />
                    </div>

                    <div className={styles.gridCardInfoChild}>
                        <h2>Integração da Printful para venda de produtos personalizados sob demanda sem estoque</h2>

                        <p>A Printful é a maior empresa de Print-on-Demand do mundo. Ela disponibiliza mais de 340 produtos para serem personalizados com a sua marca.</p>
                    </div>
                </div>

                <div className={styles.gridCardsMiniInfos}>
                    <div className={styles.gridCardMiniInfoChild}>
                        <div>
                            <span><RiCheckDoubleFill /></span>
                        </div>
                        <div>
                            <p>Tema Extra de Alta Conversão</p>
                        </div>
                    </div>
                    <div className={styles.gridCardMiniInfoChild}>
                        <div>
                            <span><RiCheckDoubleFill /></span>
                        </div>
                        <div>
                            <p>Curso de Técnicas e Estratégias de Vendas</p>
                        </div>
                    </div>
                    <div className={styles.gridCardMiniInfoChild}>
                        <div>
                            <span><RiCheckDoubleFill /></span>
                        </div>
                        <div>
                            <p>Acesso a Fornecedores Nacionais Exclusivos</p>
                        </div>
                    </div>
                    <div className={styles.gridCardMiniInfoChild}>
                        <div>
                            <span><RiCheckDoubleFill /></span>
                        </div>
                        <div>
                            <p>Consultoria de Contabilidade</p>
                        </div>
                    </div>
                    <div className={styles.gridCardMiniInfoChild}>
                        <div>
                            <span><RiCheckDoubleFill /></span>
                        </div>
                        <div>
                            <p>Condições Especiais em Apps e Plataformas</p>
                        </div>
                    </div>
                    <div className={styles.gridCardMiniInfoChild}>
                        <div>
                            <span><RiCheckDoubleFill /></span>
                        </div>
                        <div>
                            <p>Receba um Funil de Vendas Validado</p>
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
                            <span><RiCheckDoubleFill /></span>
                        </div>
                        <div>
                            <p>Metodologia para Mineração Global</p>
                        </div>
                    </div>
                    <div className={styles.gridCardMiniInfoChild}>
                        <div>
                            <span><RiCheckDoubleFill /></span>
                        </div>
                        <div>
                            <p>Estudo Analítico dos Principais Países</p>
                        </div>
                    </div>
                </div>

                <div className={`${styles.gridTwoColumnInfoBtn} ${styles.ctaBtn}`}>
                    <a href="!#">
                        Pacote Completo
                        <span>
                            <h3> 12x </h3>
                        </span>
                        <span>
                            <h3>R$497</h3>
                        </span>
                    </a>
                    <p>
                        <span><RiArrowDropRightFill /> ou à vista com desconto <span className={styles.priceBold}>R$4.997</span></span>
                    </p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default SectionBonus;