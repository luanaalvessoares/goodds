import React, { useRef, useEffect, useState } from 'react';
import styles from './ImageBackground.module.css'
import SuportAvatar from '../../assets/images/support-avatar-bg.webp'
import Video1 from '../../assets/images/video-home-bg.mp4'
import Video2 from '../../assets/images/video-banners.mp4'
import { Link, useLocation } from 'react-router-dom';
import RiArrowRightSLine from 'remixicon-react/ArrowRightSLineIcon';
import RiFireFill from 'remixicon-react/FireFillIcon';

function ImageBackground(props) {
    const location = useLocation();

    const videoSrc = props.videoOption === 1 ? Video1 : Video2;

    return (
        <div id={styles.headerBgSection}>
            <section className={styles.bgHeader}>
                {props.isVideo ? (
                    <video src={videoSrc} autoPlay loop muted playsInline className={styles.imageBg} />
                ) : (
                    <img src={props.image} alt="" className={styles.imageBg} />
                )}

                <div className={styles.headerOverlay}>
                    <div className={styles.contentHeader}>
                        <div id={location.pathname === '/' ? '' : 'titleImageBG'} className={`${styles.titleHeader} ${location.pathname === '/' ? `${styles.home}` : ''}`}>
                            <h1><span>{props.title}</span> <span>{props.title2}</span></h1>
                            <p>
                                <span><RiFireFill /></span>
                                {props.description}
                            </p>
                        </div>

                        {props.cta && (
                        <div className={styles.headerContact}>
                            <Link to="/contato">
                                <span className={`${styles.btnHeaderContact} ${styles.btnHeaderContactDesktop}`}>
                                    <div className={styles.contactBgImage}>
                                        <img src={SuportAvatar} alt=""/>
                                    </div>
                                    <div>
                                        <p>Precisa de ajuda?</p>
                                        <p>
                                            Fale com um especialista
                                            <span className={styles.bgArrow}><RiArrowRightSLine /></span>
                                        </p>
                                    </div>
                                </span>                            
                            </Link>

                            <a className={`${styles.btnHeaderContact} ${styles.btnHeaderContactMobile}`} target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista">
                                <div className={styles.contactBgImage}>
                                    <img src={SuportAvatar} alt=""/>
                                </div>
                                <div>
                                    <p>Precisa de ajuda?</p>
                                    <p>
                                        Fale com um especialista
                                        <span className={styles.bgArrow}><RiArrowRightSLine /></span>
                                    </p>
                                </div>
                            </a>
                        </div>
                        )}
                    </div>				
                </div>
            </section>
        </div>
    )
}

export default ImageBackground;