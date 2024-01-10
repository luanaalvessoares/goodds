import React from "react";
import styles from './ParceirosHomeCarousel.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import ParceiroShopify from '../../assets/images/parceiro-shopify.webp';
import ParceiroNuvemShop from '../../assets/images/parceiro-nuvemshop.webp';
import ParceiroWooCommerce from '../../assets/images/parceiro-woocommerce.webp';
import ParceiroPlaceX from '../../assets/images/parceiro-placex.webp';
import ParceiroPrintful from '../../assets/images/parceiro-printful.webp';
import ParceiroAppMax from '../../assets/images/parceiro-appmax.webp';
import ParceiroYampi from '../../assets/images/parceiro-yampi.webp';
import ParceiroADMiner from '../../assets/images/parceiro-adminer.webp';
import ParceiroMinea from '../../assets/images/parceiro-minea.webp';
import ParceiroDSLite from '../../assets/images/parceiro-dslite.webp';
import ParceiroMercadoLivre from '../../assets/images/parceiro-mercadolivre.webp';
import ParceiroShein from '../../assets/images/parceiro-shein.webp';
import ParceiroShopee from '../../assets/images/parceiro-shopee.webp';
import ParceiroRDStation from '../../assets/images/parceiro-rdstation.webp';

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
                    autoplay={{ delay: 1000 }}
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
                        <img src={ParceiroShopify} alt="" />
                    </SwiperSlide>

                    <SwiperSlide className={styles.swiperContent}>
                        <img src={ParceiroNuvemShop} alt="" />
                    </SwiperSlide>
                    
                    <SwiperSlide className={styles.swiperContent}>
                        <img src={ParceiroWooCommerce} alt="" />
                    </SwiperSlide>
                    
                    <SwiperSlide className={styles.swiperContent}>
                        <img src={ParceiroPlaceX} alt="" />
                    </SwiperSlide>

                    <SwiperSlide className={styles.swiperContent}>
                        <img src={ParceiroPrintful} alt="" />
                    </SwiperSlide>

                    <SwiperSlide className={styles.swiperContent}>
                        <img src={ParceiroAppMax} alt="" />
                    </SwiperSlide>

                    <SwiperSlide className={styles.swiperContent}>
                        <img src={ParceiroYampi} alt="" />
                    </SwiperSlide>

                    <SwiperSlide className={styles.swiperContent}>
                        <img src={ParceiroADMiner} alt="" />
                    </SwiperSlide>

                    <SwiperSlide className={styles.swiperContent}>
                        <img src={ParceiroMinea} alt="" />
                    </SwiperSlide>

                    <SwiperSlide className={styles.swiperContent}>
                        <img src={ParceiroDSLite} alt="" />
                    </SwiperSlide>

                    <SwiperSlide className={styles.swiperContent}>
                        <img src={ParceiroMercadoLivre} alt="" />
                    </SwiperSlide>

                    <SwiperSlide className={styles.swiperContent}>
                        <img src={ParceiroShein} alt="" />
                    </SwiperSlide>

                    <SwiperSlide className={styles.swiperContent}>
                        <img src={ParceiroShopee} alt="" />
                    </SwiperSlide>

                    <SwiperSlide className={styles.swiperContent}>
                        <img src={ParceiroRDStation} alt="" />
                    </SwiperSlide>
                </Swiper>

            </div> 
        </section>

    )
}

export default ParceirosHomeCarousel;