import React from "react";
import styles from './CardsInfoTitle.module.css';

function CardsInfoTitle(props) {
    return (
        <section className={styles.cardsInfoSectionContainer}>
            <h1 className={`${styles.cardsInfoSectionTitle} titleColor`}>{props.title}</h1>
            <div className={styles.cardsInfoSectionGrid}>
                <div className={styles.cardsInfoSectionChildren}>
                    <h3 className="titleColor">+R$10M</h3>
                    <p className="descriptionColor">em vendas realizadas em 2022</p>
                </div>
                <div className={styles.cardsInfoSectionChildren}>
                    <h3 className="titleColor">+6000</h3>
                    <p className="descriptionColor">lojas virtuais entregues</p>
                </div>
                <div className={styles.cardsInfoSectionChildren}>
                    <h3 className="titleColor">+12</h3>
                    <p className="descriptionColor">anos de experiência em vendas</p>
                </div>
                <div className={styles.cardsInfoSectionChildren}>
                    <h3 className="titleColor">0%</h3>
                    <p className="descriptionColor">de comissão nas suas vendas online</p>
                </div>
            </div>
        </section>
    )
}

export default CardsInfoTitle;