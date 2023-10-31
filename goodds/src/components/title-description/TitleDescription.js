import React from "react";
import styles from './TitleDescription.module.css';

function TitleDescription(props) {
    return (
        <section className={styles.titleDescriptionContainer}>
            <div className={styles.titleDescriptionContent}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </section>
    )
}

export default TitleDescription;