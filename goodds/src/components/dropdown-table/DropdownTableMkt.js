import React, { useState } from 'react';
import styles from './DropdownTable.module.css';
import PackagesIncluded from '../packages-included/PackagesIncluded';
import RiArrowDownSLine from 'remixicon-react/ArrowDownSLineIcon';
import RiCheckFill from 'remixicon-react/CheckFillIcon';
import TableIcon1 from '../../assets/images/tableicon-1.webp';


function DropdownTableMkt(props) {
    const table1 = [
        {
            servicePackageTitle: "Budget Mensal",
            servicePackageDescription: "Não incluso no serviço",
            packageValue1: "R$ 1.500",
            packageValue2: "R$ 8.000",
        },
        {
            servicePackageTitle: "Anúncios Facebook",
            servicePackageDescription: "",
            packageValue1: "1",
            packageValue2: "Ilimitados",
        },
        {
            servicePackageTitle: "Anúncios Instagram",
            servicePackageDescription: "",
            packageValue1: "1",
            packageValue2: "Ilimitados",
        },
        {
            servicePackageTitle: "Campanha Google Rede de Pesquisa",
            servicePackageDescription: "",
            packageValue1: "",
            packageValue2: "Ilimitado",
        },
        {
            servicePackageTitle: "Campanha Google Shopping",
            servicePackageDescription: "",
            packageValue1: "",
            packageValue2: "Ilimitado",
        },
        {
            servicePackageTitle: "Banners Promocionais",
            servicePackageDescription: "",
            packageValue1: "",
            packageValue2: "5",
        },
        {
            servicePackageTitle: "Criação de Artes para Campanhas",
            servicePackageDescription: "",
            packageValue1: "",
            packageValue2: "Ilimitado",
        },
        {
            servicePackageTitle: "Planejamento de Público e Segmentação",
            servicePackageDescription: "",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Pesquisa de Mercado",
            servicePackageDescription: "",
            packageValue1: "",
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Definição de Persona",
            servicePackageDescription: "",
            packageValue1: "",
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Relatórios de Alcance",
            servicePackageDescription: "",
            packageValue1: "Básico",
            packageValue2: "Personalizado",
        },
        {
            servicePackageTitle: "Acompanhamento Especializado",
            servicePackageDescription: "",
            packageValue1: "",
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Gerente de Conta Dedicado",
            servicePackageDescription: "",
            packageValue1: "",
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Equipe de Marketing",
            servicePackageDescription: "",
            packageValue1: "",
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Reunião Mensal (Video Chamada)",
            servicePackageDescription: "",
            packageValue1: "",
            packageValue2: "2x no mês",
        },
    ];

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <section className={styles.compareTableSection}>
            <h2 onClick={toggleDropdown} className={styles.compareTitle}>
                Compare os Pacotes
                <span>
                    <RiArrowDownSLine  className={`${styles.dropdownArrow} ${isDropdownOpen ? `${styles.open}` : ''}`}/>
                </span>

            </h2>

            {isDropdownOpen && 
                <section>
                    <div id="table1" className={styles.compareContainer}>
                        <div className={styles.tableSlice}>
                            <div className={`${styles.tableRow} ${styles.tableTitle}`}>
                                <div className={`${styles.rowContent} ${styles.itemDescriptionCompare}`}>
                                    <img src={TableIcon1} alt=""/>
                                    <p>Nossos Planos</p>
                                </div>
                                <div className={`${styles.rowContent} ${styles.itemContains}`}>Start</div>
                                <div className={`${styles.rowContent} ${styles.itemContains}`}>Mega</div>
                            </div>
        
                            {table1.map((item, index) => (
                            <div className={styles.tableRow} key={index} id={`item-${item.id ? item.id : index}`}>
                                <div className={`${styles.rowContent} ${styles.itemDescriptionCompare}`}>
                                    <p>{item.servicePackageTitle}</p>
                                    <p>{item.servicePackageDescription}</p>
                                </div>
                                <div className={`${styles.rowContent} ${styles.itemContains}`}>
                                    {item.packageValue1}
                                </div>
                                <div className={`${styles.rowContent} ${styles.itemContains}`}>
                                    {item.packageValue2}
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </section>
            }
        </section>
    )
}

export default DropdownTableMkt;