import React from "react";
import styles from './ParceirosHomeCarousel.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Partner1 from '../../assets/images/partner1.webp';
import Partner2 from '../../assets/images/partner2.webp';
import Partner3 from '../../assets/images/partner3.webp';
import Partner4 from '../../assets/images/partner4.webp';
import Partner5 from '../../assets/images/partner5.webp';
import Partner6 from '../../assets/images/partner6.webp';

function ParceirosHomeCarousel() {
    return (
        <section className={styles.parceirosCarousel}>
            <div>
                <h2>Parceiros</h2>
            </div>
            <div className={styles.parceirosHomeCarousel}>
                <Swiper
                    spaceBetween={15}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    grabCursor={true}
                    modules={[Autoplay]}
                    breakpoints={{
                    0: {
                        slidesPerView: 2,
                    },
                    400:{
                        slidesPerView: 2,
                    },
                    639: {
                        slidesPerView: 3,
                    },
                    865:{
                        slidesPerView: 4,
                    },
                    1000:{
                        slidesPerView: 4,
                    },
                    1500:{
                        slidesPerView: 4,
                    },
                    }}
                    className={styles.swiperParceiros}
                >

                    <SwiperSlide className={styles.swiperContent}>
                        <img src={Partner1} alt="" />
                    </SwiperSlide>

                    <SwiperSlide className={styles.swiperContent}>
                        <img src={Partner2} alt="" />
                    </SwiperSlide>
                    
                    <SwiperSlide className={styles.swiperContent}>
                        <img src={Partner3} alt="" />
                    </SwiperSlide>
                    
                    <SwiperSlide className={styles.swiperContent}>
                        <img src={Partner4} alt="" />
                    </SwiperSlide>

                    <SwiperSlide className={styles.swiperContent}>
                        <img src={Partner5} alt="" />
                    </SwiperSlide>

                    <SwiperSlide className={styles.swiperContent}>
                        <img src={Partner6} alt="" />
                    </SwiperSlide>
                </Swiper>

            </div> 
        </section>

    )
}

export default ParceirosHomeCarousel;