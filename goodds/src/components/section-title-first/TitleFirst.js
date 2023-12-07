import React from "react";
import styles from './TitleFirst.module.css';
import FirstHome from '../../assets/images/first.webp';

function TitleFirst(props) {
    return (
        <div className={styles.titleFirstContainer}>
            <h1>{props.title}</h1>
            <h3>
                {props.subtitle}
                <span className={styles.destaqueText}>{props.descriptionDestaque}</span>
            </h3>
        </div>
    )
}

export default TitleFirst;