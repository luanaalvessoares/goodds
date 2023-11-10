import React from "react";
import styles from './FullHome.module.css';
import TitleFirst from "../../section-title-first/TitleFirst";
import IconFull1 from '../../../assets/images/icon-full1.webp';
import IconFull2 from '../../../assets/images/icon-full2.webp';
import IconFull3 from '../../../assets/images/icon-full3.webp';
import IconFull4 from '../../../assets/images/icon-full4.webp';
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
                        <div className={styles.fullHomeGrid}>
                            <img src={IconFull1} alt="" />
                            <div className={styles.fullHomeGridInfo}>
                                <h3>Desenvolvimento de loja virtual</h3>
                                <p>Desenvolvemos seu e-commerce, fazemos todas as integrações e configurações para você apenas vender.</p>
                            </div>
                        </div>
                        <div className={styles.fullHomeGrid}>
                            <img src={IconFull2} alt="" />
                            <div className={styles.fullHomeGridInfo}>
                                <h3>Espeialistas em marketplace</h3>
                                <p>Através da integração com os melhores ERPs, sua loja fica conectada com os maiores marketplaces do Brasil.</p>
                            </div>
                        </div>
                        <div className={styles.fullHomeGrid}>
                            <img src={IconFull3} alt="" />
                            <div className={styles.fullHomeGridInfo}>
                                <h3>Suporte humanizado</h3>
                                <p>Nossa equipe especializada te auxilia em todas as etapas do seu projeto via WhatsApp.</p>
                            </div>
                        </div>
                        <div className={styles.fullHomeGrid}>
                            <img src={IconFull4} alt="" />
                            <div className={styles.fullHomeGridInfo}>
                                <h3>Marketing para e-commerce</h3>
                                <p>Criamos campanhas patrocinadas para vender o máximo, com o mínimo de investimento possível.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FullHome;