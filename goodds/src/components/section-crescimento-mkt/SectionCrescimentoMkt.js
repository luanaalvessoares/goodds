import React from "react";
import styles from './SectionCrescimentoMkt.module.css';
import CrescimentoImage from '../../assets/images/crescimentomkt.webp'

function SectionCrescimentoMkt() {
    return (
        <section className={styles.crescimentoMktContainer}>
            <div className={styles.containerTwoColumnsDefault}>
                <div className={styles.containerChildTwoColumnsDefault}>
                    <div className={styles.crescimentoMktContent}>
                        <h2 className={styles.crescimentoMktTitle}>Faça suas vendas crescerem com Google Adwords</h2>
                        <p>Exiba seus anúncios para os clientes quando eles procurarem empresas como a sua na Pesquisa Google e no Maps. Converta resultados como cliques para acessar seu site ou chamadas feitas para sua empresa.</p>
                    </div>
                </div>

                <div className={styles.containerChildTwoColumnsDefault}>
                    <img src={CrescimentoImage} className={`${styles.imageTwoColumnsDefault} ${styles.crescimentoMktImage}`} alt="" />
                </div>
            </div>
        </section>
    )
}

export default SectionCrescimentoMkt;