import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css'
import logo from '../../assets/images/logo.webp';
import navicon1 from '../../assets/images/navicon-1.webp';
import navicon2 from '../../assets/images/navicon-2.webp';
import navicon3 from '../../assets/images/navicon-3.webp';
import navicon4 from '../../assets/images/navicon-4.webp';
import ContactModal from '../contact-modal/ContactModal';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenuItem, setOpenMenuItem] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleItem = (item) => {
    if (item === openMenuItem) {
      setOpenMenuItem(null);
    } else {
      setOpenMenuItem(item);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
      setIsMenuOpen(false);
      setOpenMenuItem(null);
      setIsHovered(false);
  }, [location]);

  // Open Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função para abrir o modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
      <header className={styles.header}>
        <nav className={`${styles.nav} ${styles.navContainer}`}>
          <div className={styles.navData}>
            <Link to="/" className={styles.navLogo}>
              <img src={logo} alt="logo"/>
            </Link>

              <div className={styles.navToggle} id="navToggle" onClick={toggleMenu}>
              {isMenuOpen ?
                  (<i className={`ri-close-line ${styles.navToggleClose}`}></i>) :
                  (<i className={`ri-menu-line ${styles.navToggleMenu}`}></i>)
              }
            </div>

          </div>

          <div className={`${styles.navMenu} ${isMenuOpen ? `${styles.showMenu}` : ''}`} id="navMenu">
            <ul className={styles.navList}>

              {/* DROPDOWN DESKTOP */}
              <li className={`${styles.dropdownItem} ${styles.dropdownItemDesktop} ${isHovered ? `${styles.dropdownDesktop}` : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className={`${styles.navLink} ${styles.dropdownButton}`}>
                  Serviços <i className={`ri-arrow-down-s-line ${styles.dropdownArrow}`}></i>
                </div>

                <div className={styles.dropdownContainer}>
                  <div className={styles.dropdownContent}>
                      
                      <div className={styles.dropdownGroup}>
                          <div className={styles.dropdownIcon}>
                              <img src={navicon1} alt=""/>
                              <span className={styles.dropdownTitle}>Criação de Loja Virtual</span>
                          </div>

                          <ul className={styles.dropdownList}>
                              <li>
                                  <Link to="/loja-virtual" className={styles.dropdownLink}>
                                    Loja Virtual Tradicional
                                    <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                                  </Link>
                              </li>
                              <li>
                                  <Link to="/dropshipping" className={styles.dropdownLink}>
                                    Loja Dropshipping Nacional
                                    <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                                  </Link>
                              </li>
                              <li>
                                  <Link to="/dropshipping-global" className={styles.dropdownLink}>
                                    Loja Dropshipping Global
                                    <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                                    </Link>
                              </li>
                              <li>
                                  <Link to="/dropshipping-latam" className={styles.dropdownLink}>
                                    Loja Dropshipping Latam
                                    <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                                  </Link>
                              </li>
                              <li>
                                  <Link to="/dropshipping-print-on-demand" className={styles.dropdownLink}>
                                    Loja Dropshipping Print on Demand
                                    <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                                  </Link>
                              </li>
                          </ul>
                      </div>
                      
                      <div className={styles.dropdownGroup}>
                          <div className={styles.dropdownIcon}>
                              <img src={navicon2} alt=""/>
                              <span className={styles.dropdownTitle}>Criação de Site</span>
                          </div>
      
                          <ul className={styles.dropdownList}>
                              <li>
                                  <Link to="/website-institucional" className={styles.dropdownLink}>
                                    Website Institucional
                                    <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                                  </Link>
                              </li>
                              <li>
                                  <Link to="/landing-page" className={styles.dropdownLink}>
                                    Landing Page
                                    <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                                  </Link>
                              </li>
                              <li>
                                  <Link to="/blog" className={styles.dropdownLink}>
                                    Blog
                                    <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                                  </Link>
                              </li>
                          </ul>
                      </div>
                      
                      <div className={styles.dropdownGroup}>
                          <div className={styles.dropdownIcon}>
                              <img src={navicon3} alt=""/>
                              <span className={styles.dropdownTitle}>Marketing</span>
                          </div>
      
                          <ul className={styles.dropdownList}>
                              <li>
                                  <Link to="/marketing-loja-virtual" className={styles.dropdownLink}>
                                    Marketing Loja Virtual
                                    <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                                  </Link>
                              </li>
                              <li>
                                  <Link to="/marketing-loja-dropshipping" className={styles.dropdownLink}>
                                    Marketing Loja Dropshipping
                                    <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                                  </Link>
                              </li>
                          </ul>
                      </div>
                      
                      <div className={styles.dropdownGroup}>
                          <div className={styles.dropdownIcon}>
                              <img src={navicon4} alt=""/>
                              <span className={styles.dropdownTitle}>Serviços Extras</span>
                          </div>
      
                          <ul className={styles.dropdownList}>
                            <li>
                                <Link to="/pacote-lancamento-loja" className={styles.dropdownLink}>
                                    Pacote Lançamento de Loja
                                    <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/mineracao-produtos-dropshipping" className={styles.dropdownLink}>
                                    Mineração de Produtos Dropshipping
                                    <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/consultorias" className={styles.dropdownLink}>
                                    Consultorias
                                    <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/posts-instagram" className={styles.dropdownLink}>
                                    Posts Instagram
                                    <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/criacao-logo" className={styles.dropdownLink}>
                                    Criação de Logo
                                    <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/banners-loja" className={styles.dropdownLink}>
                                    Banners para Loja
                                    <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/artes-anuncios" className={styles.dropdownLink}>
                                    Artes para Anúncio
                                    <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/videos-curtos-reels" className={styles.dropdownLink}>
                                    Vídeos Curtos e Reels
                                    <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                                </Link>
                            </li>
                          </ul>
                      </div>

                  </div>

                  <div className={styles.ctaHeaderDesktop}>
                    <h4>Venda todos os dias</h4>
                    <a href="#!" target="_blank"><span>Falar com um especialista</span></a>
                  </div>
                </div>
              </li>

              {/* DROPDOWN DESKTOP 2 */}
              <li className={`${styles.dropdownItem} ${styles.dropdownItemDesktop}`}>
                <Link to="/venda-todos-os-dias" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                  <div className={`${styles.navLink} ${styles.dropdownButton}`}>
                    Promo de Black
                  </div>
                </Link>
              </li>

              {/* DROPDOWN DESKTOP 2 */}
              <li className={`${styles.dropdownItem} ${styles.dropdownItemDesktop}`}>
                <Link to="#!" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                  <div className={`${styles.navLink} ${styles.dropdownButton}`}>
                    O que há de novo
                  </div>
                </Link>
              </li>
              

              {/* DROPDOWN MOBILE 1 */}
              <li className={`${styles.dropdownItem} ${styles.dropdownItemMobile} ${openMenuItem === 1 ? `${styles.showDropdown}` : ''}`}>
                <div className={`${styles.navLink} ${styles.dropdownButton}`} onClick={() => toggleItem(1)}>
                  <span>
                      <img src={navicon1} alt="" width="35"/>
                      Criação de Loja Virtual
                  </span>
                  <i className={`ri-arrow-down-s-line ${styles.dropdownArrow}`}></i>
                </div>

                <div className={styles.dropdownContainer}>
                  <div className={styles.dropdownContent}>
                    <div className={styles.dropdownGroup}>

                      <ul className={styles.dropdownList}>
                        <Link to="/loja-virtual" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Loja Virtual</span>
                            <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                          </li>
                        </Link>

                        <Link to="/dropshipping" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Loja Dropshipping Nacional</span>
                            <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                          </li>
                        </Link>

                        <Link to="/dropshipping-global" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Loja Dropshipping Global</span>
                            <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                          </li>
                        </Link>

                        <Link to="/dropshipping-latam" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Loja Dropshipping Latam</span>
                            <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                          </li>
                        </Link>

                        <Link to="/dropshipping-print-on-demand" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Loja Dropshipping Print on Demand</span>
                            <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>


              {/* DROPDOWN MOBILE 2 */}
              <li className={`${styles.dropdownItem} ${styles.dropdownItemMobile} ${openMenuItem === 2 ? `${styles.showDropdown}` : ''}`}>
                <div className={`${styles.navLink} ${styles.dropdownButton}`} onClick={() => toggleItem(2)}>
                  <span>
                      <img src={navicon2} alt="" width="35"/>
                      Criação de Site
                  </span>
                  <i className={`ri-arrow-down-s-line ${styles.dropdownArrow}`}></i>
                </div>

                <div className={styles.dropdownContainer}>
                  <div className={styles.dropdownContent}>
                    <div className={styles.dropdownGroup}>

                      <ul className={styles.dropdownList}>
                        <Link to="/website-institucional" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Website Institucional</span>
                            <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                          </li>
                        </Link>

                        <Link to="/landing-page" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Landing Page</span>
                            <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                          </li>
                        </Link>

                        <Link to="/blog" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Blog</span>
                            <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>


              {/* DROPDOWN MOBILE 3 */}
              <li className={`${styles.dropdownItem} ${styles.dropdownItemMobile} ${openMenuItem === 3 ? `${styles.showDropdown}` : ''}`}>
                <div className={`${styles.navLink} ${styles.dropdownButton}`} onClick={() => toggleItem(3)}>
                  <span>
                      <img src={navicon3} alt="" width="35"/>
                      Marketing
                  </span>
                  <i className={`ri-arrow-down-s-line ${styles.dropdownArrow}`}></i>
                </div>

                <div className={styles.dropdownContainer}>
                  <div className={styles.dropdownContent}>
                    <div className={styles.dropdownGroup}>

                      <ul className={styles.dropdownList}>
                        <Link to="/marketing-loja-virtual" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Marketing Loja Virtual</span>
                            <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                          </li>
                        </Link>

                        <Link to="/marketing-loja-dropshipping" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Marketing Loja Dropshipping</span>
                            <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>


              {/* DROPDOWN MOBILE 4 */}
              <li className={`${styles.dropdownItem} ${styles.dropdownItemMobile} ${openMenuItem === 4 ? `${styles.showDropdown}` : ''}`}>
                <div className={`${styles.navLink} ${styles.dropdownButton}`} onClick={() => toggleItem(4)}>
                  <span>
                      <img src={navicon4} alt="" width="35"/>
                      Serviços Extras
                  </span>
                  <i className={`ri-arrow-down-s-line ${styles.dropdownArrow}`}></i>
                </div>

                <div className={styles.dropdownContainer}>
                  <div className={styles.dropdownContent}>
                    <div className={styles.dropdownGroup}>

                      <ul className={styles.dropdownList}>
                        <Link to="/pacote-lancamento-loja" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Pacote Lançamento de Loja</span>
                            <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                          </li>
                        </Link>

                        <Link to="/mineracao-produtos-dropshipping" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Mineração de Produtos Dropshipping</span>
                            <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                          </li>
                        </Link>

                        <Link to="/consultorias" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Consultorias</span>
                            <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                          </li>
                        </Link>

                        <Link to="/posts-instagram" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Posts Instagram</span>
                            <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                          </li>
                        </Link>

                        <Link to="/criacao-logo" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Criação de Logo</span>
                            <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                          </li>
                        </Link>

                        <Link to="/banners-loja" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Banners para Loja</span>
                            <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                          </li>
                        </Link>

                        <Link to="/artes-anuncios" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Artes para Anúncio</span>
                            <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                          </li>
                        </Link>

                        <Link to="/videos-curtos-reels" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Vídeos Curtos e Reels</span>
                            <span className={styles.menuSubtitle}>Subtítulo do Menu</span>
                          </li>
                        </Link>

                      </ul>
                    </div>
                  </div>
                </div>
              </li>



            </ul>

              <div className={styles.ctaHeaderMobile}>
                <h4>Comece a vender com a Goodds</h4>
                <a href="#!" target="_blank"><span>Falar com um especialista</span></a>
              </div>

          </div>

          <div className={styles.navCallToAction}>
            <a className={styles.btnCallToAction} onClick={openModal}>
              Equipe de Vendas
            </a>
            <ContactModal isOpen={isModalOpen} onRequestClose={closeModal} />
          </div>

        </nav>
      </header>
  );
}

export default Header;
