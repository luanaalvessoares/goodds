import React from "react";
import styles from './SimpleTwoColumns.module.css';

function SimpleTwoColumns(props) {
    return (
        <section className={styles.simpleContainer}>
            <div className={styles.containerTwoColumnsDefault}>
                <div className={styles.containerChildTwoColumnsDefault}>
                    <div className={styles.simpleContent}>
                        <h2 className={styles.simpleTitle}>{props.title}</h2>
                        <p><span>{props.descriptionOne} </span> <span className={`${styles.destaqueText} ${styles.strongText}`}><h4>{props.descriptionDestaque} </h4></span>{props.description}</p>
                    </div>
                </div>

                <div className={styles.containerChildTwoColumnsDefault}>
                    <img src={props.image} className={`${styles.imageTwoColumnsDefault} ${styles.simpleImage}`} alt="" />
                </div>
            </div>
        </section>
    )
}

export default SimpleTwoColumns;