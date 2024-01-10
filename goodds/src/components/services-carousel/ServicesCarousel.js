import React from 'react';
import styles from './ServicesCarousel.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import ArrowRightCircleLine from 'remixicon-react/ArrowRightCircleLineIcon'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

// Images
import ImageVideosCurtos from '../../assets/images/12.webp';
import ImageArtesAnuncios from '../../assets/images/13.webp';
import ImageBannersLoja from '../../assets/images/14.webp';
import ImageCriacaoLogo from '../../assets/images/15.webp';
import ImagePostsInstagram from '../../assets/images/16.webp';
import ImagePacoteLancamento from '../../assets/images/17.webp';
import ImageConsultorias from '../../assets/images/1.webp';
import ImageLojaVirtual from '../../assets/images/2.webp';
import ImageDropshipping from '../../assets/images/3.webp';
import ImageDropGlobal from '../../assets/images/4.webp';
import ImageDropLatam from '../../assets/images/5.webp';
import ImageDropPrint from '../../assets/images/6.webp';
import ImageMineracaoProdutos from '../../assets/images/7.webp';
import ImageMarketingLojaVirtual from '../../assets/images/8.webp';
import ImageLandingPage from '../../assets/images/9.webp';
import ImageWebsiteInstitucional from '../../assets/images/10.webp';
import ImageBlog from '../../assets/images/11.webp';

