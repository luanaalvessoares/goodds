import React from "react";
import styles from './TopTitleImageSection.module.css';

function TopTitleImageSection(props) {
    return (
        <div className={styles.topTitleImage}>
            <div className={styles.topTitleSub}>
                <h1>{props.title}</h1>
                <p>{props.subtitle}</p>
            </div>

            <div className={styles.topImages}>
                <div className={styles.mainTopImage}>
                    <img src={props.backgroundUrl} alt="" />
                </div>
                <div className={`${styles.imageChildren1} ${styles.topImageChildren}`}>
                    <img src={props.imageChildren1} alt="" />
                </div>
                <div className={`${styles.imageChildren2} ${styles.topImageChildren}`}>
                    <img src={props.imageChildren2} alt="" />
                </div>
                <div className={`${styles.imageChildren3} ${styles.topImageChildren}`}>
                    <img src={props.imageChildren3} alt="" />
                </div>
            </div>
        </div>
    )
}

export default TopTitleImageSection;