import React from "react";
import styles from  './SectionTopConsultorias.module.css';

function SectionTopConsultorias(props) {
    return (
        <section className={styles.sectionTopConsultoriasContainer}>
            <div className={styles.containerTwoColumnsDefault}>
                <div className={styles.containerChildTwoColumnsDefault}>
                    <img src={props.image} className={`${styles.imageTwoColumnsDefault} ${styles.sectionTopConsultoriasImage}`} alt="" />
                </div>

                <div className={styles.containerChildTwoColumnsDefault}>
                    <div className={styles.sectionTopConsultoriasContent}>
                        <h2 className={styles.sectionTopConsultoriasTitle}>{props.title}</h2>
                        <p>{props.subtitle}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionTopConsultorias;