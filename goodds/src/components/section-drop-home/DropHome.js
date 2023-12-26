import React from "react";
import styles from './DropHome.module.css';
import TitleFirst from "../section-title-first/TitleFirst";

function DropHome(props) {
    return (
        <section className={styles.dropHomeContainer}>
            <TitleFirst title={props.title} subtitle={props.subtitle} descriptionDestaque={props.descriptionDestaque} />

            <div className={styles.dropHomeContainerImage}>
                <img src={props.image} alt="" />
            </div>
        </section>
    )
}

export default DropHome;