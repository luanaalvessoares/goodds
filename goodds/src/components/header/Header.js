import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../assets/images/logo.webp';
import navicon1 from '../../assets/images/navicon-1.webp';
import navicon2 from '../../assets/images/navicon-2.webp';
import navicon3 from '../../assets/images/navicon-3.webp';
import navicon4 from '../../assets/images/navicon-4.webp';

function Header() {
    const [openMenuItem, setOpenMenuItem] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    useEffect(() => {
      if (!isMenuOpen) {
        setOpenMenuItem(null);
      }
    }, [isMenuOpen]);

  return (
      <header className="header">
        <nav className="nav navContainer">
          <div className="navData">
            <Link to="/" className="navLogo">
              <img src={logo} alt="logo"/>
            </Link>

              <div className="navToggle" id="navToggle" onClick={toggleMenu}>
              {isMenuOpen ?
                  (<i className="ri-close-line navToggleClose"></i>) :
                  (<i className="ri-menu-line navToggleMenu"></i>)
              }
            </div>

          </div>

          <div className={`navMenu ${isMenuOpen ? 'showMenu' : ''}`} id="navMenu">
            <ul className="navList">

              {/* DROPDOWN DESKTOP */}
              <li className="dropdownItem dropdownItemDesktop">
                <div className="navLink dropdownButton">
                  Serviços <i className="ri-arrow-down-s-line dropdownArrow"></i>
                </div>

                <div className="dropdownContainer">
                  <div className="dropdownContent">
                      
                      <div className="dropdownGroup">
                          <div className="dropdownIcon">
                              <img src={navicon1} alt=""/>
                              <span className="dropdownTitle">Criação de Loja Virtual</span>
                          </div>

                          <ul className="dropdownList">
                              <li>
                                  <Link to="/loja-virtual" className="dropdownLink">Loja Virtual Tradicional</Link>
                              </li>
                              <li>
                                  <Link to="/dropshipping" className="dropdownLink">Loja Dropshipping Nacional</Link>
                              </li>
                              <li>
                                  <Link to="/dropshipping-global" className="dropdownLink">Loja Dropshipping Global</Link>
                              </li>
                              <li>
                                  <Link to="/dropshipping-latam" className="dropdownLink">Loja Dropshipping Latam</Link>
                              </li>
                              <li>
                                  <Link to="/dropshipping-print-on-demand" className="dropdownLink">Loja Dropshipping Print on Demand</Link>
                              </li>
                          </ul>
                      </div>
                      
                      <div className="dropdownGroup">
                          <div className="dropdownIcon">
                              <img src={navicon2} alt=""/>
                              <span className="dropdownTitle">Criação de Site</span>
                          </div>
      
                          <ul className="dropdownList">
                              <li>
                                  <Link to="/website-institucional" className="dropdownLink">Website Institucional</Link>
                              </li>
                              <li>
                                  <Link to="/landing-page" className="dropdownLink">Landing Page</Link>
                              </li>
                              <li>
                                  <Link to="/blog" className="dropdownLink">Blog</Link>
                              </li>
                          </ul>
                      </div>
                      
                      <div className="dropdownGroup">
                          <div className="dropdownIcon">
                              <img src={navicon3} alt=""/>
                              <span className="dropdownTitle">Marketing</span>
                          </div>
      
                          <ul className="dropdownList">
                              <li>
                                  <Link to="/marketing-loja-virtual" className="dropdownLink">Marketing Loja Virtual</Link>
                              </li>
                              <li>
                                  <Link to="/marketing-loja-dropshipping" className="dropdownLink">Marketing Loja Dropshipping</Link>
                              </li>
                          </ul>
                      </div>
                      
                      <div className="dropdownGroup">
                          <div className="dropdownIcon">
                              <img src={navicon4} alt=""/>
                              <span className="dropdownTitle">Serviços Extras</span>
                          </div>
      
                          <ul className="dropdownList">
                            <li>
                                <Link to="/pacote-lancamento-loja" className="dropdownLink">Pacote Lançamento de Loja</Link>
                            </li>
                            <li>
                                <Link to="/mineracao-produtos-dropshipping" className="dropdownLink">Mineração de Produtos Dropshipping</Link>
                            </li>
                            <li>
                                <Link to="/consultorias" className="dropdownLink">Consultorias</Link>
                            </li>
                            <li>
                                <Link to="/posts-instagram" className="dropdownLink">Posts Instagram</Link>
                            </li>
                            <li>
                                <Link to="/criacao-logo" className="dropdownLink">Criação de Logo</Link>
                            </li>
                            <li>
                                <Link to="/banners-loja" className="dropdownLink">Banners para Loja</Link>
                            </li>
                            <li>
                                <Link to="/artes-anuncios" className="dropdownLink">Artes para Anúncio</Link>
                            </li>
                            <li>
                                <Link to="/videos-curtos-reels" className="dropdownLink">Vídeos Curtos e Reels</Link>
                            </li>
                          </ul>
                      </div>

                  </div>
                </div>
              </li>
              

              {/* DROPDOWN MOBILE 1 */}
              <li className={`dropdownItem dropdownItemMobile ${openMenuItem === 1 ? 'showDropdown' : ''}`}>
                <div className="navLink dropdownButton" onClick={() => toggleItem(1)}>
                  <span>
                      <img src={navicon1} alt="" width="35"/>
                      Criação de Loja Virtual
                  </span>
                  <i className="ri-arrow-down-s-line dropdownArrow"></i>
                </div>

                <div className="dropdownContainer">
                  <div className="dropdownContent">
                    <div className="dropdownGroup">

                      <ul className="dropdownList">
                          <li>
                              <Link to="/loja-virtual" className="dropdownLink dropdownLinkDecoration">Loja Virtual</Link>
                          </li>
                          <li>
                              <Link to="/dropshipping" className="dropdownLink dropdownLinkDecoration">Loja Dropshipping Nacional</Link>
                          </li>
                          <li>
                              <Link to="/dropshipping-global" className="dropdownLink dropdownLinkDecoration">Loja Dropshipping Global</Link>
                          </li>
                          <li>
                              <Link to="/dropshipping-latam" className="dropdownLink dropdownLinkDecoration">Loja Dropshipping Latam</Link>
                          </li>
                          <li>
                              <Link to="/dropshipping-print-on-demand" className="dropdownLink dropdownLinkDecoration">Loja Dropshipping Print on Demand</Link>
                          </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>


              {/* DROPDOWN MOBILE 2 */}
              <li className={`dropdownItem dropdownItemMobile ${openMenuItem === 2 ? 'showDropdown' : ''}`}>
                <div className="navLink dropdownButton" onClick={() => toggleItem(2)}>
                  <span>
                      <img src={navicon2} alt="" width="35"/>
                      Criação de Site
                  </span>
                  <i className="ri-arrow-down-s-line dropdownArrow"></i>
                </div>

                <div className="dropdownContainer">
                  <div className="dropdownContent">
                    <div className="dropdownGroup">

                      <ul className="dropdownList">
                        <li>
                          <Link to="/website-institucional" className="dropdownLink dropdownLinkDecoration">Website Institucional</Link>
                        </li>
                        <li>
                          <Link to="/landing-page" className="dropdownLink dropdownLinkDecoration">Landing Page</Link>
                        </li>
                        <li>
                          <Link to="/blog" className="dropdownLink dropdownLinkDecoration">Blog</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>


              {/* DROPDOWN MOBILE 3 */}
              <li className={`dropdownItem dropdownItemMobile ${openMenuItem === 3 ? 'showDropdown' : ''}`}>
                <div className="navLink dropdownButton" onClick={() => toggleItem(3)}>
                  <span>
                      <img src={navicon3} alt="" width="35"/>
                      Marketing
                  </span>
                  <i className="ri-arrow-down-s-line dropdownArrow"></i>
                </div>

                <div className="dropdownContainer">
                  <div className="dropdownContent">
                    <div className="dropdownGroup">

                      <ul className="dropdownList">
                        <li>
                          <Link to="/marketing-loja-virtual" className="dropdownLink dropdownLinkDecoration">Marketing Loja Virtual</Link>
                        </li>
                        <li>
                          <Link to="/marketing-loja-dropshipping" className="dropdownLink dropdownLinkDecoration">Marketing Loja Dropshipping</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>


              {/* DROPDOWN MOBILE 4 */}
              <li className={`dropdownItem dropdownItemMobile ${openMenuItem === 4 ? 'showDropdown' : ''}`}>
                <div className="navLink dropdownButton" onClick={() => toggleItem(4)}>
                  <span>
                      <img src={navicon4} alt="" width="35"/>
                      Serviços Extras
                  </span>
                  <i className="ri-arrow-down-s-line dropdownArrow"></i>
                </div>

                <div className="dropdownContainer">
                  <div className="dropdownContent">
                    <div className="dropdownGroup">

                      <ul className="dropdownList">
                        <li>
                            <Link to="/pacote-lancamento-loja" className="dropdownLink dropdownLinkDecoration">Pacote Lançamento de Loja</Link>
                        </li>
                        <li>
                            <Link to="/mineracao-produtos-dropshipping" className="dropdownLink dropdownLinkDecoration">Mineração de Produtos Dropshipping</Link>
                        </li>
                        <li>
                            <Link to="/consultorias" className="dropdownLink dropdownLinkDecoration">Consultorias</Link>
                        </li>
                        <li>
                            <Link to="/posts-instagram" className="dropdownLink dropdownLinkDecoration">Posts Instagram</Link>
                        </li>
                        <li>
                            <Link to="/criacao-logo" className="dropdownLink dropdownLinkDecoration">Criação de Logo</Link>
                        </li>
                        <li>
                            <Link to="/banners-loja" className="dropdownLink dropdownLinkDecoration">Banners para Loja</Link>
                        </li>
                        <li>
                            <Link to="/artes-anuncios" className="dropdownLink dropdownLinkDecoration">Artes para Anúncio</Link>
                        </li>
                        <li>
                            <Link to="/videos-curtos-reels" className="dropdownLink dropdownLinkDecoration">Vídeos Curtos e Reels</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

            </ul>
          </div>

          <div className="navCallToAction">
            <a className="btnCallToAction" href="#!">
              Equipe de Vendas
            </a>
          </div>
        </nav>
      </header>
  );
}

export default Header;
