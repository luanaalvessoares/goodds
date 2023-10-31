import React from "react";
import styles from './CardsInfoTitle.module.css';

function CardsInfoTitle(props) {
    return (
        <section className={styles.cardsInfoSectionContainer}>
            <h1 className={styles.cardsInfoSectionTitle}>{props.title}</h1>
            <div className={styles.cardsInfoSectionGrid}>
                <div className={styles.cardsInfoSectionChildren}>
                    <h3>+R$10M</h3>
                    <p>em vendas realizadas em 2022</p>
                </div>
                <div className={styles.cardsInfoSectionChildren}>
                    <h3>+6000</h3>
                    <p>lojas virtuais entregues</p>
                </div>
                <div className={styles.cardsInfoSectionChildren}>
                    <h3>+12</h3>
                    <p>anos de experiência em vendas</p>
                </div>
                <div className={styles.cardsInfoSectionChildren}>
                    <h3>0%</h3>
                    <p>de comissão nas suas vendas online</p>
                </div>
            </div>
        </section>
    )
}

export default CardsInfoTitle;