import React from "react";
import styles from './SectionVendasMkt.module.css'
import Image from '../../assets/images/vendamkt.webp'

function SectionVendasMkt() {
    return (
        <section className={styles.vendasMktContainer}>
            <div className={styles.containerTwoColumnsDefault}>
                <div className={styles.containerChildTwoColumnsDefault}>
                    <img src={Image} className={`${styles.imageTwoColumnsDefault} ${styles.vendasMktImage}`} alt="" />
                </div>

                <div className={styles.containerChildTwoColumnsDefault}>
                    <div className={styles.vendasMktContent}>
                        <h2 className={styles.vendasMktTitle}>Anúncios Patrocinados que Funcionam</h2>
                        <p>Possuímos um método validado por milhares de clientes para sua Loja Virtual performar ao máximo no Instagram e no Facebook..</p>
                        <div className={styles.vendasMktDescription}>
                            <div className={styles.vendasMktGrid}>
                                <div className={styles.vendasMktGridItem}>
                                    <h3>Anúncios de Foto</h3>
                                    <p>Dois bilhões de pessoas no mundo inteiro usam o Instagram mensalmente.</p>
                                </div>
                                
                                <div className={styles.vendasMktGridItem}>
                                    <h3>Anúncios de Vídeo</h3>
                                    <p>Propagandas em movimento convertem e impactam muito mais.</p>
                                </div>
                                
                                <div className={styles.vendasMktGridItem}>
                                    <h3>Anúncios em Carrossel</h3>
                                    <p>Os clientes podem deslizar para ver mais fotos ou vídeos em um único anúncio.</p>
                                </div>
                                
                                <div className={styles.vendasMktGridItem}>
                                    <h3>Anúncios com Stories</h3>
                                    <p>Complemente o conteúdo do seu feed com anúncios no Instagram Stories.</p>
                                </div>
                                
                                <div className={styles.vendasMktGridItem}>
                                    <h3>Engajamento</h3>
                                    <p>Campanhas para aumentar seus seguidores e posicionar sua marca nas redes sociais.</p>
                                </div>
                                
                                <div className={styles.vendasMktGridItem}>
                                    <h3>Conversões</h3>
                                    <p>Aumente as vendas dos seus produtos com campanhas patrocinadas.</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionVendasMkt;