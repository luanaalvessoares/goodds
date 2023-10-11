import styles from './Header.module.css';
import React, { useState } from 'react';

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);

  const toggleNavMenu = () => {
    setIsActive(!isActive);
    setIsProductsMenuOpen(false); // Fecha o submenu quando o menu principal é clicado
  };

  const toggleProductsMenu = () => {
    setIsProductsMenuOpen(!isProductsMenuOpen);
  };

  return (
    <div className={styles.header}>
      <header>
        <div className={styles.container}>
          <nav className={styles.navigation}>
            <a href="#!" className={styles.logo}>
              <img src={images['logo.svg'].default} alt="Logo" className={styles.logoImg} />
            </a>
            <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
              <li className={`${styles.navList} ${styles.navListMenu}`}>
                <a href="#!" className={styles.navLink} onClick={toggleProductsMenu}>
                  <span>Products</span>
                  <ion-icon name="chevron-down-outline"></ion-icon>
                </a>
                <div className={`${styles.dropdown} ${isProductsMenuOpen ? styles.active : ''}`}>
                  <div className={styles.dropdownInner}>
                    <div className={styles.dropdownItem}>
                      <h3 className={styles.itemHeading}>Products</h3>
                      <div className={styles.itemList}>
                        <div className={styles.itemImg}>
                          <img src="./images/icon-1.svg" alt="Icon" />
                        </div>
                        <div className={styles.itemListInfo}>
                          <h4>Team dashboard</h4>
                          <p>Monitor your metrics.</p>
                        </div>
                      </div>
                      <div className={styles.itemList}>
                        <div className={styles.itemImg}>
                                <img src="./images/icon-2.svg" alt="Icon" />
                        </div>
                        <div className={styles.itemListInfo}>
                            <h4>Limitless segmentation</h4>
                            <p>Surface hidden trends.</p>
                        </div>
                        </div>
                        <div className={styles.itemList}>
                            <div className={styles.itemImg}>
                                <img src="./images/icon-3.svg" alt="Icon" />
                            </div>
                            <div className={styles.itemListInfo}>
                                <h4>Group analytics</h4>
                                <p>Learn about your users</p>
                            </div>
                        </div>
                        <div className={styles.itemList}>
                            <div className={styles.itemImg}>
                                <img src="./images/icon-4.svg" alt="Icon" />
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className={styles.navAction}>
              <a href="#!" className={styles.btnPrimary}>
                Sign up
              </a>
              <div
                className={`${styles.navToggle} ${isActive ? styles.active : ''}`}
                onClick={toggleNavMenu}
              >
                <ion-icon name={isActive ? 'close-outline' : 'menu-outline'}></ion-icon>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
