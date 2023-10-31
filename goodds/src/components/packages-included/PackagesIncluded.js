import React from 'react';
import styles from './PackagesIncluded.module.css';
import PackagesData from './PackagesData';
import RiCheckboxCircleLine from 'remixicon-react/CheckboxCircleLineIcon'

function PackagesIncluded(props) {
    const list1 = PackagesData[0];
    const list2 = PackagesData[1];
    const list3 = PackagesData[2];

    return (
        <section className={styles.listPackageContainer}>
            <h2>Incluso em todos os projetos de {props.titleIncludedPackage} da Goodds:</h2>
            <div className={styles.listPackage}>
                <div className={styles.listChild}>
                    <div className={styles.listPackageContent}>
                        <ul>
                        {list1.map((item, index) => (
                            <li key={index}>
                                <span><RiCheckboxCircleLine /></span>
                                {item}
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>


                <div className={styles.listChild}>
                    <div className={styles.listPackageContent}>
                        <ul>
                        {list2.map((item, index) => (
                            <li key={index}>
                                <span><RiCheckboxCircleLine /></span>
                                {item}
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>

                
                <div className={styles.listChild}>
                    <div className={styles.listPackageContent}>
                        <ul>
                        {list3.map((item, index) => (
                            <li key={index}>
                                <span><RiCheckboxCircleLine /></span>
                                {item}
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>            
        </section>

    )
}

export default PackagesIncluded;