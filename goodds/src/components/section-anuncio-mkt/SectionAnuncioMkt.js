import React from "react";
import styles from './SectionAnuncioMkt.module.css';
import AnuncioImage from '../../assets/images/anunciomkt.webp';
import GifReasons from  '../../assets/images/reasonsmkt.gif'

function SectionAnuncioMkt() {
    return (
        <section className={styles.anuncioMktContainer}>
            <div className={styles.containerTwoColumnsDefault}>
                <div className={styles.containerChildTwoColumnsDefault}>
                    <img src={AnuncioImage} className={`${styles.imageTwoColumnsDefault} ${styles.anuncioMktImage}`} alt="" />
                </div>

                <div className={styles.containerChildTwoColumnsDefault}>
                    <div className={styles.anuncioMktContent}>
                        <img className={styles.anuncioMktGif} src={GifReasons} alt="" />
                        <div className={styles.anuncioMktTitleDesc}>
                            <h2 className={styles.anuncioMktTitle}>Venda muito no Instagram</h2>
                            <p>Transforme seu Instagram em uma máquina de vendas! Oferecemos estratégias personalizadas que vão alavancar seu perfil, garantindo mais visibilidade, engajamento e, claro, vendas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>        
    )

}

export default SectionAnuncioMkt;