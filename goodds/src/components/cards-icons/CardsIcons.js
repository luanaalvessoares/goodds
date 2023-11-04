import React from "react";
import styles from './CardsIcons.module.css';
import { motion } from "framer-motion";
import { useInView, InView } from "react-intersection-observer";

function CardsIcons(props) {
    const { ref: ref, inView: inView } = useInView({
        triggerOnce: true,
      });
    
      const animations = {
        hidden: {
          opacity: 0
        },
        view: {
          opacity: 1,
        }
      };
    
      const slideFromLeft = {
        hidden: {
          x: -200,
        },
        view: {
          x: 0,
          transition: {
            type: "spring",
            stiffness: 50
          }
        }
      };

    const {
        title,
        icon1,
        cardTitle1,
        cardDescription1,
        icon2,
        cardTitle2,
        cardDescription2,
        icon3,
        cardTitle3,
        cardDescription3,
        icon4,
        cardTitle4,
        cardDescription4,
    } = props.cardsIconsData;

    return (
        <section className={styles.cardsIconsContainer}>
            <h2>{title}</h2>
            <div className={styles.cardsIconsGrid}>

            <motion.div
                ref={ref}
                className="flex flex-col"
                initial="hidden"
                animate={inView ? "view" : "hidden"}
                variants={animations}
                transition={{ staggerChildren: 0.5, delay: 0.6 }}
            >
                <motion.div
                    variants={slideFromLeft}
                    style={{ margin: "20px" }}
                    transition={{ delay: 1 }}
                >
                <div className={styles.cardsIconsGridItem}>
                    <img src={icon1} alt="" />
                    <h3>{cardTitle1}</h3>
                    <p>{cardDescription1}</p>
                </div>
                </motion.div>
            </motion.div>


            <motion.div
                ref={ref}
                className="flex flex-col"
                initial="hidden"
                animate={inView ? "view" : "hidden"}
                variants={animations}
                transition={{ staggerChildren: 0.6, delay: 0.9 }}
            >
                <motion.div
                    variants={slideFromLeft}
                    style={{ margin: "20px" }}
                >
                <div className={styles.cardsIconsGridItem}>
                    <img src={icon2} alt="" />
                    <h3>{cardTitle2}</h3>
                    <p>{cardDescription2}</p>
                </div>
                </motion.div>
            </motion.div>


            <motion.div
                ref={ref}
                className="flex flex-col"
                initial="hidden"
                animate={inView ? "view" : "hidden"}
                variants={animations}
                transition={{ staggerChildren: 0.7, delay: 1.2 }}
            >
                <motion.div
                    variants={slideFromLeft}
                    style={{ margin: "20px" }}
                >
                <div className={styles.cardsIconsGridItem}>
                    <img src={icon3} alt="" />
                    <h3>{cardTitle3}</h3>
                    <p>{cardDescription3}</p>
                </div>
                </motion.div>
            </motion.div>


            <motion.div
                ref={ref}
                className="flex flex-col"
                initial="hidden"
                animate={inView ? "view" : "hidden"}
                variants={animations}
                delay={0.8}
                transition={{ staggerChildren: 0.8, delay: 1.5 }}
            >
                <motion.div
                    variants={slideFromLeft}
                    style={{ margin: "20px" }}
                >
                <div className={styles.cardsIconsGridItem}>
                    <img src={icon4} alt="" />
                    <h3>{cardTitle4}</h3>
                    <p>{cardDescription4}</p>
                </div>
                </motion.div>
            </motion.div>


            </div>
        </section>
    )
}

export default CardsIcons;