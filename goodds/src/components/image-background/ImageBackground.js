import React, { useRef, useEffect, useState } from 'react';
import styles from './ImageBackground.module.css'
import SuportAvatar from '../../assets/images/support-avatar-bg.webp'
import VideoHomeBg from '../../assets/images/video-home-bg.mp4'
import { useLocation } from 'react-router-dom';

function ImageBackground({isVideo, image, title, description, title2}) {
    const location = useLocation();

    return (
        <div id={styles.headerBgSection}>
            <section className={styles.bgHeader}>
                {isVideo ? (
                    <video src={VideoHomeBg} autoPlay loop muted playsInline className={styles.imageBg} />
                ) : (
                    <img src={image} alt="" className={styles.imageBg} />
                )}

                <div className={styles.headerOverlay}>
                    <div className={styles.contentHeader}>
                        <div className={`${styles.titleHeader} ${location.pathname === '/' ? `${styles.home}` : ''}`}>
                            <h2><span>{title}</span> <span>{title2}</span></h2>
                            <p>{description}</p>
                        </div>
                        <div className={styles.headerContact}>
                            <a className={styles.btnHeaderContact} href="#!">
                                <div className={styles.contactBgImage}>
                                    <img src={SuportAvatar} alt=""/>
                                </div>
                                <div>
                                    <p>Precisa de ajuda?</p>
                                    <p>Fale com um especialista</p>
                                </div>
                            </a>
                        </div>
                    </div>				
                </div>
            </section>
        </div>
    )
}

export default ImageBackground;