import React from "react";
import style from './TitleFirst.module.css';
import FirstHome from '../../assets/images/first.webp';

function TitleFirst(props) {
    return (
        <div className={style.titleFirstContainer}>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <div className={style.titleFirstGrid}>
                <img src={FirstHome} alt="" />
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default TitleFirst;