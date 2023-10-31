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
                        <h2 className={styles.vendasMktTitle}>Venda muito no Instagram</h2>
                        <p>Sua loja integrada no Instagram com anúncios de alta conversão para o público certo.</p>
                        <div className={styles.vendasMktDescription}>
                            <div className={styles.vendasMktGrid}>
                                <div className={styles.vendasMktGridItem}>
                                    <h3>Anúncios de Foto</h3>
                                    <p>Dois bilhões de pessoas no mundo inteiro usam o Instagram mensalmente.</p>
                                </div>
                                
                                <div className={styles.vendasMktGridItem}>
                                    <h3>Anúncios de Vídeo</h3>
                                    <p>Conte sua história em uma tela criativa, bela e simples. As fotos podem estar no formato retrato ou paisagem.</p>
                                </div>
                                
                                <div className={styles.vendasMktGridItem}>
                                    <h3>Anúncios em Carrossel</h3>
                                    <p>Obtenha mais uma camada de profundidade nas campanhas, onde as pessoas podem deslizar para ver mais fotos ou vídeos em um único anúncio.</p>
                                </div>
                                
                                <div className={styles.vendasMktGridItem}>
                                    <h3>Anúncios com Stories</h3>
                                    <p>Complemente o conteúdo do seu feed com anúncios no Instagram Stories. Conecte-se com as mais de 300 milhões de contas que estão usando as histórias diariamente.</p>
                                </div>
                                
                                <div className={styles.vendasMktGridItem}>
                                    <h3>Reconhecimento</h3>
                                    <p>As ferramentas de relatório de anúncios mostram como seus anúncios foram exibidos e quanto foi seu alcance.</p>
                                </div>
                                
                                <div className={styles.vendasMktGridItem}>
                                    <h3>Conversões</h3>
                                    <p>Aumente as vendas dos seus produtos com campanhas patrocinadas que convertem e engajam.</p>
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