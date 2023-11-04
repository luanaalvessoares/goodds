import React from "react";
import styles from './SimpleReverseTwoColumns.module.css';

function SimpleReverseTwoColumns(props) {
    return (
        <section className={styles.simpleReverseContainer}>
            <div className={styles.containerTwoColumnsDefault}>
                <div className={styles.containerChildTwoColumnsDefault}>
                    <img src={props.image} className={`${styles.imageTwoColumnsDefault} ${styles.simpleReverseImage}`} alt="" />
                </div>

                <div className={styles.containerChildTwoColumnsDefault}>
                    <div className={styles.simpleReverseContent}>
                        <h2 className={styles.simpleReverseTitle}>{props.title}</h2>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SimpleReverseTwoColumns;