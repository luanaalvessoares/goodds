import React from 'react';
import { motion } from 'framer-motion';
import './FooterCta.css';

function FooterCta({ backgroundGradient }) {


    return (
        <section className="footerCtaContainer" style={{ background: backgroundGradient }}>
            <div className="footerCtaContent">
                <h1>Comece a vender com a Goodds</h1>
                <p>Soluções práticas e inovadoras, feitas para te ajudar a vender na internet.</p>
                <motion.a
                    href="https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista%20em%20dropshipping"
                    animate={{ y: [-10, 10], boxShadow: ["rgb(38, 57, 77) 0px 20px 30px -10px", "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    <span>Falar com um especialista</span>
                </motion.a>
            </div>
        </section>
    );
}

export default FooterCta;
