import React from "react";
import styles from '../../pages/venda-todos-os-dias/VendaTodosOsDias.module.css';
import stylesMain from './IncludedGrid4.module.css';
import RiKey2Fill from 'remixicon-react/Key2FillIcon';
import RiToolsFill from 'remixicon-react/ToolsFillIcon';
import RiLightbulbFill from 'remixicon-react/LightbulbFillIcon';
import RiMedal2Fill from 'remixicon-react/Medal2FillIcon';
import RiArrowDropRightFill from 'remixicon-react/ArrowDropRightFillIcon';

function IncludedGrid4() {
    return (
        <section className={`${styles.containerChild} ${stylesMain.sectionMain}`}>
        <div className={`${styles.child5} ${styles.child}`}>
            <div>
                <div>
                    <h2>
                        <span className={styles.destaqueText}>Ao contratar agora, </span>
                        você terá:
                    </h2>
                </div>

                <div className={styles.gridCardsInfos}>
                    <div className={styles.gridCardInfoChild}>
                        <p>
                            <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiKey2Fill /></span>
                        </p>
                        <p>
                            <span className={styles.destaqueText}><h6>01 Loja de Dropshipping: </h6></span>
                            vamos criar e entregar sua Loja Virtual personalizada conforme as suas preferências para você vender todos os dias na internet.
                        </p>
                    </div>
                    <div className={styles.gridCardInfoChild}>
                        <p>
                            <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiToolsFill /></span>
                        </p>
                        <p>
                            <span className={styles.destaqueText}><h6>Equipe de Marketing Dedicada: </h6></span>
                            disponibilizaremos no Pacote Mega um gestor de tráfego dedicado para atender sua conta e garantir que você venda nos primeiros dias.
                        </p>
                    </div>
                    <div className={styles.gridCardInfoChild}>
                        <p>
                            <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiMedal2Fill /></span>
                        </p>
                        <p>
                            <span className={styles.destaqueText}><h6>Produtos Minerados e Cadastrados: </h6></span>
                            faremos a seleção de cada produto e após sua aprovação cadastraremos com descrições de alta conversão.
                        </p>
                    </div>
                    <div className={styles.gridCardInfoChild}>
                        <p>
                            <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiLightbulbFill /></span>
                        </p>
                        <p>
                            <span className={styles.destaqueText}><h6>Suporte Exclusivo 24h: </h6></span>
                            forneceremos acompanhamento e suporte dedicado direto pela nossa plataforma exclusiva de atendimento ao cliente.
                        </p>
                    </div>
                </div>

                <div className={stylesMain.ctaText}>
                    <h3>Você está a um clique de ter uma loja completa desenvolvida pela primeira agência especializada em Dropshipping do Brasil. Contrate agora e conquiste a sua liberdade financeira.</h3>
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

export default IncludedGrid4;