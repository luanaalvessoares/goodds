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
import ImageConsultorias from '../../assets/images/consultoria drop.png';
import ImageLojaVirtual from '../../assets/images/loja virtual.png';
import ImageDrop from '../../assets/images/loja drop.png';
import ImageDropGlobal from '../../assets/images/loja drop global.png';
import ImageDropLatam from '../../assets/images/loja drop latam.png';
import ImageDropPrint from '../../assets/images/loja print on demand.png';


function ServicesCarousel() {
  return (
    <div className={styles.serviceCarouselSection}>
        <h2>Soluções</h2>
      <div className={styles.serviceCarouselContainer}>

        <Swiper
          initialSlide={9}
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
              <div className={styles.serviceContent}>
                <div className={styles.serviceImage}>
                    <img src="https://picsum.photos/seed/1/300/300" alt="" />
                </div>

                <div className={styles.serviceDescription}>
                    <h2>Vídeos Curtos e Reels</h2>
                    <p>Crie uma conexão instantânea com seu público por meio de vídeos curtos e reels que transmitem a essência da sua marca de forma rápida e impactante.</p>
                </div>

                <Link className={styles.serviceButtonContainer} to="/videos-curtos-reels">
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
            </SwiperSlide>

            
            <SwiperSlide className={styles.swiperContent}>
              <div className={styles.serviceContent}>
              <div className={styles.serviceImage}>
                  <img src="https://picsum.photos/seed/2/300/300" alt="" />
              </div>

              <div className={styles.serviceDescription}>
                  <h2>Artes para Anúncios</h2>
                  <p>Aprimore sua estratégia de marketing com artes de anúncios bem elaboradas, projetadas para impulsionar o reconhecimento e o engajamento da sua marca.</p>
              </div>

              <Link className={styles.serviceButtonContainer} to="/artes-anuncios">
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
          </SwiperSlide>

            
            
            <SwiperSlide className={styles.swiperContent}>
              <div className={styles.serviceContent}>
              <div className={styles.serviceImage}>
                  <img src="https://picsum.photos/seed/3/300/300" alt="" />
              </div>

              <div className={styles.serviceDescription}>
                  <h2>Banners para Loja</h2>
                  <p>Criamos banners customizados de produtos e serviços que impulsionam sua loja.</p>
              </div>

              <Link className={styles.serviceButtonContainer} to="/banners-loja">
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
          </SwiperSlide>

            
            
            <SwiperSlide className={styles.swiperContent}>
              <div className={styles.serviceContent}>
              <div className={styles.serviceImage}>
                  <img src="https://picsum.photos/seed/4/300/300" alt="" />
              </div>

              <div className={styles.serviceDescription}>
                  <h2>Criação de Logo</h2>
                  <p>Desenvolvemos a identidade visual da sua marca.</p>
              </div>

              <Link className={styles.serviceButtonContainer} to="/criacao-logo">
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
          </SwiperSlide>

            
            
            <SwiperSlide className={styles.swiperContent}>
              <div className={styles.serviceContent}>
              <div className={styles.serviceImage}>
                  <img src="https://picsum.photos/seed/5/300/300" alt="" />
              </div>

              <div className={styles.serviceDescription}>
                  <h2>Posts Instagram</h2>
                  <p>Destaque-se no Instagram com posts personalizados e feitos sob medida para impulsionar o seu negócio.</p>
              </div>

              <Link className={styles.serviceButtonContainer} to="/posts-instagram">
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
          </SwiperSlide>

            
            
            <SwiperSlide className={styles.swiperContent}>
              <div className={styles.serviceContent}>
              <div className={styles.serviceImage}>
                  <img src="https://picsum.photos/seed/6/300/300" alt="" />
              </div>

              <div className={styles.serviceDescription}>
                  <h2>Pacote Lançamento de Loja</h2>
                  <p>Inicie seu negócio online com nossas estratégias de lançamento.</p>
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
          </SwiperSlide>

            
            
            <SwiperSlide className={styles.swiperContent}>
              <div className={styles.serviceContent}>
              <div className={styles.serviceImage}>
                  <img src={ImageConsultorias} alt="" />
              </div>

              <div className={styles.serviceDescription}>
                  <h2>Consultorias</h2>
                  <p>Independente do momento do seu negócio, nós te mostramos o caminho.</p>
              </div>

              <Link className={styles.serviceButtonContainer} to="/consultorias">
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
          </SwiperSlide>

            
            
            <SwiperSlide className={styles.swiperContent}>
              <div className={styles.serviceContent}>
              <div className={styles.serviceImage}>
                  <img src={ImageLojaVirtual} alt="" />
              </div>

              <div className={styles.serviceDescription}>
                  <h2>Loja Virtual</h2>
                  <p>Entregamos a loja pronta para você vender seus produtos, fazemos todo o layout, configurações e integrações.</p>
              </div>

              <Link className={styles.serviceButtonContainer} to="/loja-virtual">
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
          </SwiperSlide>

            
            
            <SwiperSlide className={styles.swiperContent}>
              <div className={styles.serviceContent}>
              <div className={styles.serviceImage}>
                  <img src={ImageDrop} alt="" />
              </div>

              <div className={styles.serviceDescription}>
                  <h2>Dropshipping</h2>
                  <p>Considerada a primeira agência especializada em Dropshipping do Brasil. Oferecemos pacotes completos para Dropshipping.</p>
              </div>

              <Link className={styles.serviceButtonContainer} to="/dropshipping">
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
          </SwiperSlide>

            
            
            <SwiperSlide className={styles.swiperContent}>
              <div className={styles.serviceContent}>
              <div className={styles.serviceImage}>
                  <img src={ImageDropGlobal} alt="" />
              </div>

              <div className={styles.serviceDescription}>
                  <h2>Dropshipping Global</h2>
                  <p>Tenha uma loja virtual fora do país e receba em dólar, seu e-commerce em Inglês ou Espanhol com checkout configurado.</p>
              </div>

              <Link className={styles.serviceButtonContainer} to="/dropshipping-global">
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
          </SwiperSlide>

            
            
            <SwiperSlide className={styles.swiperContent}>
              <div className={styles.serviceContent}>
              <div className={styles.serviceImage}>
                  <img src={ImageDropLatam} alt="" />
              </div>

              <div className={styles.serviceDescription}>
                  <h2>Dropshipping Latam</h2>
                  <p>Venda para a América Latina com uma loja bilingue e com checkout configurado.</p>
              </div>

              <Link className={styles.serviceButtonContainer} to="/dropshipping-latam">
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
          </SwiperSlide>

            
            
          <SwiperSlide className={styles.swiperContent}>
            <div className={styles.serviceContent}>
              <div className={styles.serviceImage}>
                  <img src={ImageDropPrint} alt="" />
              </div>

              <div className={styles.serviceDescription}>
                  <h2>Dropshipping Print-On-Demand</h2>
                  <p>Venda produtos personalizados, desenvolva sua marca com produtos premium.</p>
              </div>

              <Link className={styles.serviceButtonContainer} to="/dropshipping-print-on-demand">
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
          </SwiperSlide>

            
            
            <SwiperSlide className={styles.swiperContent}>
              <div className={styles.serviceContent}>
              <div className={styles.serviceImage}>
                  <img src="https://picsum.photos/seed/13/300/300" alt="" />
              </div>

              <div className={styles.serviceDescription}>
                  <h2>Mineração de Produtos Dropshipping</h2>
                  <p>Mineramos e cadastramos no seu site, produtos testados com alto poder de conversão.</p>
              </div>

              <Link className={styles.serviceButtonContainer} to="/mineracao-produtos-dropshipping">
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
          </SwiperSlide>

            
            
            <SwiperSlide className={styles.swiperContent}>
              <div className={styles.serviceContent}>
              <div className={styles.serviceImage}>
                  <img src="https://picsum.photos/seed/14/300/300" alt="" />
              </div>

              <div className={styles.serviceDescription}>
                  <h2>Marketing Loja Dropshipping</h2>
                  <p>Alcance novos clientes diariamente. Planejamos estratégias e executamos campanhas de marketing para sua Loja Dropshipping.</p>
              </div>

              <Link className={styles.serviceButtonContainer} to="/marketing-loja-dropshipping">
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
          </SwiperSlide>

            
            
            <SwiperSlide className={styles.swiperContent}>
              <div className={styles.serviceContent}>
              <div className={styles.serviceImage}>
                  <img src="https://picsum.photos/seed/15/300/300" alt="" />
              </div>

              <div className={styles.serviceDescription}>
                  <h2>Marketing Loja Virtual</h2>
                  <p>Maximize o alcance do seu público a cada dia. Nossas estratégias de marketing são projetadas para impulsionar o crescimento contínuo da sua Loja Virtual.</p>
              </div>

              <Link className={styles.serviceButtonContainer} to="/marketing-loja-virtual">
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
          </SwiperSlide>

            
            
            <SwiperSlide className={styles.swiperContent}>
              <div className={styles.serviceContent}>
              <div className={styles.serviceImage}>
                  <img src="https://picsum.photos/seed/16/300/300" alt="" />
              </div>

              <div className={styles.serviceDescription}>
                  <h2>Landing Page</h2>
                  <p>Ofereça seu produto com uma landing page personalizada e faça-o decolar.</p>
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
          </SwiperSlide>

            
            
            <SwiperSlide className={styles.swiperContent}>
              <div className={styles.serviceContent}>
              <div className={styles.serviceImage}>
                  <img src="https://picsum.photos/seed/17/300/300" alt="" />
              </div>

              <div className={styles.serviceDescription}>
                  <h2>Website Institucional</h2>
                  <p>Mostre sua marca para o mundo com um website institucional.</p>
              </div>

              <Link className={styles.serviceButtonContainer} to="/website">
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
          </SwiperSlide>

            
            
            <SwiperSlide className={styles.swiperContent}>
              <div className={styles.serviceContent}>
              <div className={styles.serviceImage}>
                  <img src="https://picsum.photos/seed/18/300/300" alt="" />
              </div>

              <div className={styles.serviceDescription}>
                  <h2>Blog</h2>
                  <p>Publique ideias, soluções e conteúdos com um blog do seu jeito.</p>
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
          </SwiperSlide>

          <div className={styles.spacingNavigation}></div>
        </Swiper>


      </div>              
    </div>

  )
}

export default ServicesCarousel;