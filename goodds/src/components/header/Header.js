import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css'
import logo from '../../assets/images/logo.webp';
import navicon1 from '../../assets/images/navicon-1.webp';
import navicon2 from '../../assets/images/navicon-2.webp';
import navicon3 from '../../assets/images/navicon-3.webp';
import navicon4 from '../../assets/images/navicon-4.webp';
import navicon5 from '../../assets/images/navicon-5.webp';
import navicon6 from '../../assets/images/navicon-6.webp';
import navicon7 from '../../assets/images/navicon-7.webp';
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
                                  <Link to="/dropshipping" className={styles.dropdownLink}>
                                    Loja Dropshipping
                                    <span className={styles.menuSubtitle}>Venda Sem Estoque</span>
                                  </Link>
                              </li>
                              <li>
                                  <Link to="/dropshipping-global" className={styles.dropdownLink}>
                                    Loja Dropshipping Global
                                    <span className={styles.menuSubtitle}>Venda na Gringa Sem Estoque</span>
                                    </Link>
                              </li>
                              <li>
                                  <Link to="/dropshipping-latam" className={styles.dropdownLink}>
                                    Loja Dropshipping Latam
                                    <span className={styles.menuSubtitle}>Venda na América Latina Sem Estoque</span>
                                  </Link>
                              </li>
                              <li>
                                  <Link to="/dropshipping-print-on-demand" className={styles.dropdownLink}>
                                    Loja Dropshipping Print on Demand
                                    <span className={styles.menuSubtitle}>Produtos Personalizados Sem Estoque</span>
                                  </Link>
                              </li>
                              <li>
                                  <Link to="/loja-virtual" className={styles.dropdownLink}>
                                    Loja Virtual Tradicional
                                    <span className={styles.menuSubtitle}>Desenvolvimento de E-commerce</span>
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
                                    <span className={styles.menuSubtitle}>Criação de Site</span>
                                  </Link>
                              </li>
                              <li>
                                  <Link to="/landing-page" className={styles.dropdownLink}>
                                    Landing Page
                                    <span className={styles.menuSubtitle}>Páginas Personalizadas</span>
                                  </Link>
                              </li>
                              <li>
                                  <Link to="/blog" className={styles.dropdownLink}>
                                    Criação de Blog
                                    <span className={styles.menuSubtitle}>Publique Ideias</span>
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
                                    <span className={styles.menuSubtitle}>Anúncios Patrocinados</span>
                                  </Link>
                              </li>
                              <li>
                                  <Link to="/pacote-lancamento-loja" className={styles.dropdownLink}>
                                      Pacote Lançamento de Loja
                                      <span className={styles.menuSubtitle}>Sua Loja no Ar</span>
                                  </Link>
                              </li>
                              <li>
                                  <Link to="/posts-instagram" className={styles.dropdownLink}>
                                      Posts para Instagram
                                      <span className={styles.menuSubtitle}>Perfil Profissional</span>
                                  </Link>
                              </li>
                              <li>
                                  <Link to="/artes-anuncios" className={styles.dropdownLink}>
                                      Artes para Anúncio
                                      <span className={styles.menuSubtitle}>Promova seu Produto</span>
                                  </Link>
                              </li>
                              <li>
                                  <Link to="/videos-curtos-reels" className={styles.dropdownLink}>
                                      Vídeos Curtos e Reels
                                      <span className={styles.menuSubtitle}>Engaje nas Redes</span>
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
                                <Link to="/mineracao-produtos-dropshipping" className={styles.dropdownLink}>
                                    Mineração de Produtos
                                    <span className={styles.menuSubtitle}>Produtos para Dropshipping</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/consultorias" className={styles.dropdownLink}>
                                    Consultorias
                                    <span className={styles.menuSubtitle}>Mentoria Especializada</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/criacao-logo" className={styles.dropdownLink}>
                                    Criação de Logo
                                    <span className={styles.menuSubtitle}>Sua Identidade Única</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/banners-loja" className={styles.dropdownLink}>
                                    Banners para Loja
                                    <span className={styles.menuSubtitle}>Criação Personalizada</span>
                                </Link>
                            </li>
                          </ul>
                      </div>

                  </div>

                  <div className={styles.ctaHeaderDesktop}>
                    <h4>Venda todos os dias</h4>
                    <a onClick={openModal}><span>Falar com um especialista</span></a>
                  </div>
                </div>
              </li>

              {/* DROPDOWN DESKTOP 2 */}
              <li className={`${styles.dropdownItem} ${styles.dropdownItemDesktop}`}>
                <Link to="/venda-todos-os-dias" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                  <div className={`${styles.navLink} ${styles.dropdownButton}`}>
                    Drop 2 em 1
                  </div>
                </Link>
              </li>

              {/* DROPDOWN DESKTOP 3 */}
              <li className={`${styles.dropdownItem} ${styles.dropdownItemDesktop}`}>
                <Link to="/plataformas" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                  <div className={`${styles.navLink} ${styles.dropdownButton}`}>
                    Plataformas
                  </div>
                </Link>
              </li>

              {/* DROPDOWN DESKTOP 4 */}
              <li className={`${styles.dropdownItem} ${styles.dropdownItemDesktop}`}>
                <Link to="https://bloggoodds.com.br/" target="_blank" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
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

                        <Link to="/dropshipping" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Loja Dropshipping</span>
                            <span className={styles.menuSubtitle}>Venda Sem Estoque</span>
                          </li>
                        </Link>

                        <Link to="/dropshipping-global" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Loja Dropshipping Global</span>
                            <span className={styles.menuSubtitle}>Venda na Gringa Sem Estoque</span>
                          </li>
                        </Link>

                        <Link to="/dropshipping-latam" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Loja Dropshipping Latam</span>
                            <span className={styles.menuSubtitle}>Venda na América Latina Sem Estoque</span>
                          </li>
                        </Link>

                        <Link to="/dropshipping-print-on-demand" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Loja Dropshipping Print on Demand</span>
                            <span className={styles.menuSubtitle}>Produtos Personalizados Sem Estoque</span>
                          </li>
                        </Link>
                        
                        <Link to="/loja-virtual" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Loja Virtual Tradicional</span>
                            <span className={styles.menuSubtitle}>Desenvolvimento de E-commerce</span>
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
                            <span className={styles.menuSubtitle}>Criação de Site</span>
                          </li>
                        </Link>

                        <Link to="/landing-page" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Landing Page</span>
                            <span className={styles.menuSubtitle}>Páginas Personalizadas</span>
                          </li>
                        </Link>

                        <Link to="/blog" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Blog</span>
                            <span className={styles.menuSubtitle}>Publique Ideias</span>
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
                            <span className={styles.menuSubtitle}>Anúncios Patrocinados</span>
                          </li>
                        </Link>

                        <Link to="/pacote-lancamento-loja" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Pacote Lançamento de Loja</span>
                            <span className={styles.menuSubtitle}>Sua Loja no Ar</span>
                          </li>
                        </Link>

                        <Link to="/posts-instagram" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Posts Instagram</span>
                            <span className={styles.menuSubtitle}>Perfil Profissional</span>
                          </li>
                        </Link>

                        <Link to="/artes-anuncios" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Artes para Anúncio</span>
                            <span className={styles.menuSubtitle}>Promova seu Produto</span>
                          </li>
                        </Link>

                        <Link to="/videos-curtos-reels" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Vídeos Curtos e Reels</span>
                            <span className={styles.menuSubtitle}>Engaje nas Redes</span>
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

                        <Link to="/mineracao-produtos-dropshipping" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Mineração de Produtos</span>
                            <span className={styles.menuSubtitle}>Produtos para Dropshipping</span>
                          </li>
                        </Link>

                        <Link to="/consultorias" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Consultorias</span>
                            <span className={styles.menuSubtitle}>Mentoria Especializada</span>
                          </li>
                        </Link>

                        <Link to="/criacao-logo" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Criação de Logo</span>
                            <span className={styles.menuSubtitle}>Sua Identidade Única</span>
                          </li>
                        </Link>

                        <Link to="/banners-loja" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Banners para Loja</span>
                            <span className={styles.menuSubtitle}>Criação Personalizada</span>
                          </li>
                        </Link>

                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/* DROPDOWN MOBILE 5 */}
              <li className={`${styles.dropdownItem} ${styles.dropdownItemMobile}`}>
                <div className={`${styles.navLink} ${styles.dropdownButton}`}>
                  <span>
                    <Link className={styles.newsLinks} to="/plataformas">
                        <img src={navicon7} alt="" width="35"/>
                        Plataformas 
                    </Link>
                  </span>
                </div>
              </li>


              {/* DROPDOWN MOBILE 6 */}
              <li className={`${styles.dropdownItem} ${styles.dropdownItemMobile}`}>
                <div className={`${styles.navLink} ${styles.dropdownButton}`}>
                  <span>
                    <Link className={styles.newsLinks} to="/venda-todos-os-dias">
                        <img src={navicon5} alt="" width="35"/>
                        Drop 2 em 1
                    </Link>
                  </span>
                </div>
              </li>


              {/* DROPDOWN MOBILE 7 */}
              <li className={`${styles.dropdownItem} ${styles.dropdownItemMobile}`}>
                <div className={`${styles.navLink} ${styles.dropdownButton}`}>
                  <span>
                    <Link className={styles.newsLinks} to="https://goodds.com.br/blog/">
                        <img src={navicon6} alt="" width="35"/>
                        O que há de novo
                    </Link>
                  </span>
                </div>
              </li>


            </ul>

              <div className={styles.ctaHeaderMobile}>
                <h4>Comece a vender com a Goodds</h4>
                <a href="https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista%20em%20E-commerce"><span>Falar com um especialista</span></a>
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
