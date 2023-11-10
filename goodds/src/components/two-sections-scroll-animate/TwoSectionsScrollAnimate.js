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
                            <h4 className={styles.name}>Título do Card</h4>
                            <p className={styles.descr}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                            <h4 className={styles.name}>Título do Card</h4>
                            <p className={styles.escr}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                            <h4 className={styles.name}>Título do Card</h4>
                            <p className={styles.descr}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                            <h4 className={styles.name}>Título do Card</h4>
                            <p className={styles.descr}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </motion.div>

                </div>
            </div>

        </section>
    )
}

export default TwoSectionsScrollAnimate;
