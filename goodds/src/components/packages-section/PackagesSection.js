import React, { useEffect, useState } from 'react';
import styles from './PackagesSection.module.css';
import CheckboxCircleLineIcon from 'remixicon-react/CheckboxCircleLineIcon';
import CloseCircleLineIcon from 'remixicon-react/CloseCircleLineIcon';
import { motion } from "framer-motion";
import { useInView, InView } from "react-intersection-observer";


const PackagesSection = (props) => {
    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: true,
      });
    
      const { ref: ref2, inView: inView2 } = useInView({
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
          x: "-100vw",
        },
        view: {
          x: 0,
          transition: {
            type: "spring",
            stiffness: 40
          }
        }
      };
    
      const slideFromRight = {
        hidden: {
          x: '100vw',
        },
        view: {
          x: 0,
          transition: {
            type: "spring",
            stiffness: 40
          }
        }
      };

    const {
        packageTitle1,
        packageDescription1,
        packagePrice1,
        packageNews1,
        packageParcel1,
        packageName1,
        included1Package1,
        included2Package1,
        included3Package1,
        included4Package1,
        included5Package1,
        included6Package1,
        included7Package1,
        included8Package1,
        included9Package1,
        included10Package1,
        packageLink1
    } = props.packageData1;

    const {
        packageTitle2,
        packageDescription2,
        packagePrice2,
        packageNews2,
        packageParcel2,
        packageName2,
        included1Package2,
        included2Package2,
        included3Package2,
        included4Package2,
        included5Package2,
        included6Package2,
        included7Package2,
        included8Package2,
        included9Package2,
        included10Package2,
        packageLink2
    } = props.packageData2;

    return (
        <section className={styles.packageSection}>
            <h1 className={styles.packageContainerTitle}>{props.sectionPackageTitle}</h1>


            <div className={styles.packageContainer} id="packages-section">

            <motion.div
                initial={{
                    hidden: '-100vw'
                }}
                transition={{ staggerChildren: 0.5 }}
            >
                <motion.div
                    style={{ margin: "20px" }}
                    whileInView={{
                        x: 0,
                        transition: {
                        type: "spring",
                        stiffness: 40
                        }
                    }}
                >
                    <div className={styles.packageItem}>
                        <div className={styles.packageCard}>
                            <h2 className={styles.packageTitle}>{packageTitle1}</h2>
                            <p className={styles.packageDescription}>{packageDescription1}</p>
                            <h3 className={styles.packagePrice}><span>De: </span><span className={styles.typeCoin}>R$</span><span>{packagePrice1}</span></h3>
                            <div className={styles.packageNewsContainer}>
                                <h3 className={styles.packageNews}><span>Por: </span><span className={styles.typeCoin}>R$</span><span className={styles.newPricePackage}>{packageNews1}</span> <span>à vista</span></h3>
                                <p>ou 12x de <span>R$</span><span>{packageParcel1}</span></p>
                            </div>
                            <p className={styles.includedTitle}>Está incluso no {packageName1}</p>
                            <div className={styles.includedPackage}>
                                <p><span><CheckboxCircleLineIcon className={styles.checkIcon}/></span> {included1Package1}</p>
                                <p><span><CheckboxCircleLineIcon className={styles.checkIcon}/></span> {included2Package1}</p>
                                
                                {included3Package1 ? (
                                    <p><span><CheckboxCircleLineIcon className={styles.checkIcon}/></span> {included3Package1}</p>
                                ) : null}

                                {included4Package1 ? (
                                    <p><span><CheckboxCircleLineIcon className={styles.checkIcon}/></span> {included4Package1}</p>
                                ) : null}

                                {included5Package1 ? (
                                    <p><span><CheckboxCircleLineIcon className={styles.checkIcon}/></span> {included5Package1}</p>
                                ) : null}

                                {included6Package1 ? (
                                    <p><span><CheckboxCircleLineIcon className={styles.checkIcon}/></span> {included6Package1}</p>
                                ) : null}

                                {included7Package1 ? (
                                    <p><span><CheckboxCircleLineIcon className={styles.checkIcon}/></span> {included7Package1}</p>
                                ) : null}

                                {included8Package1 ? (
                                    <p><span><CheckboxCircleLineIcon className={styles.checkIcon}/></span> {included8Package1}</p>
                                ) : null}

                                {included9Package1 ? (
                                    <p className={styles.iconClose}><span><CloseCircleLineIcon className={styles.checkIcon}/></span> {included9Package1}</p>
                                ) : null}

                                {included10Package1 ? (
                                    <p className={styles.iconClose}><span><CloseCircleLineIcon className={styles.checkIcon}/></span> {included10Package1}</p>
                                ) : null}
                            </div>
                            <a href={packageLink1} className={styles.packageBuy}>
                                <span>Comprar</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>


            <motion.div
                initial={{
                    hidden: '-100vw'
                }}
                transition={{ staggerChildren: 0.5 }}
            >
                <motion.div
                    style={{ margin: "20px" }}
                    whileInView={{
                        x: 0,
                        transition: {
                        type: "spring",
                        stiffness: 40
                        }
                    }}
                >
                    <div className={styles.packageItem}>
                        <div className={styles.packageCard}>
                            <span className={styles.bestSellerTag}>Mais Vendido</span>
                            <h2 className={styles.packageTitle}>{packageTitle2}</h2>
                            <p className={styles.packageDescription}>{packageDescription2}</p>
                            <h3 className={styles.packagePrice}><span>De: </span><span className={styles.typeCoin}>R$</span><span>{packagePrice2}</span></h3>
                            <div className={styles.packageNewsContainer}>
                                <h3 className={styles.packageNews}><span>Por: </span><span className={styles.typeCoin}>R$</span><span className={styles.newPricePackage}>{packageNews2}</span> <span>à vista</span></h3>
                                <p>Ou 12x de <span>R$</span><span>{packageParcel2}</span></p>
                            </div>
                            <p className={styles.includedTitle}>Está incluso no {packageName2}</p>
                            <div className={styles.includedPackage}>
                                <p><span><CheckboxCircleLineIcon className={styles.checkIcon}/></span> {included1Package2}</p>
                                <p><span><CheckboxCircleLineIcon className={styles.checkIcon}/></span> {included2Package2}</p>

                                {included3Package2 ? (
                                    <p><span><CheckboxCircleLineIcon className={styles.checkIcon}/></span> {included3Package2}</p>
                                ) : null}

                                {included4Package2 ? (
                                    <p><span><CheckboxCircleLineIcon className={styles.checkIcon}/></span> {included4Package2}</p>
                                ) : null}

                                {included5Package2 ? (
                                    <p><span><CheckboxCircleLineIcon className={styles.checkIcon}/></span> {included5Package2}</p>
                                ) : null}

                                {included6Package2 ? (
                                    <p><span><CheckboxCircleLineIcon className={styles.checkIcon}/></span> {included6Package2}</p>
                                ) : null}

                                {included7Package2 ? (
                                    <p><span><CheckboxCircleLineIcon className={styles.checkIcon}/></span> {included7Package2}</p>
                                ) : null}

                                {included8Package2 ? (
                                    <p><span><CheckboxCircleLineIcon className={styles.checkIcon}/></span> {included8Package2}</p>
                                ) : null}

                                {included9Package2 ? (
                                    <p className={styles.iconClose2}><span><CheckboxCircleLineIcon className={styles.checkIcon}/></span> {included9Package2}</p>
                                ) : null}

                                {included10Package2 ? (
                                    <p className={styles.iconClose2}><span><CheckboxCircleLineIcon className={styles.checkIcon}/></span> {included10Package2}</p>
                                ) : null}

                            </div>
                            <a href={packageLink2} className={styles.packageBuy}>
                                <span>Comprar</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            </div>

        </section>
    );
};

export default PackagesSection;
