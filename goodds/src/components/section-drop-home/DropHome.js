import React from "react";
import styles from './DropHome.module.css';
import TitleFirst from "../section-title-first/TitleFirst";
import DropImage from '../../assets/images/home-primeira-agencia.webp';

function DropHome(props) {
    return (
        <section className={styles.dropHomeContainer}>
            <TitleFirst title={props.title} subtitle={props.subtitle} description={props.description} />

            <div className={styles.dropHomeContainerImage}>
                <img src={DropImage} alt="" />
            </div>
        </section>
    )
}

export default DropHome;