import React from "react";
import styles from './CardsInfoTitle.module.css';

function CardsInfoTitle(props) {
    return (
        <section className={styles.cardsInfoSectionContainer}>
            <h1 className={`${styles.cardsInfoSectionTitle} titleColor`}>{props.title}</h1>
            <p>Confira alguns números do nosso time de marketing em <span className="destaqueText">2023</span></p>
            <div className={styles.cardsInfoSectionGrid}>
                <div className={styles.cardsInfoSectionChildren}>
                    <h3 className="titleColor">+R$10M</h3>
                    <p className="descriptionColor">em vendas realizadas</p>
                </div>
                <div className={styles.cardsInfoSectionChildren}>
                    <h3 className="titleColor">+3690</h3>
                    <p className="descriptionColor">campanhas no Instagram</p>
                </div>
                <div className={styles.cardsInfoSectionChildren}>
                    <h3 className="titleColor">+2541</h3>
                    <p className="descriptionColor">anuncios no Google</p>
                </div>
                <div className={styles.cardsInfoSectionChildren}>
                    <h3 className="titleColor">+1872</h3>
                    <p className="descriptionColor">horas de consultoria</p>
                </div>
            </div>
        </section>
    )
}

export default CardsInfoTitle;