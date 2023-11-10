import React from "react"
import styles from './VendaTodoDia.module.css'
import { motion } from "framer-motion";
import { useInView, InView } from "react-intersection-observer";

function VendaTodoDia(props) {
    const { ref: ref, inView: inView } = useInView({
        triggerOnce: true,
    });

    return (
        <section className={styles.containerVenda}>
            <div className={styles.containerChildVenda}>
                <img src={props.image} className={styles.imageVenda} alt=""/>
            </div>

            <div className={styles.containerChildVenda}>
                <div className={styles.vendaGrids}>
                    <h2 className={styles.beneficiosTitle}>Venda todos os dias</h2>
                    <p className={styles.beneficiosSub}>Loja Virtual Profissional</p>
                    <motion.div className={styles.gridBeneficios} ref={ref}>

                        <motion.div
                            className={styles.itemBeneficio}
                            initial={{ x: '100vw' }}
                            animate={inView ? { x: 0 } : { x: '100vw' }}
                            transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01], delay: 0.2, scale: {type: "spring", damping: 8, stiffness: 100, restDelta: 0.001} }}
                        >
                            <h4 className={styles.itemTitle}>{props.itemTitle1 ? props.itemTitle1 : 'Desenvolvimento Premium'}</h4>
                            <p className={styles.itemDescription}>{props.itemDescription1 ? props.itemDescription1 : 'Com uma equipe dedicada de especialistas'}</p>
                        </motion.div>
                        
                        <motion.div
                            className={styles.itemBeneficio}
                            initial={{ x: '100vw' }}
                            animate={inView ? { x: 0 } : { x: '100vw' }}
                            transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01], delay: 0.4, scale: {type: "spring", damping: 8, stiffness: 100, restDelta: 0.001} }}
                        >
                            <h4 className={styles.itemTitle}>{props.itemTitle2 ? props.itemTitle2 : 'Milhares de Integrações'}</h4>
                            <p className={styles.itemDescription}>{props.itemDescription2 ? props.itemDescription2 : 'Fornecedores | Pagamentos | Entrega | Redes Sociais'}</p>
                        </motion.div>
                        
                        <motion.div
                            className={styles.itemBeneficio}
                            initial={{ x: '100vw' }}
                            animate={inView ? { x: 0 } : { x: '100vw' }}
                            transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01], delay: 0.6, scale: {type: "spring", damping: 8, stiffness: 100, restDelta: 0.001} }}
                        >
                            <h4 className={styles.itemTitle}>{props.itemTitle3 ? props.itemTitle3 : 'Suporte Rápido'}</h4>
                            <p className={styles.itemDescription}>{props.itemDescription3 ? props.itemDescription3 : 'Consultoria eficiente e acompanhamento humanizado'}</p>
                        </motion.div>
                        
                        <motion.div
                            className={styles.itemBeneficio}
                            initial={{ x: '100vw' }}
                            animate={inView ? { x: 0 } : { x: '100vw' }}
                            transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01], delay: 0.8, scale: {type: "spring", damping: 8, stiffness: 100, restDelta: 0.001} }}
                        >
                            <h4 className={styles.itemTitle}>{props.itemTitle4 ? props.itemTitle4 : 'Sua Loja e Além...'}</h4>
                            <p className={styles.itemDescription}>{props.itemDescription4 ? props.itemDescription4 : 'Loja + Logo + Marketing + Mineração'}</p>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default VendaTodoDia;