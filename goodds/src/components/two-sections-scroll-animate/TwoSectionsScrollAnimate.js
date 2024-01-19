import React, { useState, useEffect } from "react";
import styles from './TwoSectionsScrollAnimate.module.css';
import { motion } from "framer-motion";
import { useInView, InView } from "react-intersection-observer";

function TwoSectionsScrollAnimate() {
    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: true,
    });

    const { ref: ref2, inView: inView2 } = useInView({
        triggerOnce: true,
    });

    const { ref: ref3, inView: inView3 } = useInView({
        triggerOnce: true,
    });

    const { ref: ref4, inView: inView4 } = useInView({
        triggerOnce: true,
    });

    return (
        <section className={styles.containerTwoColumnsDefault}>

            <div className={styles.containerChildTwoColumnsDefault}>
                <div className={styles.stickyTitle}>
                    <h2>Garantias de todos os nossos pacotes de Dropshipping</h2>
                </div>
            </div>

            <div className={styles.containerChildTwoColumnsDefault}>
                <div className={styles.wrapper}>

                    <motion.div
                        className={`${styles.item} ${styles.headshotChild}`}
                        initial={{ opacity: 0, scale: 0.5 }}
                        ref={ref1}
                        animate={inView1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                        transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                        }}
                    >
                        <div className={styles.inner}>
                            <h4 className={styles.name}>Loja de Dropshipping</h4>
                            <p className={styles.descr}>Desenvolvemos a loja virtual completa para você vender, com Logo, Banners e Integrações de fornecedores de produtos nacionais e internacionais.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.item} ${styles.headshotChild}`}
                        initial={{ opacity: 0, scale: 0.5 }}
                        ref={ref2}
                        animate={inView2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                        transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                        }}
                    >
                        <div className={styles.inner}>
                            <h4 className={styles.name}>Mineração de Produtos</h4>
                            <p className={styles.escr}>Nossos especialistas selecionam e cadastram os produtos na sua loja. Todos os produtos são testados e escolhidos para o seu nicho, só atuamos com fornecedores validados.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.item} ${styles.headshotChild}`}
                        initial={{ opacity: 0, scale: 0.5 }}
                        ref={ref3}
                        animate={inView3 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                        transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                        }}
                    >
                        <div className={styles.inner}>
                            <h4 className={styles.name}>03 Campanhas de Marketing</h4>
                            <p className={styles.descr}>Criamos os criativos e configuramos as campanhas com 3 produtos diferentes, você também tem uma assessoria dedicada com um especialista em marketing.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.item} ${styles.headshotChild}`}
                        initial={{ opacity: 0, scale: 0.5 }}
                        ref={ref4}
                        animate={inView4 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                        transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                        }}
                    >
                        <div className={styles.inner}>
                            <h4 className={styles.name}>Suporte 24hs com Especialistas</h4>
                            <p className={styles.descr}>Disponibilizamos suporte dedicado trilíngue e especialistas pelo WhatsApp e telefone, também possuímos centenas de vídeos tutoriais para auxiliar você no dia-a-dia</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.item} ${styles.headshotChild}`}
                        initial={{ opacity: 0, scale: 0.5 }}
                        ref={ref4}
                        animate={inView4 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                        transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                        }}
                    >
                        <div className={styles.inner}>
                            <h4 className={styles.name}>Curso e Mentoria com Centenas de Vídeos</h4>
                            <p className={styles.descr}>Aulas semanais, módulos recorrentes e uma comunidade com interação diária para que a sua jornada conosco seja junto a pessoas incríveis com conhecimentos reais.</p>
                        </div>
                    </motion.div>

                </div>
            </div>

        </section>
    )
}

export default TwoSectionsScrollAnimate;
