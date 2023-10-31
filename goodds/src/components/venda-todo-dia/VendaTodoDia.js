import React from "react"
import styles from './VendaTodoDia.module.css'

function VendaTodoDia(props) {
    return (
        <section className={styles.containerVenda}>
            <div className={styles.containerChildVenda}>
                <img src={props.image} className={styles.imageVenda} alt=""/>
            </div>

            <div className={styles.containerChildVenda}>
                <div className={styles.vendaGrids}>
                    <h2 className={styles.beneficiosTitle}>Venda todos os dias.</h2>
                    <p className={styles.beneficiosSub}>Loja Virtual Profissional</p>
                    <div className={styles.gridBeneficios}>
                        <div className={styles.itemBeneficio}>
                            <h4 className={styles.itemTitle}>{props.itemTitle1 ? props.itemTitle1 : 'Desenvolvimento Premium'}</h4>
                            <p className={styles.itemDescription}>{props.itemDescription1 ? props.itemDescription1 : 'Com uma equipe dedicada de especialistas'}</p>
                        </div>
                        
                        <div className={styles.itemBeneficio}>
                            <h4 className={styles.itemTitle}>{props.itemTitle2 ? props.itemTitle2 : 'Milhares de Integrações'}</h4>
                            <p className={styles.itemDescription}>{props.itemDescription2 ? props.itemDescription2 : 'Fornecedores | Pagamentos | Entrega | Redes Sociais'}</p>
                        </div>
                        
                        <div className={styles.itemBeneficio}>
                            <h4 className={styles.itemTitle}>{props.itemTitle3 ? props.itemTitle3 : 'Suporte Rápido'}</h4>
                            <p className={styles.itemDescription}>{props.itemDescription3 ? props.itemDescription3 : 'Consultoria eficiente e acompanhamento humanizado'}</p>
                        </div>
                        
                        <div className={styles.itemBeneficio}>
                            <h4 className={styles.itemTitle}>{props.itemTitle4 ? props.itemTitle4 : 'Sua Loja e Além...'}</h4>
                            <p className={styles.itemDescription}>{props.itemDescription4 ? props.itemDescription4 : 'Loja + Logo + Marketing + Mineração'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VendaTodoDia;