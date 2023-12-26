import React from "react";
import styles from '../../pages/venda-todos-os-dias/VendaTodosOsDias.module.css';
import stylesMain from './IncludedGrid4.module.css';
import RiKey2Fill from 'remixicon-react/Key2FillIcon';
import RiToolsFill from 'remixicon-react/ToolsFillIcon';
import RiLightbulbFill from 'remixicon-react/LightbulbFillIcon';
import RiMedal2Fill from 'remixicon-react/Medal2FillIcon';
import RiArrowDropRightFill from 'remixicon-react/ArrowDropRightFillIcon';

function IncludedGrid4(props) {
    const {
        gridTitle1,
        gridSubtitle1,
        gridTitle2,
        gridSubtitle2,
        gridTitle3,
        gridSubtitle3,
        gridTitle4,
        gridSubtitle4,
    } = props.gridData;

    return (
        <section className={`${styles.containerChild} ${stylesMain.sectionMain}`}>
        <div className={`${styles.child5} ${styles.child}`}>
            <div>
                <div>
                    <h2>
                        <span className={styles.destaqueText}>Ao contratar agora, </span>
                        você terá:
                    </h2>
                </div>

                <div className={styles.gridCardsInfos}>
                    <div className={styles.gridCardInfoChild}>
                        <p>
                            <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiKey2Fill /></span>
                        </p>
                        <p>
                            <span className={styles.destaqueText}><h6>{gridTitle1 ? gridTitle1 : '01 Loja de Dropshipping: '}</h6></span>
                            {gridSubtitle1 ? gridSubtitle1 : 'vamos criar e entregar sua Loja Virtual personalizada conforme as suas preferências para você vender todos os dias na internet.'}
                        </p>
                    </div>
                    <div className={styles.gridCardInfoChild}>
                        <p>
                            <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiToolsFill /></span>
                        </p>
                        <p>
                            <span className={styles.destaqueText}><h6>{gridTitle2 ? gridTitle2 : 'Equipe de Marketing Dedicada: '} </h6></span>
                            {gridSubtitle2 ? gridSubtitle2 : 'disponibilizaremos no Pacote Mega e Especial um gestor de tráfego dedicado para atender sua conta e garantir que você venda nos primeiros dias.'}
                        </p>
                    </div>
                    <div className={styles.gridCardInfoChild}>
                        <p>
                            <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiMedal2Fill /></span>
                        </p>
                        <p>
                            <span className={styles.destaqueText}><h6>{gridTitle3 ? gridTitle3 : 'Produtos Minerados e Cadastrados: '} </h6></span>
                            {gridSubtitle3 ? gridSubtitle3 : 'faremos a seleção de cada produto e após sua aprovação cadastraremos com descrições de alta conversão.'}
                        </p>
                    </div>
                    <div className={styles.gridCardInfoChild}>
                        <p>
                            <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiLightbulbFill /></span>
                        </p>
                        <p>
                            <span className={styles.destaqueText}><h6>{gridTitle4 ? gridTitle4 : 'Suporte Exclusivo 24h: '} </h6></span>
                            {gridSubtitle4 ? gridSubtitle4 : 'forneceremos acompanhamento e suporte dedicado direto pela nossa plataforma exclusiva de atendimento ao cliente.'}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
    )
}

export default IncludedGrid4;