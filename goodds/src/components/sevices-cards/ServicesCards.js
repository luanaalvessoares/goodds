import React from "react";
import styles from './ServicesCards.module.css';
import ServicesCardsData from './ServicesCardsData'
import { Link } from "react-router-dom";
import ArrowTransition from "../elements/arrow-transition/ArrowTransition";

function ServicesCards() {
    const servicesData = ServicesCardsData;

    return (
        <div className={styles.serviceCard}>
            {servicesData.map((item, index) => (
                <div className={styles.serviceContent} key={index}>
                    <div className={styles.serviceImage}>
                        <img src={item.serviceImage} alt="" />
                    </div>

                    <div className={styles.serviceDescription}>
                        <h2>{item.serviceTitle}</h2>
                        <p>{item.serviceDescription}</p>
                    </div>

                    <Link to={item.serviceLink}>
                        <div className={styles.serviceButton}>
                            <p>
                                Soluções e Preços
                                <ArrowTransition />
                            </p>
                        </div>                
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default ServicesCards;