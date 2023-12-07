import React from 'react';
import styles from './MainCta.module.css';
import RiFireFill from 'remixicon-react/FireFillIcon';
import RiArrowDropRightFill from 'remixicon-react/ArrowDropRightFillIcon';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.webp';
import SeparatorGradient from '../../assets/images/separator-gradient.svg';

function MainCta(props) {
    return (
        <div className={styles.containerMainCta}>
            <section className={styles.containerChild}>
                <div className={`${styles.child1} ${styles.child}`}>
                    <div>
                        {props.setTop && 
                            <div className={styles.logo}>
                                <Link to="/">
                                    <img src={logo} alt=""/>
                                </Link>

                                <div className={styles.especialistasBtn}>
                                    <a href="" rel="noreferrer">
                                        Equipe de Vendas
                                    </a>
                                </div>
                            </div>
                        }
                        <div className={styles.gridTwoColumns}>
                            <div className={`${styles.gridTwoColumnInfo} ${styles.gridTwoColumnsChild}`}>
                                <h1 className={styles.gridTwoColumnInfoTitle}>
                                    <span>
                                        {props.titleText}
                                        <span className={`${styles.destaqueText} ${styles.mainCtaDestaque} ${styles.mainCtaDestaque2}`}>{props.destaqueTitleText2}</span>
                                    </span>
                                    <span className={`${styles.destaqueText} ${styles.mainCtaDestaque} ${styles.mainCtaDestaque3}`}>{props.destaqueTitleText1}</span>
                                     
                                </h1>
                                <p className={styles.gridTwoColumnInfoDescription}>{props.description}</p>
                                <p className={`${styles.gridTwoColumnInfoCta} ${styles.destaqueText}`}>
                                    <span><RiFireFill /> </span>
                                    {props.iconInfo}
                                </p>
                                <div className={`${styles.gridTwoColumnInfoBtn} ${styles.ctaBtn}`}>
                                    <a href="!#">
                                        {props.btnText} 
                                        <span>
                                            <h3> {props.btnTextDestaque1} </h3>
                                        </span>
                                        <span>
                                            <h3>{props.btnTextDestaque2}</h3>
                                        </span>
                                    </a>
                                    <p>
                                        <span><RiArrowDropRightFill />{props.btnDesc}</span>
                                    </p>
                                </div>
                            </div>

                            <div className={`${styles.gridTwoColumnImage} ${styles.gridTwoColumnsChild}`}>
                                <img src={props.mainCtaImage} alt=""/>
                            </div>
                        </div>

                        <span className={styles.sectionSeparatorGreen}>
                            <img src={SeparatorGradient} alt=""/>
                        </span>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default MainCta;