import React from "react";
import styles from './FullHome.module.css';
import TitleFirst from "../../section-title-first/TitleFirst";
import IconFull1 from '../../../assets/images/icon-full1.webp';
import IconFull2 from '../../../assets/images/icon-full2.webp';
import IconFull3 from '../../../assets/images/icon-full3.webp';
import HomeVantagensImage from '../../../assets/images/homeastronaut.webp'

function FullHome(props) {
    return (
        <section className={styles.fullHomeContainer}>
            <TitleFirst title={props.title} subtitle={props.subtitle} description={props.description} />

            <div className={styles.fullHomeContainerTwoColumns}>
                <div className={styles.fullHomeContainerChildTwoColumns}>
                    <img src={HomeVantagensImage} className={`${styles.fullHomeImageTwoColumns} ${styles.fullHomeImage}`} alt="" />
                </div>

                <div className={styles.fullHomeContainerChildTwoColumns}>
                    <div className={styles.fullHomeContent}>
                        <h2 className={styles.fullHomeTitle}>Vantagens das nossas Soluções</h2>
                        <div className={styles.fullHomeGrid}>
                            <img src={IconFull1} alt="" />
                            <div className={styles.fullHomeGridInfo}>
                                <h3>Entregamos a loja pronta</h3>
                                <p>Desenvolvemos seu e-commerce, fazemos todas as integrações e configurações para você apenas vender.</p>
                            </div>
                        </div>
                        <div className={styles.fullHomeGrid}>
                            <img src={IconFull2} alt="" />
                            <div className={styles.fullHomeGridInfo}>
                                <h3>Integração com Marketplace</h3>
                                <p>Através da integração com os melhores ERPs do mercado, sua loja fica conectada com os maiores marketplaces do Brasil.</p>
                            </div>
                        </div>
                        <div className={styles.fullHomeGrid}>
                            <img src={IconFull3} alt="" />
                            <div className={styles.fullHomeGridInfo}>
                                <h3>Suporte com especialistas</h3>
                                <p>Nossa equipe especializada te auxilia em todas as etapas do seu projeto via WhatsApp.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FullHome;