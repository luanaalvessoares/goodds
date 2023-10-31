import React from "react";
import styles from  './SectionTopWebsites.module.css';

function SectionTopWebsites(props) {
    return (
        <section className={styles.sectionTopWebsitesContainer}>
            <div className={styles.containerTwoColumnsDefault}>
                <div className={styles.containerChildTwoColumnsDefault}>
                    <img src={props.image} className={`${styles.imageTwoColumnsDefault} ${styles.sectionTopWebsitesImage}`} alt="" />
                </div>

                <div className={styles.containerChildTwoColumnsDefault}>
                    <div className={styles.sectionTopWebsitesContent}>
                        <h2 className={styles.sectionTopWebsitesTitle}>{props.title}</h2>
                        <p>{props.subtitle}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionTopWebsites;