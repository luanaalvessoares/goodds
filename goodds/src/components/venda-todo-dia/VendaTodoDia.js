import React from "react"
import styles from './VendaTodoDia.module.css'
import { motion } from "framer-motion";
import { useInView, InView } from "react-intersection-observer";

function VendaTodoDia(props) {
    const { ref: ref, inView: inView } = useInView({
        triggerOnce: true,
    });
    
    const animations = {
        hidden: {
            opacity: 0
        },
        view: {
            opacity: 1,
        }
    };

    return (
        <section className={styles.containerVenda}>
            <div className={styles.containerChildVenda}>
                <img src={props.image} className={styles.imageVenda} alt=""/>
            </div>

            <div className={styles.containerChildVenda}>
                <div className={styles.vendaGrids}>
                    <h2 className={styles.beneficiosTitle}>Venda todos os dias</h2>
                    <p className={styles.beneficiosSub}>Com um E-commerce Profissional</p>

                    <div className={styles.gridBeneficios}>

                    <motion.div
                        className={styles.itemBeneficio}
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "view" : "hidden"}
                        variants={animations}
                        transition={{ staggerChildren: 0.5, delay: 0.6 }}
                    >
                        <h4 className={styles.itemTitle}>{props.itemTitle1 ? props.itemTitle1 : 'Desenvolvimento Premium'}</h4>
                        <p className={styles.itemDescription}>{props.itemDescription1 ? props.itemDescription1 : 'Com uma equipe dedicada de especialistas'}</p>
                    </motion.div>
                        
                    <motion.div
                        className={styles.itemBeneficio}
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "view" : "hidden"}
                        variants={animations}
                        transition={{ staggerChildren: 0.6, delay: 0.9 }}
                    >
                        <h4 className={styles.itemTitle}>{props.itemTitle2 ? props.itemTitle2 : 'Milhares de Integrações'}</h4>
                        <p className={styles.itemDescription}>{props.itemDescription2 ? props.itemDescription2 : 'Fornecedores | Pagamentos | Entrega | Redes Sociais'}</p>
                    </motion.div>
                        
                    <motion.div
                        className={styles.itemBeneficio}
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "view" : "hidden"}
                        variants={animations}
                        transition={{ staggerChildren: 0.7, delay: 1.2 }}
                    >
                        <h4 className={styles.itemTitle}>{props.itemTitle3 ? props.itemTitle3 : 'Suporte Rápido'}</h4>
                        <p className={styles.itemDescription}>{props.itemDescription3 ? props.itemDescription3 : 'Consultoria eficiente e acompanhamento humanizado'}</p>
                    </motion.div>
                        
                    <motion.div
                        className={styles.itemBeneficio}
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "view" : "hidden"}
                        variants={animations}
                        delay={0.8}
                        transition={{ staggerChildren: 0.8, delay: 1.5 }}
                    >
                        <h4 className={styles.itemTitle}>{props.itemTitle4 ? props.itemTitle4 : 'Sua Loja e Além...'}</h4>
                        <p className={styles.itemDescription}>{props.itemDescription4 ? props.itemDescription4 : 'Loja + Logo + Marketing + Mineração'}</p>
                    </motion.div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default VendaTodoDia;