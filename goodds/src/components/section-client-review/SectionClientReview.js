import React from "react";
import styles from './SectionClientReview.module.css';

function SectionClientReview(props) {
    return (
        <section className={styles.clientReviewContainer}>
            <div className={styles.clientReviewContent}>
                <h2>{props.title}</h2>
                <img className={styles.imageClient} src={props.image} alt="" />
                <p>{props.comment}</p>
                <h4>{props.clientName}</h4>
                <img className={styles.deskImageClient} src={props.deskImageClient} alt="" />
            </div>
        </section>
    )
}

export default SectionClientReview;