import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './FooterCta.module.css';
import { Link } from 'react-router-dom';

function FooterCta({linkCtaWhatsapp}) {

    return (
        <section className={styles.footerCtaContainer}>
            <div className={styles.footerCtaContent}>
                <h1>Comece a vender com a Goodds</h1>
                <p>Soluções práticas e inovadoras, feitas para te ajudar a vender na internet.</p>
                <Link to="/contato" className={styles.ctaButtonDesktopLink}>
                    <motion.a
                        animate={{ y: [-10, 10], boxShadow: ["rgb(38, 57, 77) 0px 20px 30px -10px", "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px"] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className={styles.ctaButtonDesktop}
                    >
                        <span>Falar com um especialista</span>
                    </motion.a>
                </Link>

                <motion.a
                    href={linkCtaWhatsapp}
                    animate={{ y: [-10, 10], boxShadow: ["rgb(38, 57, 77) 0px 20px 30px -10px", "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    target="_blank"
                    className={styles.ctaButtonMobile}
                >
                    <span>Falar com um especialista</span>
                </motion.a>
            </div>
        </section>
    );
}

export default FooterCta;
