import React from 'react';
import { motion } from 'framer-motion';
import styles from './FooterCta.module.css';

function FooterCta({linkCtaWhatsapp}) {
    return (
        <section className={styles.footerCtaContainer}>
            <div className={styles.footerCtaContent}>
                <h1>Comece a vender com a Goodds</h1>
                <p>Soluções práticas e inovadoras, feitas para te ajudar a vender na internet.</p>
                <motion.a
                    href={linkCtaWhatsapp}
                    animate={{ y: [-10, 10], boxShadow: ["rgb(38, 57, 77) 0px 20px 30px -10px", "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    target="_blank"
                >
                    <span>Falar com um especialista</span>
                </motion.a>
            </div>
        </section>
    );
}

export default FooterCta;
