import React from 'react';
import styles from './PackagesSection.module.css';
import CheckboxCircleLineIcon from 'remixicon-react/CheckboxCircleLineIcon'


const PackagesSection = (props) => {
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
        packageLink2
    } = props.packageData2;

    return (
        <section className={styles.packageSection}>
            <h1 className={styles.packageContainerTitle}>{props.sectionPackageTitle}</h1>
            <div className={styles.packageContainer}>
                <div className={styles.packageItem}>
                    <div className={styles.packageCard}>
                        <h2 className={styles.packageTitle}>{packageTitle1}</h2>
                        <p className={styles.packageDescription}>{packageDescription1}</p>
                        <h3 className={styles.packagePrice}><span>De: </span><span className={styles.typeCoin}>R$</span><span>{packagePrice1}</span></h3>
                        <div className={styles.packageNewsContainer}>
                            <p className={styles.packageNews}><span>Por: </span><span className={styles.typeCoin}>R$</span><span className={styles.newPricePackage}>{packageNews1}</span> <span>a vista</span></p>
                            <p>Ou em 12x de <span>R$</span><span>{packageParcel1}</span> sem juros</p>
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

                        </div>
                        <a href={packageLink1} className={styles.packageBuy}>
                            <span>Comprar</span>
                        </a>
                    </div>
                </div>
                <div className={styles.packageItem}>
                    <div className={styles.packageCard}>
                        <span className={styles.bestSellerTag}>Mais Vendido</span>
                        <h2 className={styles.packageTitle}>{packageTitle2}</h2>
                        <p className={styles.packageDescription}>{packageDescription2}</p>
                        <h3 className={styles.packagePrice}><span>De: </span><span className={styles.typeCoin}>R$</span><span>{packagePrice2}</span></h3>
                        <div className={styles.packageNewsContainer}>
                            <p className={styles.packageNews}><span>Por: </span><span className={styles.typeCoin}>R$</span><span className={styles.newPricePackage}>{packageNews2}</span> <span>a vista</span></p>
                            <p>Ou em 12x de <span>R$</span><span>{packageParcel2}</span> sem juros</p>
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

                        </div>
                        <a href={packageLink2} className={styles.packageBuy}>
                            <span>Comprar</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PackagesSection;
