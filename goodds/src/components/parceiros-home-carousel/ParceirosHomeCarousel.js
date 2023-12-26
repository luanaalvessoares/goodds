import React from "react";
import styles from './ParceirosHomeCarousel.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import ParceiroShopify from '../../assets/images/parceiro-shopify.svg';
import ParceiroNuvemShop from '../../assets/images/parceiro-nuvemshop.svg';
import ParceiroWooCommerce from '../../assets/images/parceiro-woocommerce.svg';
import ParceiroPlaceX from '../../assets/images/parceiro-placex.svg';
import ParceiroPrintful from '../../assets/images/parceiro-printful.svg';
import ParceiroAppMax from '../../assets/images/parceiro-appmax.svg';
import ParceiroYampi from '../../assets/images/parceiro-yampi.svg';
import ParceiroADMiner from '../../assets/images/parceiro-adminer.svg';
import ParceiroMinea from '../../assets/images/parceiro-minea.svg';
import ParceiroDSLite from '../../assets/images/parceiro-dslite.svg';
import ParceiroMercadoLivre from '../../assets/images/parceiro-mercadolivre.svg';
import ParceiroShein from '../../assets/images/parceiro-shein.svg';
import ParceiroShopee from '../../assets/images/parceiro-shopee.svg';
import ParceiroRDStation from '../../assets/images/parceiro-rdstation.svg';

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