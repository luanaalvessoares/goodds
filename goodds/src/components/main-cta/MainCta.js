import React from 'react';
import styles from './MainCta.module.css';
import RiFireFill from 'remixicon-react/FireFillIcon';
import RiAddFill from 'remixicon-react/AddFillIcon';
import RiArrowDropRightFill from 'remixicon-react/ArrowDropRightFillIcon';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.webp';
import SeparatorGradient from '../../assets/images/separator-gradient.svg';

function MainCta(props) {
    const {
        titleText,
        destaqueTitleText2,
        destaqueTitleText1,
        description,
        vantagem1,
        vantagem2,
        vantagem3,
        vantagem4,
        vantagem5,
        vantagem6,
        vantagem7,
        iconInfo,
        btnText,
        btnTextDestaque1,
        btnTextDestaque2,
        btnDesc,
    } = props.data;

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
                                        {titleText}
                                        <span className={`${styles.destaqueText} ${styles.mainCtaDestaque} ${styles.mainCtaDestaque2}`}>{destaqueTitleText2}</span>
                                    </span>
                                    <span className={`${styles.destaqueText} ${styles.mainCtaDestaque} ${styles.mainCtaDestaque3}`}>{destaqueTitleText1}</span>
                                     
                                </h1>
                                {/* <p className={styles.gridTwoColumnInfoDescription}>{description}</p> */}
                                <div className={styles.vantagens}>
                                    <p><span className={styles.iconAdd}><RiAddFill /></span> {vantagem1}</p>
                                    <p><span className={styles.iconAdd}><RiAddFill /></span> {vantagem2}</p>
                                    <p><span className={styles.iconAdd}><RiAddFill /></span> {vantagem3}</p>
                                    <p><span className={styles.iconAdd}><RiAddFill /></span> {vantagem4}</p>
                                    <p><span className={styles.iconAdd}><RiAddFill /></span> {vantagem5}</p>
                                    <p><span className={styles.iconAdd}><RiAddFill /></span> {vantagem6}</p>
                                    <p><span className={styles.iconAdd}><RiAddFill /></span> {vantagem7}</p>
                                </div>
                                <p className={`${styles.gridTwoColumnInfoCta} ${styles.destaqueText}`}>
                                    <span className={styles.iconFire}><RiFireFill /> </span>
                                    {iconInfo}
                                </p>
                                <div className={`${styles.gridTwoColumnInfoBtn} ${styles.ctaBtn}`}>
                                    <a href="!#">
                                        <span>
                                            <p>{btnTextDestaque2}</p>
                                        </span>
                                    </a>
                                    <p>
                                        <span><RiArrowDropRightFill />{btnDesc}</span>
                                    </p>
                                </div>
                            </div>

                            <div className={`${styles.gridTwoColumnImage} ${styles.gridTwoColumnsChild}`}>
                                <img src={props.mainCtaImage} alt=""/>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default MainCta;