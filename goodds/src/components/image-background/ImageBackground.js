import React, { useRef, useEffect, useState } from 'react';
import styles from './ImageBackground.module.css'
import SuportAvatar from '../../assets/images/support-avatar-bg.webp'
import VideoHomeBg from '../../assets/images/video-home-bg.mp4'
import { useLocation } from 'react-router-dom';
import ContactModal from '../contact-modal/ContactModal';
import RiArrowRightSLine from 'remixicon-react/ArrowRightSLineIcon';

function ImageBackground({isVideo, image, title, description, title2}) {
    const location = useLocation();

    // Open Modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Função para abrir o modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Função para fechar o modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

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
                            <span className={`${styles.btnHeaderContact} ${styles.btnHeaderContactDesktop}`} onClick={openModal}>
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
                            <ContactModal isOpen={isModalOpen} onRequestClose={closeModal} />

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
                    </div>				
                </div>
            </section>
        </div>
    )
}

export default ImageBackground;