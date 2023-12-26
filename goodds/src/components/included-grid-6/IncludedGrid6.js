import React from "react";
import styles from '../../pages/venda-todos-os-dias/VendaTodosOsDias.module.css';
import stylesMain from './IncludedGrid6.module.css';
import RiWindow2Fill from 'remixicon-react/Window2FillIcon';
import RiVidiconFill from 'remixicon-react/VidiconFillIcon';
import RiShoppingBasketFill from 'remixicon-react/ShoppingBasketFillIcon';
import RiLayout3Fill from 'remixicon-react/Layout3FillIcon';
import RiFlashlightFill from 'remixicon-react/FlashlightFillIcon';
import RiReplyAllFill from 'remixicon-react/ReplyAllFillIcon';
import RiArrowDropRightFill from 'remixicon-react/ArrowDropRightFillIcon';

function IncludedGrid6(props) {
    const {
        gridTitle4,
        gridSubtitle4,
        ctaText,
    } = props.gridData;

    return (
        <section className={`${styles.containerChild} ${stylesMain.sectionMain}`}>
            <div className={`${styles.child6} ${styles.child}`}>
                <div>
                    <div className={styles.titleSub}>
                        <h2>    
                            E você também terá
                            <span className={styles.destaqueText}> Mentoria com um time de Especialistas</span>
                        </h2>
                        <p>Além de executarmos tudo para você, também te ensinamos a vender todos os dias na internet.</p>
                    </div>

                    <div className={styles.gridCardsInfos}>
                        <div className={`${styles.gridCardInfoChild} ${styles.borderLeft}`}>
                            <p>
                                <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiWindow2Fill /></span>
                            </p>
                            <p>
                                <span className={styles.destaqueText}><h6>Gerencie os pedidos da sua Loja</h6></span>
                                Ensinamos o passo-a-passo para que você possa de maneira simplificada fazer a gestão dos seus pedidos e das suas vendas.
                            </p>
                        </div>
                        <div className={`${styles.gridCardInfoChild} ${styles.borderRight}`}>
                            <p>
                                <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiVidiconFill /></span>
                            </p>
                            <p>
                                <span className={styles.destaqueText}><h6>Seu E-commerce do seu jeito</h6></span>
                                Personalize e altere cores, banners, imagens e os textos da sua loja com tutoriais desenvolvidos por uma equipe de design qualificada.
                            </p>
                        </div>
                        <div className={`${styles.gridCardInfoChild} ${styles.borderLeft}`}>
                            <p>
                                <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiShoppingBasketFill /></span>
                            </p>
                            <p>
                                <span className={styles.destaqueText}><h6>Marketing para Facebook e Instagram</h6></span>
                                Você vai aprender, do zero, tudo que precisa para atrair os melhores clientes para o seu e-commerce através dos anúncios patrocinados.
                            </p>
                        </div>
                        <div className={`${styles.gridCardInfoChild} ${styles.borderRight}`}>
                            <p>
                                <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiLayout3Fill /></span>
                            </p>
                            <p>
                                <span className={styles.destaqueText}><h6>{gridTitle4 ? gridTitle4 : 'Mineração de Produtos e Fornecedores'}</h6></span>
                                {gridSubtitle4 ? gridSubtitle4 : 'Aprenda como selecionar produtos de alta conversão e escolher os fornecedores certos para sua Loja de Dropshipping.'}
                            </p>
                        </div>
                        <div className={`${styles.gridCardInfoChild} ${styles.borderLeft}`}>
                            <p>
                                <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiFlashlightFill /></span>
                            </p>
                            <p>
                                <span className={styles.destaqueText}><h6>Como utilizar IA para vender mais</h6></span>
                                Criamos e disponibilizamos uma metodologia desenvolvida para otimizar toda sua operação utilizando Inteligência Artificial.
                            </p>
                        </div>
                        <div className={`${styles.gridCardInfoChild} ${styles.borderRight}`}>
                            <p>
                                <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiReplyAllFill /></span>
                            </p>
                            <p>
                                <span className={styles.destaqueText}><h6>Como prestar o melhor atendimento</h6></span>
                                Através de uma equipe premiada você irá aprender a fornecer o melhor atendimento e suporte ao seu cliente no seu e-commerce.
                            </p>
                        </div>
                    </div>

                    <div className={stylesMain.ctaText}>
                        <h3>{ctaText ? ctaText : 'Você está a um clique de ter uma loja completa desenvolvida pela primeira agência especializada em Dropshipping do Brasil. Contrate agora e conquiste a sua liberdade financeira.'}</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IncludedGrid6;
