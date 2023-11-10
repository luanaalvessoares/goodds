import React from "react";
import styles from './TopTitleImageSection.module.css';
import { motion } from "framer-motion";
import { useInView, InView } from "react-intersection-observer";

function TopTitleImageSection(props) {
    const { ref: ref, inView: inView } = useInView({
        triggerOnce: true,
    });

    return (
        <div className={styles.topTitleImage}>
            <div className={styles.topTitleSub}>
                <h1>{props.title}</h1>
                <p>{props.subtitle}</p>
            </div>

            <div className={styles.topImages}>
                <motion.div
                    className={styles.mainTopImage}
                    initial={{ opacity: 0, scale: 0.5 }}
                    ref={ref}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{
                      duration: 0.3,
                      ease: [0, 0.71, 0.2, 1.01],
                      scale: {
                        type: "spring",
                        damping: 8,
                        stiffness: 100,
                        restDelta: 0.001
                      }
                    }}
                >
                    <img src={props.backgroundUrl} alt="" />
                </motion.div>

                <motion.div 
                    className={`${styles.imageChildren1} ${styles.topImageChildren}`}
                    initial={{ x: '100vw' }}
                    animate={inView ? { x: 0 } : { x: '100vw' }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                >
                    <img src={props.imageChildren1} alt="" />
                </motion.div>

                <motion.div 
                    className={`${styles.imageChildren2} ${styles.topImageChildren}`}
                    initial={{ x: '-100vw' }}
                    animate={inView ? { x: 0 } : { x: '-100vw' }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
                >
                    <img src={props.imageChildren2} alt="" />
                </motion.div>

                <motion.div 
                    className={`${styles.imageChildren3} ${styles.topImageChildren}`}
                    initial={{ x: '100vw' }}
                    animate={inView ? { x: 0 } : { x: '100vw' }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                >
                    <img src={props.imageChildren3} alt="" />
                </motion.div>
            </div>
        </div>
    )
}

export default TopTitleImageSection;