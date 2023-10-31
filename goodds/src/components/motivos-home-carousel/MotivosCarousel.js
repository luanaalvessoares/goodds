import React from "react";
import styles from './MotivosCarousel.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import RiHeartLine from 'remixicon-react/HeartLineIcon'

function MotivosCarousel() {
    return (
        <div className={styles.motivosCarousel}>
            <h2>
                <span><RiHeartLine/></span>
                Motivos para você ser GOODDS
            </h2>
            <Swiper
                loop={true}
                slidesPerView={1}
                pagination={{
                clickable: true,
                dynamicBullets: true
                }}
                autoplay={{ delay: 4000 }}
                grabCursor={true}
                modules={[Autoplay, Pagination]}
                className={styles.swiperMotivos}
            >

                <SwiperSlide className={styles.swiperContent}>
                    <div>
                        <h3>Mais de 10 anos de experiência em vendas online</h3>
                        <p>Há mais de 10 anos, criamos e planejamos soluções eficientes para o seu negócio. Somos um time de especialistas dedicados a executar com excelência nossos serviços feitos exclusivamente para sua empresa.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={styles.swiperContent}>
                    <div>
                        <h3>Consultoria e Suporte com especialistas</h3>
                        <p>Nosso time de especialistas estará sempre à disposição para te auxiliar com os projetos para sua marca. Desde o desenvolvimento de projetos até as campanhas de divulgação, você poderá sempre contar com a nossa equipe!</p>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide className={styles.swiperContent}>
                    <div>
                        <h3>Preço acessível para o seu projeto</h3>
                        <p>Oferecemos soluções completas com baixo investimento para que você escale o seu negócio conforme o tamanho da sua empresa. A idéia aqui é gastar pouco e ganhar muito!</p>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide className={styles.swiperContent}>
                    <div>
                        <h3>As melhores funcionalidades para o seu sistema</h3>
                        <p>Um sistema completo com funções e recursos para você operar com facilidade seu Website. São funcionalidades poderosas focadas na facilidade de administração e no aumento da visualização da sua marca.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={styles.swiperContent}>
                    <div>
                        <h3>Acesse tudo via Celular ou Tablet</h3>
                        <p>Com o sistema responsivo, você poderá acessar seu site de qualquer dispositivo que tenha conexão com a internet. Gerencie os pedidos, clientes e pagamentos pelo Celular ou Tablet.</p>
                    </div>
                </SwiperSlide>

                <div className={styles.spacingNavigation}></div>
            </Swiper>

        </div> 
    )
}

export default MotivosCarousel;