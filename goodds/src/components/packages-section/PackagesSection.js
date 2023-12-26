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
        included11Package1,
        included12Package1,
        included13Package1,
        included14Package1,
        included15Package1,
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
        included11Package2,
        included12Package2,
        included13Package2,
        included14Package2,
        included15Package2,
        packageLink2
    } = props.packageData2;

    const {
        packageTitle3,
        packageDescription3,
        packagePrice3,
        packageNews3,
        packageParcel3,
        packageName3,
        included1Package3,
        included2Package3,
        included3Package3,
        included4Package3,
        included5Package3,
        included6Package3,
        included7Package3,
        included8Package3,
        included9Package3,
        included10Package3,
        included11Package3,
        included12Package3,
        included13Package3,
        included14Package3,
        included15Package3,
        packageLink3
    } = props.packageData3;

    return (
        <section className={styles.packageSection} id="packageSection">
            <h1 className={styles.packageContainerTitle}>{props.sectionPackageTitle}</h1>


            <div className={`${styles.packageContainer} ${props.terceiroPacote ? `${styles.gridTresPacotes}` : ''}`} id="packages-section">

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
                            <p className={styles.includedTitle}>Está incluso{packageName1}:</p>
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
                                    <p><span><CheckboxCircleLineIcon className={styles.checkIcon}/></span> {included9Package1}</p>
                                ) : null}

                                {included10Package1 ? (
                                    <p><span><CheckboxCircleLineIcon className={styles.checkIcon}/></span> {included10Package1}</p>
                                ) : null}

                                {included11Package1 ? (
                                    <p className={styles.iconClose}><span><CloseCircleLineIcon className={styles.checkIcon}/></span> {included11Package1}</p>
                                ) : null}

                                {included12Package1 ? (
                                    <p className={styles.iconClose}><span><CloseCircleLineIcon className={styles.checkIcon}/></span> {included12Package1}</p>
                                ) : null}

                                {included13Package1 ? (
                                    <p className={styles.iconClose}><span><CloseCircleLineIcon className={styles.checkIcon}/></span> {included13Package1}</p>
                                ) : null}

                                {included14Package1 ? (
                                    <p className={styles.iconClose}><span><CloseCircleLineIcon className={styles.checkIcon}/></span> {included14Package1}</p>
                                ) : null}

                                {included15Package1 ? (
                                    <p className={styles.iconClose}><span><CloseCircleLineIcon className={styles.checkIcon}/></span> {included15Package1}</p>
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
                            <h2 className={styles.packageTitle}>{packageTitle2}</h2>
                            <p className={styles.packageDescription}>{packageDescription2}</p>
                            <h3 className={styles.packagePrice}><span>De: </span><span className={styles.typeCoin}>R$</span><span>{packagePrice2}</span></h3>
                            <div className={styles.packageNewsContainer}>
                                <h3 className={styles.packageNews}><span>Por: </span><span className={styles.typeCoin}>R$</span><span className={styles.newPricePackage}>{packageNews2}</span> <span>à vista</span></h3>
                                <p>Ou 12x de <span>R$</span><span>{packageParcel2}</span></p>
                            </div>
                            <p className={styles.includedTitle}>Está incluso{packageName2}:</p>
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
                                    <p><span><CheckboxCircleLineIcon className={styles.checkIcon}/></span> {included9Package2}</p>
                                ) : null}

                                {included10Package2 ? (
                                    <p><span><CheckboxCircleLineIcon className={styles.checkIcon}/></span> {included10Package2}</p>
                                ) : null}

                                {included11Package2 ? (
                                    <p className={styles.iconClose}><span><CloseCircleLineIcon className={styles.checkIcon}/></span> {included11Package2}</p>
                                ) : null}

                                {included12Package2 ? (
                                    <p className={styles.iconClose}><span><CloseCircleLineIcon className={styles.checkIcon}/></span> {included12Package2}</p>
                                ) : null}

                                {included13Package2 ? (
                                    <p className={styles.iconClose}><span><CloseCircleLineIcon className={styles.checkIcon}/></span> {included13Package2}</p>
                                ) : null}

                                {included14Package2 ? (
                                    <p className={styles.iconClose}><span><CloseCircleLineIcon className={styles.checkIcon}/></span> {included14Package2}</p>
                                ) : null}

                                {included15Package2 ? (
                                    <p className={styles.iconClose}><span><CloseCircleLineIcon className={styles.checkIcon}/></span> {included15Package2}</p>
                                ) : null}

                            </div>
                            <a href={packageLink2} className={styles.packageBuy}>
                                <span>Comprar</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>



        {props.terceiroPacote && (
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
                            <h2 className={styles.packageTitle}>{packageTitle3}</h2>
                            <p className={styles.packageDescription}>{packageDescription3}</p>
                            <h3 className={styles.packagePrice}><span>De: </span><span className={styles.typeCoin}>R$</span><span>{packagePrice3}</span></h3>
                            <div className={styles.packageNewsContainer}>
                                <h3 className={styles.packageNews}><span>Por: </span><span className={styles.typeCoin}>R$</span><span className={styles.newPricePackage}>{packageNews3}</span> <span>à vista</span></h3>
                                <p>Ou 12x de <span>R$</span><span>{packageParcel3}</span></p>
                            </div>
                            <p className={styles.includedTitle}>Está incluso{packageName3}:</p>
                            <div className={styles.includedPackage}>
                                <p><span><CheckboxCircleLineIcon className={styles.checkIcon}/></span> {included1Package3}</p>
                                <p><span><CheckboxCircleLineIcon className={styles.checkIcon}/></span> {included2Package3}</p>

                                {included3Package3 ? (
                                    <p><span><CheckboxCircleLineIcon className={styles.checkIcon}/></span> {included3Package3}</p>
                                ) : null}

                                {included4Package3 ? (
                                    <p><span><CheckboxCircleLineIcon className={styles.checkIcon}/></span> {included4Package3}</p>
                                ) : null}

                                {included5Package3 ? (
                                    <p><span><CheckboxCircleLineIcon className={styles.checkIcon}/></span> {included5Package3}</p>
                                ) : null}

                                {included6Package3 ? (
                                    <p><span><CheckboxCircleLineIcon className={styles.checkIcon}/></span> {included6Package3}</p>
                                ) : null}

                                {included7Package3 ? (
                                    <p><span><CheckboxCircleLineIcon className={styles.checkIcon}/></span> {included7Package3}</p>
                                ) : null}

                                {included8Package3 ? (
                                    <p><span><CheckboxCircleLineIcon className={styles.checkIcon}/></span> {included8Package3}</p>
                                ) : null}

                                {included9Package3 ? (
                                    <p><span><CheckboxCircleLineIcon className={styles.checkIcon}/></span> {included9Package3}</p>
                                ) : null}

                                {included10Package3 ? (
                                    <p><span><CheckboxCircleLineIcon className={styles.checkIcon}/></span> {included10Package3}</p>
                                ) : null}

                                {included11Package3 ? (
                                    <p className={styles.iconClose}><span><CloseCircleLineIcon className={styles.checkIcon}/></span> {included11Package3}</p>
                                ) : null}

                                {included12Package3 ? (
                                    <p className={styles.iconClose}><span><CloseCircleLineIcon className={styles.checkIcon}/></span> {included12Package3}</p>
                                ) : null}

                                {included13Package3 ? (
                                    <p className={styles.iconClose}><span><CloseCircleLineIcon className={styles.checkIcon}/></span> {included13Package3}</p>
                                ) : null}

                                {included14Package3 ? (
                                    <p className={styles.iconClose}><span><CloseCircleLineIcon className={styles.checkIcon}/></span> {included14Package3}</p>
                                ) : null}

                                {included15Package3 ? (
                                    <p className={styles.iconClose}><span><CloseCircleLineIcon className={styles.checkIcon}/></span> {included15Package3}</p>
                                ) : null}

                            </div>
                            <a href={packageLink3} className={styles.packageBuy}>
                                <span>Comprar</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        )}
        
            </div>

        </section>
    );
};

export default PackagesSection;