function ServicesCarousel() {
  return (
    <div className={styles.serviceCarouselSection}>
        <h2>Soluções e Preços</h2>
      <div className={styles.serviceCarouselContainer}>

        <Swiper
          initialSlide={7}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true
          }}
          autoplay={{ delay: 4000 }}
          grabCursor={true}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400:{
              slidesPerView: 1,
            },
            639: {
              slidesPerView: 1,
            },
            865:{
              slidesPerView: 2,
            },
            1000:{
              slidesPerView: 3,
            },
            1500:{
              slidesPerView: 3,
            },
          }}
        >

            <SwiperSlide className={styles.swiperContent}>
              <Link className={styles.serviceButtonContainer} to="/videos-curtos-reels">
                <div className={styles.serviceContent}>
                  <div className={styles.serviceImage}>
                      <img src={ImageVideosCurtos} alt="" />
                  </div>

                  <div className={styles.serviceDescription}>
                      <h2>Vídeos Curtos e Reels</h2>
                      <p>Crie uma conexão instantânea com seu público de forma impactante.</p>
                  </div>

                      <div className={styles.serviceButton}>
                      <div className={styles.arrowContainer}>
                          <span className={styles.btnContent}>Preços</span>
                          <span className={styles.btnIcon}>
                            <ArrowRightCircleLine />
                          </span>
                      </div>
                    </div>
                  </div>                
                </Link>
            </SwiperSlide>

            
            <SwiperSlide className={styles.swiperContent}>
              <Link className={styles.serviceButtonContainer} to="/artes-anuncios">
                <div className={styles.serviceContent}>
                  <div className={styles.serviceImage}>
                      <img src={ImageArtesAnuncios} alt="" />
                  </div>

                  <div className={styles.serviceDescription}>
                      <h2>Artes para Divulgação</h2>
                      <p>Criamos artes para promover o seu produto e a sua marca na internet.</p>
                  </div>

                    <div className={styles.serviceButton}>
                      <div className={styles.arrowContainer}>
                          <span className={styles.btnContent}>Preços</span>
                          <span className={styles.btnIcon}>
                            <ArrowRightCircleLine />
                          </span>
                      </div>
                    </div>
                </div>
              </Link>
          </SwiperSlide>

            
            
            <SwiperSlide className={styles.swiperContent}>
              <Link className={styles.serviceButtonContainer} to="/banners-loja">
                <div className={styles.serviceContent}>
                  <div className={styles.serviceImage}>
                      <img src={ImageBannersLoja} alt="" />
                  </div>

                  <div className={styles.serviceDescription}>
                      <h2>Criação de Banners</h2>
                      <p>Desenvolvemos banners personalizados com design exclusivo para sua marca.</p>
                  </div>

                  <div className={styles.serviceButton}>
                    <div className={styles.arrowContainer}>
                        <span className={styles.btnContent}>Preços</span>
                        <span className={styles.btnIcon}>
                          <ArrowRightCircleLine />
                        </span>
                    </div>
                  </div>
                </div>
              </Link>
          </SwiperSlide>

            
            
            <SwiperSlide className={styles.swiperContent}>
              <Link className={styles.serviceButtonContainer} to="/criacao-logo">
                <div className={styles.serviceContent}>
                  <div className={styles.serviceImage}>
                      <img src={ImageCriacaoLogo} alt="" />
                  </div>

                  <div className={styles.serviceDescription}>
                      <h2>Logo Profissional</h2>
                      <p>Tenha uma identidade visual desenvolvida por uma equipe de especialistas.</p>
                  </div>

                  <div className={styles.serviceButton}>
                    <div className={styles.arrowContainer}>
                        <span className={styles.btnContent}>Preços</span>
                        <span className={styles.btnIcon}>
                          <ArrowRightCircleLine />
                        </span>
                    </div>
                  </div>
                </div>
              </Link>
          </SwiperSlide>

            
            
            <SwiperSlide className={styles.swiperContent}>
              <Link className={styles.serviceButtonContainer} to="/posts-instagram">
                <div className={styles.serviceContent}>
                  <div className={styles.serviceImage}>
                      <img src={ImagePostsInstagram} alt="" />
                  </div>

                  <div className={styles.serviceDescription}>
                      <h2>Artes para o Feed</h2>
                      <p>Destaque seu perfil com posts e copys personalizados que engajam.</p>
                  </div>

                  <div className={styles.serviceButton}>
                    <div className={styles.arrowContainer}>
                        <span className={styles.btnContent}>Preços</span>
                        <span className={styles.btnIcon}>
                          <ArrowRightCircleLine />
                        </span>
                    </div>
                  </div>
                </div>
              </Link>
          </SwiperSlide>

            
            
            {/* <SwiperSlide className={styles.swiperContent}>
              <div className={styles.serviceContent}>
              <div className={styles.serviceImage}>
                  <img src={ImagePacoteLancamento} alt="" />
              </div>

              <div className={styles.serviceDescription}>
                  <h2>Sua Loja no Ar</h2>
                  <p>Seu e-commerce está pronto? É hora de começar com força total!</p>
              </div>

              <Link className={styles.serviceButtonContainer} to="/pacote-lancamento-loja">
                  <div className={styles.serviceButton}>
                    <div className={styles.arrowContainer}>
                        <span className={styles.btnContent}>Preços</span>
                        <span className={styles.btnIcon}>
                          <ArrowRightCircleLine />
                        </span>
                    </div>
                  </div>                
              </Link>
            </div>
          </SwiperSlide> */}

            
            
            <SwiperSlide className={styles.swiperContent}>
              <Link className={styles.serviceButtonContainer} to="/consultorias">
                <div className={styles.serviceContent}>
                  <div className={styles.serviceImage}>
                      <img src={ImageConsultorias} alt="" />
                  </div>

                  <div className={styles.serviceDescription}>
                      <h2>Consultoria para E-commerce</h2>
                      <p>Mentoria especializada para todos os momentos do seu negócio.</p>
                  </div>

                  <div className={styles.serviceButton}>
                    <div className={styles.arrowContainer}>
                        <span className={styles.btnContent}>Preços</span>
                        <span className={styles.btnIcon}>
                          <ArrowRightCircleLine />
                        </span>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>

            
            
            <SwiperSlide className={styles.swiperContent}>
              <Link className={styles.serviceButtonContainer} to="/loja-virtual">
                <div className={styles.serviceContent}>
                  <div className={styles.serviceImage}>
                      <img src={ImageLojaVirtual} alt="" />
                  </div>

                  <div className={styles.serviceDescription}>
                      <h2>Desenvolvimento de E-commerce</h2>
                      <p>Entregamos a loja pronta para você vender seus produtos na internet.</p>
                  </div>

                  <div className={styles.serviceButton}>
                    <div className={styles.arrowContainer}>
                        <span className={styles.btnContent}>Preços</span>
                        <span className={styles.btnIcon}>
                          <ArrowRightCircleLine />
                        </span>
                    </div>
                  </div>
                </div>
              </Link>
          </SwiperSlide>

            
            
            <SwiperSlide className={styles.swiperContent}>
              <Link className={styles.serviceButtonContainer} to="/dropshipping">
                <div className={styles.serviceContent}>
                  <div className={styles.serviceImage}>
                      <img src={ImageDropshipping} alt="" />
                  </div>

                  <div className={styles.serviceDescription}>
                      <h2>Loja de Dropshipping</h2>
                      <p>Criamos sua loja completa para que você possa vender sem estoque.</p>
                  </div>

                  <div className={styles.serviceButton}>
                    <div className={styles.arrowContainer}>
                        <span className={styles.btnContent}>Preços</span>
                        <span className={styles.btnIcon}>
                          <ArrowRightCircleLine />
                        </span>
                    </div>
                  </div>
                </div>
              </Link>
          </SwiperSlide>

            
            
            <SwiperSlide className={styles.swiperContent}>
              <Link className={styles.serviceButtonContainer} to="/dropshipping">
                <div className={styles.serviceContent}>
                  <div className={styles.serviceImage}>
                      <img src={ImageDropGlobal} alt="" />
                  </div>

                  <div className={styles.serviceDescription}>
                      <h2>Loja de Dropshipping Global</h2>
                      <p>Tenha uma loja virtual sem estoque fora do país e receba em dólar.</p>
                  </div>

                  <div className={styles.serviceButton}>
                    <div className={styles.arrowContainer}>
                        <span className={styles.btnContent}>Preços</span>
                        <span className={styles.btnIcon}>
                          <ArrowRightCircleLine />
                        </span>
                    </div>
                  </div>
                </div>
              </Link>
          </SwiperSlide>

            
            
            <SwiperSlide className={styles.swiperContent}>
              <Link className={styles.serviceButtonContainer} to="/dropshipping">
                <div className={styles.serviceContent}>
                  <div className={styles.serviceImage}>
                      <img src={ImageDropLatam} alt="" />
                  </div>

                  <div className={styles.serviceDescription}>
                      <h2>Loja de Dropshipping Latam</h2>
                      <p>Venda para a América Latina com uma loja sem estoque e receba em dólar.</p>
                  </div>

                  <div className={styles.serviceButton}>
                    <div className={styles.arrowContainer}>
                        <span className={styles.btnContent}>Preços</span>
                        <span className={styles.btnIcon}>
                          <ArrowRightCircleLine />
                        </span>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>

            
            
          <SwiperSlide className={styles.swiperContent}>
              <Link className={styles.serviceButtonContainer} to="/print-on-demand">
                <div className={styles.serviceContent}>
                  <div className={styles.serviceImage}>
                      <img src={ImageDropPrint} alt="" />
                  </div>

                  <div className={styles.serviceDescription}>
                      <h2>Loja Print-On-Demand</h2>
                      <p>Venda produtos personalizados com uma loja de dropshipping sem estoque.</p>
                  </div>

                  <div className={styles.serviceButton}>
                    <div className={styles.arrowContainer}>
                        <span className={styles.btnContent}>Preços</span>
                        <span className={styles.btnIcon}>
                          <ArrowRightCircleLine />
                        </span>
                    </div>
                  </div>
                </div>
              </Link>
          </SwiperSlide>

            
            
            <SwiperSlide className={styles.swiperContent}>
              <Link className={styles.serviceButtonContainer} to="/mineracao-produtos-dropshipping">
                <div className={styles.serviceContent}>
                  <div className={styles.serviceImage}>
                      <img src={ImageMineracaoProdutos} alt="" />
                  </div>

                  <div className={styles.serviceDescription}>
                      <h2>Mineração para Dropshipping</h2>
                      <p>Selecionamos e cadastramos produtos campeões na sua loja.</p>
                  </div>

                  <div className={styles.serviceButton}>
                    <div className={styles.arrowContainer}>
                        <span className={styles.btnContent}>Preços</span>
                        <span className={styles.btnIcon}>
                          <ArrowRightCircleLine />
                        </span>
                    </div>
                  </div>
                </div>
              </Link>
          </SwiperSlide>

            
            
            <SwiperSlide className={styles.swiperContent}>
              <Link className={styles.serviceButtonContainer} to="/marketing-loja-virtual">
                <div className={styles.serviceContent}>
                  <div className={styles.serviceImage}>
                      <img src={ImageMarketingLojaVirtual} alt="" />
                  </div>

                  <div className={styles.serviceDescription}>
                      <h2>Marketing para Loja Virtual</h2>
                      <p>Estratégias de marketing patrocinado para impulsionar seu e-commerce.</p>
                  </div>

                  <div className={styles.serviceButton}>
                    <div className={styles.arrowContainer}>
                        <span className={styles.btnContent}>Preços</span>
                        <span className={styles.btnIcon}>
                          <ArrowRightCircleLine />
                        </span>
                    </div>
                  </div>
                </div>
              </Link>
          </SwiperSlide>

            
            
            {/* <SwiperSlide className={styles.swiperContent}>
              <div className={styles.serviceContent}>
              <div className={styles.serviceImage}>
                  <img src={ImageLandingPage} alt="" />
              </div>

              <div className={styles.serviceDescription}>
                  <h2>Landing Page</h2>
                  <p>Ofereça produtos e serviços com uma landing page personalizada.</p>
              </div>

              <Link className={styles.serviceButtonContainer} to="/landing-page">
                  <div className={styles.serviceButton}>
                    <div className={styles.arrowContainer}>
                        <span className={styles.btnContent}>Preços</span>
                        <span className={styles.btnIcon}>
                          <ArrowRightCircleLine />
                        </span>
                    </div>
                  </div>                
              </Link>
            </div>
          </SwiperSlide> */}

            
            
            {/* <SwiperSlide className={styles.swiperContent}>
              <div className={styles.serviceContent}>
              <div className={styles.serviceImage}>
                  <img src={ImageWebsiteInstitucional} alt="" />
              </div>

              <div className={styles.serviceDescription}>
                  <h2>Criação de Site Institucional</h2>
                  <p>Fortaleça sua marca com um website institucional gerenciável.</p>
              </div>

              <Link className={styles.serviceButtonContainer} to="/website-institucional">
                  <div className={styles.serviceButton}>
                    <div className={styles.arrowContainer}>
                        <span className={styles.btnContent}>Preços</span>
                        <span className={styles.btnIcon}>
                          <ArrowRightCircleLine />
                        </span>
                    </div>
                  </div>                
              </Link>
            </div>
          </SwiperSlide> */}

            
            
            {/* <SwiperSlide className={styles.swiperContent}>
              <div className={styles.serviceContent}>
              <div className={styles.serviceImage}>
                  <img src={ImageBlog} alt="" />
              </div>

              <div className={styles.serviceDescription}>
                  <h2>Desenvolvimento de Blog</h2>
                  <p>Publique ideias e conteúdos com um blog que expressa sua marca.</p>
              </div>

              <Link className={styles.serviceButtonContainer} to="/blog">
                  <div className={styles.serviceButton}>
                    <div className={styles.arrowContainer}>
                        <span className={styles.btnContent}>Preços</span>
                        <span className={styles.btnIcon}>
                          <ArrowRightCircleLine />
                        </span>
                    </div>
                  </div>                
              </Link>
            </div>
          </SwiperSlide> */}

          <div className={styles.spacingNavigation}></div>
        </Swiper>


      </div>              
    </div>

  )
}

export default ServicesCarousel;