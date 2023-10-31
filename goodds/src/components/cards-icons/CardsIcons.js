import React from "react";
import styles from './CardsIcons.module.css';

function CardsIcons(props) {
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
                <div className={styles.cardsIconsGridItem}>
                    <img src={icon1} alt="" />
                    <h3>{cardTitle1}</h3>
                    <p>{cardDescription1}</p>
                </div>
                <div className={styles.cardsIconsGridItem}>
                    <img src={icon2} alt="" />
                    <h3>{cardTitle2}</h3>
                    <p>{cardDescription2}</p>
                </div>
                <div className={styles.cardsIconsGridItem}>
                    <img src={icon3} alt="" />
                    <h3>{cardTitle3}</h3>
                    <p>{cardDescription3}</p>
                </div>
                <div className={styles.cardsIconsGridItem}>
                    <img src={icon4} alt="" />
                    <h3>{cardTitle4}</h3>
                    <p>{cardDescription4}</p>
                </div>
            </div>
        </section>
    )
}

export default CardsIcons;