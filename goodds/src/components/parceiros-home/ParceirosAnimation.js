import React from "react";
import styles from './ParceirosAnimation.module.css';
import TypeIt from 'typeit-react';

function ParceirosAnimation() {
    return (
        <section className={styles.parceirosHomeContainer}>
            <div className={styles.parceirosHomeTitle}>
                <h1>Parceiros</h1>
            </div>

            <div className={styles.typeItContainer}>Sua loja integrada com
                <span>
                    <TypeIt
                        getBeforeInit={instance => {
                        instance
                            .type(" Facebook")
                            .pause(700)
                            .delete(8)
                            .type(" WhatsApp")
                            .pause(700)
                            .delete(8)
                            .type(" Instagram")
                            .pause(700)
                            .delete(9)
                            .type(" Google")
                            .pause(700)
                            .delete(6)
                        return instance;
                        }}
                        options={{
                            cursor: true,
                            waitUntilVisible: true,
                            loop: true
                        }}>
                    </TypeIt>
                </span>
            </div>

        </section>
    )
}

export default ParceirosAnimation;