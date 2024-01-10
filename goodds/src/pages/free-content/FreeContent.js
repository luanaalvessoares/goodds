import React from "react";
import styles from './FreeContent.module.css';
import WhiteLogo from '../../assets/images/logobranco.webp';
import { Link } from 'react-router-dom';
import RiLinkedinFill from 'remixicon-react/LinkedinFillIcon';
import RiInstagramLine from 'remixicon-react/InstagramLineIcon';
import RiYoutubeLine from 'remixicon-react/YoutubeLineIcon';

function FreeContent() {
    return (
        <div className={styles.freeContentContainer}>
            <div className={styles.centeredContent}>
                <Link to="/">
                    <img className={styles.logo} src={WhiteLogo} alt=""/>                
                </Link>
            </div>
            <div className={styles.centeredContent}>
                <h1 className={styles.pageTitle}>Gratuitos</h1>
            </div>
            <div className={`${styles.centeredContent} ${styles.containerCards}`}>
                
                <a href="#!" className={styles.cardsFreeContent} target="_blank">
                    <div>
                        <h3>NEWSLETTER I.A.</h3>
                        <p>(I.A., Infoprodutos e Marketing)</p>
                    </div>
                </a>
                                
                <a href="#!" className={styles.cardsFreeContent} target="_blank">
                    <div>
                        <h3>CRIANDO MECANISMO ÚNICO</h3>
                        <p>(tutorial + prompt de 1.445 palavras)</p>
                    </div>
                </a>
                                
                <a href="#!" className={styles.cardsFreeContent} target="_blank">
                    <div>
                        <h3>TÍTULOS INFINITOS</h3>
                        <p>(Mega-Prompt + Swipe Gigante)</p>
                    </div>
                </a>
                                
                <a href="#!" className={styles.cardsFreeContent} target="_blank">
                    <div>
                        <h3>PERFIL DO CLIENTE IDEAL</h3>
                        <p>(Template Notion + Prompts)</p>
                    </div>
                </a>
                                
                <a href="#!" className={styles.cardsFreeContent} target="_blank">
                    <div>
                        <h3>STORYTELLING PIXAR</h3>
                        <p>(Template Notion + Figma)</p>
                    </div>
                </a>
            </div>

            <div className={`${styles.centeredContent} ${styles.freeContentFooter}`}>
                <div className={styles.footerSeparator}></div>
                <div className={styles.redesSociais}>
                    <a href="https://www.linkedin.com/company/goodds/" target="_blank">
                        <span><RiLinkedinFill /></span>
                    </a>

                    <a href="https://www.instagram.com/goodds.com.br/" target="_blank">
                        <span><RiInstagramLine /></span>
                    </a>

                    <a href="https://www.youtube.com/c/Goodds" target="_blank">
                        <span><RiYoutubeLine /></span>
                    </a>
                </div>
                <div className={styles.copyright}>
                    <p>2024 &copy; GOODDS - TODOS OS DIREITOS RESERVADOS.</p>
                </div>
            </div>
        </div>
    )
}

export default FreeContent;