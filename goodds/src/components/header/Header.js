import React, { useState, useEffect } from 'react';
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
            <a href="#!" className="navLogo">
              <img src={logo} alt="logo"/>
            </a>

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
                                  <a href="#!" className="dropdownLink">Loja Virtual Tradicional</a>
                              </li>
                              <li>
                                  <a href="#!" className="dropdownLink">Loja Dropshipping Nacional</a>
                              </li>
                              <li>
                                  <a href="#!" className="dropdownLink">Loja Dropshipping Global</a>
                              </li>
                              <li>
                                  <a href="#!" className="dropdownLink">Loja Dropshipping Latam</a>
                              </li>
                              <li>
                                  <a href="#!" className="dropdownLink">Loja Dropshipping Print on Demand</a>
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
                                  <a href="#!" className="dropdownLink">Website Institucional</a>
                              </li>
                              <li>
                                  <a href="#!" className="dropdownLink">Landing Page</a>
                              </li>
                              <li>
                                  <a href="#!" className="dropdownLink">Blog</a>
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
                                  <a href="#!" className="dropdownLink">Marketing Loja Virtual</a>
                              </li>
                              <li>
                                  <a href="#!" className="dropdownLink">Marketing Loja Dropshipping</a>
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
                                  <a href="#!" className="dropdownLink">Pacote Lançamento de Loja</a>
                              </li>
                              <li>
                                  <a href="#!" className="dropdownLink">Mineração de Produtos Dropshipping</a>
                              </li>
                              <li>
                                  <a href="#!" className="dropdownLink">Consultorias</a>
                              </li>
                              <li>
                                  <a href="#!" className="dropdownLink">Post Instagram</a>
                              </li>
                              <li>
                                  <a href="#!" className="dropdownLink">Criação de Logo</a>
                              </li>
                              <li>
                                  <a href="#!" className="dropdownLink">Banners para Loja</a>
                              </li>
                              <li>
                                  <a href="#!" className="dropdownLink">Artes para Anúncio</a>
                              </li>
                              <li>
                                  <a href="#!" className="dropdownLink">Vídeos Curtos e Reels</a>
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
                              <a href="#!" className="dropdownLink dropdownLinkDecoration">Loja Virtual</a>
                          </li>
                          <li className="liSubNav">
                              <span className="dropdownLink dropdownLinkDecoration">Loja Dropshipping</span>
                              <div className="listSub">
                                  <ul>
                                      <li>
                                          <a href="#!" className="dropdownLink dropdownLinkDecoration">Loja Dropshipping Nacional</a>
                                      </li>
                                      <li>
                                          <a href="#!" className="dropdownLink dropdownLinkDecoration">Loja Dropshipping Global</a>
                                      </li>
                                      <li>
                                          <a href="#!" className="dropdownLink dropdownLinkDecoration">Loja Dropshipping Latam</a>
                                      </li>
                                      <li>
                                          <a href="#!" className="dropdownLink dropdownLinkDecoration">Loja Dropshipping Print on Demand</a>
                                      </li>
                                  </ul>
                              </div>
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
                          <a href="#!" className="dropdownLink dropdownLinkDecoration">Website Institucional</a>
                        </li>
                        <li>
                          <a href="#!" className="dropdownLink dropdownLinkDecoration">Landing Page</a>
                        </li>
                        <li>
                          <a href="#!" className="dropdownLink dropdownLinkDecoration">Blog</a>
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
                          <a href="#!" className="dropdownLink dropdownLinkDecoration">Marketing Loja Virtual</a>
                        </li>
                        <li>
                          <a href="#!" className="dropdownLink dropdownLinkDecoration">Marketing Loja Dropshipping</a>
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
                              <a href="#!" className="dropdownLink dropdownLinkDecoration">Pacote Lançamento de Loja</a>
                          </li>
                          <li>
                              <a href="#!" className="dropdownLink dropdownLinkDecoration">Mineração de Produtos Dropshipping</a>
                          </li>
                          <li>
                              <a href="#!" className="dropdownLink dropdownLinkDecoration">Consultorias</a>
                          </li>
                          <li>
                              <a href="#!" className="dropdownLink dropdownLinkDecoration">Pacote Post Instagram</a>
                          </li>
                          <li className="liSubNav">
                              <span className="dropdownLink dropdownLinkDecoration">Criação de Artes</span>
                              <div className="listSub">
                                  <ul>
                                      <li>
                                          <a href="#!" className="dropdownLink dropdownLinkDecoration">Logo</a>
                                      </li>
                                      <li>
                                          <a href="#!" className="dropdownLink dropdownLinkDecoration">Banners</a>
                                      </li>
                                      <li>
                                          <a href="#!" className="dropdownLink dropdownLinkDecoration">Post Instagram</a>
                                      </li>
                                      <li>
                                          <a href="#!" className="dropdownLink dropdownLinkDecoration">Artes para Anúncio</a>
                                      </li>
                                      <li>
                                          <a href="#!" className="dropdownLink dropdownLinkDecoration">Vídeos Curtos e Reels</a>
                                      </li>
                                  </ul>
                              </div>
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
