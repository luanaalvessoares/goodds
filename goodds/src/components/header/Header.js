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
import navicon8 from '../../assets/images/navicon-8.webp';
import ImageDropGlobal from '../../assets/images/drop-global-menu.webp';

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
                              <span className={styles.dropdownTitle}>Criação e Desenvolvimento</span>
                          </div>

                          <ul className={styles.dropdownList}>
                              <li>
                                  <Link to="/dropshipping" className={styles.dropdownLink}>
                                    Loja Dropshipping
                                    <span className={styles.menuSubtitle}>Venda Sem Estoque</span>
                                  </Link>
                              </li>
                              <li>
                                  <Link to="/loja-virtual" className={styles.dropdownLink}>
                                    Loja Virtual Tradicional
                                    <span className={styles.menuSubtitle}>Desenvolvimento de E-commerce</span>
                                  </Link>
                              </li>
                              <li>
                                  <Link to="/print-on-demand" className={styles.dropdownLink}>
                                  Loja Print-on-Demand
                                    <span className={styles.menuSubtitle}>Produtos Personalizados Sob Demanda</span>
                                  </Link>
                              </li>
                              {/* <li>
                                  <Link to="/website-institucional" className={`${styles.dropdownLink} ${styles.itemEmBreve}`}>
                                    Website Institucional
                                    <span className={styles.menuSubtitle}>Criação de Site</span>
                                    <span className={styles.emBreve}>EM BREVE</span>
                                  </Link>
                              </li> */}
                              {/* <li>
                                  <Link to="/landing-page" className={`${styles.dropdownLink} ${styles.itemEmBreve}`}>
                                    Landing Page
                                    <span className={styles.menuSubtitle}>Páginas Personalizadas</span>
                                    <span className={`${styles.emBreve} ${styles.emBreveBlog}`}>EM BREVE</span>
                                  </Link>
                              </li> */}
                              {/* <li>
                                  <Link to="/blog" className={`${styles.dropdownLink} ${styles.itemEmBreve}`}>
                                    Criação de Blog
                                    <span className={styles.menuSubtitle}>Publique Ideias</span>
                                    <span className={styles.emBreve}>EM BREVE</span>
                                  </Link>
                              </li> */}
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
                                    Marketing
                                    <span className={styles.menuSubtitle}>Anúncios Patrocinados</span>
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
                              {/* <li>
                                  <Link to="/pacote-lancamento-loja"  className={`${styles.dropdownLink} ${styles.itemEmBreve}`}>
                                      Pacote Lançamento de Loja
                                      <span className={styles.menuSubtitle}>Sua Loja no Ar</span>
                                    <span className={styles.emBreve}>EM BREVE</span>
                                  </Link>
                              </li> */}
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

                      <div className={styles.dropdownGroup}>
                          <div className={styles.dropdownIcon}>
                              <img src={navicon2} alt=""/>
                              <span className={styles.dropdownTitle}>Dropshipping Global 2 em 1</span>
                          </div>
      
                          <ul className={styles.dropdownList}>
                            <li>
                                <Link to="venda-todos-os-dias" className={styles.dropdownLink}>
                                  <img src={ImageDropGlobal} alt="" className={styles.imageDropMenu} />
                                </Link>
                            </li>
                          </ul>
                      </div>

                  </div>

                  <div className={styles.ctaHeaderDesktop}>
                    <h4>Venda todos os dias</h4>
                    <Link to="/contato"><span>Falar com um especialista</span></Link>
                  </div>
                </div>
              </li>

              {/* DROPDOWN DESKTOP 2 */}
              <li className={`${styles.dropdownItem} ${styles.dropdownItemDesktop}`}>
                <Link to="/venda-todos-os-dias" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                  <div className={`${styles.navLink} ${styles.dropdownButton}`}>
                    Promoção Drop 2 em 1
                  </div>
                </Link>
              </li>

              {/* DROPDOWN DESKTOP 3 */}
              <li className={`${styles.dropdownItem} ${styles.dropdownItemDesktop}`}>
                <Link to="https://bloggoodds.com.br/" target="_blank" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                  <div className={`${styles.navLink} ${styles.dropdownButton}`}>
                    O que há de novo
                  </div>
                </Link>
              </li>
              
              {/* DROPDOWN DESKTOP 4
              <li className={`${styles.dropdownItem} ${styles.dropdownItemDesktop}`}>
                <Link to="/gratuito" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                  <div className={`${styles.navLink} ${styles.dropdownButton}`}>
                    Gratuito
                  </div>
                </Link>
              </li> */}



              {/* DROPDOWN MOBILE 1 */}
              <li className={`${styles.dropdownItem} ${styles.dropdownItemMobile} ${openMenuItem === 1 ? `${styles.showDropdown}` : ''}`}>
                <div className={`${styles.navLink} ${styles.dropdownButton}`} onClick={() => toggleItem(1)}>
                  <span>
                      <img src={navicon1} alt="" width="35"/>
                      Criação e Desenvolvimento
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
                        
                        <Link to="/loja-virtual" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Loja Virtual Tradicional</span>
                            <span className={styles.menuSubtitle}>Desenvolvimento de E-commerce</span>
                          </li>
                        </Link>
                        
                        <Link to="/print-on-demand" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <span>Loja Print-on-Demand</span>
                            <span className={styles.menuSubtitle}>Produtos Personalizados Sob Demanda</span>
                          </li>
                        </Link>

                        {/* <Link to="/website-institucional" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration} ${styles.linkEmBreve}`}>
                          <li>
                            <span className={`${styles.itemEmBreve} ${styles.itemEmBreveMobile}`}>
                              Website Institucional
                              <span className={`${styles.emBreve}`}>EM BREVE</span>
                            </span>
                            <span className={styles.menuSubtitle}>Criação de Site</span>
                          </li>
                        </Link> */}


                        {/* <Link to="/landing-page" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration} ${styles.linkEmBreve}`}>
                          <li>
                            <span className={`${styles.itemEmBreve} ${styles.itemEmBreveMobile}`}>
                              Landing Page
                              <span className={`${styles.emBreve}`}>EM BREVE</span>
                            </span>
                            <span className={styles.menuSubtitle}>Páginas Personalizadas</span>
                          </li>
                        </Link> */}

                        {/* <Link to="/blog" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration} ${styles.linkEmBreve}`}>
                          <li>
                            <span className={`${styles.itemEmBreve} ${styles.itemEmBreveMobile}`}>
                              Criação de Blog
                              <span className={`${styles.emBreve}`}>EM BREVE</span>
                            </span>
                            <span className={styles.menuSubtitle}>Publique Ideias</span>
                          </li>
                        </Link> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>


              {/* DROPDOWN MOBILE 2 */}
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

                        {/* <Link to="/pacote-lancamento-loja" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration} ${styles.linkEmBreve}`}>
                          <li>
                            <span className={`${styles.itemEmBreve} ${styles.itemEmBreveMobile}`}>
                              Pacote Lançamento de Loja
                              <span className={`${styles.emBreve}`}>EM BREVE</span>
                            </span>
                            <span className={styles.menuSubtitle}>Sua Loja no Ar</span>
                          </li>
                        </Link> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>


              {/* DROPDOWN MOBILE 3 */}
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

              {/* DROPDOWN MOBILE 4
              <li className={`${styles.dropdownItem} ${styles.dropdownItemMobile}`}>
                <div className={`${styles.navLink} ${styles.dropdownButton}`}>
                  <span>
                    <Link className={styles.newsLinks} to="/plataformas">
                        <img src={navicon7} alt="" width="35"/>
                        Plataformas 
                    </Link>
                  </span>
                </div>
              </li> */}


              {/* DROPDOWN MOBILE 5 */}
              <li className={`${styles.dropdownItem} ${styles.dropdownItemMobile}`}>
                <div className={`${styles.navLink} ${styles.dropdownButton}`}>
                  <span>
                    <Link className={styles.newsLinks} to="/venda-todos-os-dias">
                        <img src={navicon5} alt="" width="35"/>
                        Promoção Drop 2 em 1
                    </Link>
                  </span>
                </div>
              </li>


              {/* DROPDOWN MOBILE 6 */}
              <li className={`${styles.dropdownItem} ${styles.dropdownItemMobile}`}>
                <div className={`${styles.navLink} ${styles.dropdownButton}`}>
                  <span>
                    <Link className={styles.newsLinks} to="https://bloggoodds.com.br/">
                        <img src={navicon6} alt="" width="35"/>
                        O que há de novo
                    </Link>
                  </span>
                </div>
              </li>

              
              {/* DROPDOWN MOBILE 7
              <li className={`${styles.dropdownItem} ${styles.dropdownItemMobile}`}>
                <div className={`${styles.navLink} ${styles.dropdownButton}`}>
                  <span>
                    <Link className={styles.newsLinks} to="/gratuito">
                        <img src={navicon8} alt="" width="35"/>
                        Gratuito
                    </Link>
                  </span>
                </div>
              </li> */}


              <li className={`${styles.dropdownItem} ${styles.dropdownItemMobile} ${styles.imageDropGlobalMobile}`}>
                <div className={`${styles.navLink} ${styles.dropdownButton}`}>
                    <span>
                      <Link className={styles.newsLinks} to="/dropshipping">
                          <img src={navicon4} alt="" width="35"/>
                          Dropshipping Global
                      </Link>                        
                    </span>
                </div>

                <div>
                  <div className={styles.dropdownContent}>
                    <div>

                      <ul className={styles.dropdownList}>

                        <Link to="/venda-todos-os-dias" className={`${styles.dropdownLink} ${styles.dropdownLinkDecoration}`}>
                          <li>
                            <img src={ImageDropGlobal} alt="" className={styles.imageDropMenu} />
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
                <Link to="/contato"><span>Falar com um especialista</span></Link>
              </div>

          </div>

          <div className={styles.navCallToAction}>
            <Link className={styles.btnCallToAction} to="/contato">
              Equipe de Vendas
            </Link>
          </div>

        </nav>
      </header>
  );
}

export default Header;
