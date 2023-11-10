import React from "react";
import styles from './VendaTodosOsDias.module.css';
import GoogleReviews from '../../components/google-reviews/GoogleReviews';
import { motion } from "framer-motion";
import logo from '../../assets/images/logo.webp';
import ImageVantagesDrop from '../../assets/images/section-vantagesdrop.webp';
import ImageMarketplaces from '../../assets/images/homemarketplaces.webp';
import ImageMarketplaces from '../../assets/images/homemarketplaces.webp';
import ImageMarketplaces from '../../assets/images/homemarketplaces.webp';
import RiFireFill from 'remixicon-react/FireFillIcon';
import RiArrowDropLeftFill from 'remixicon-react/ArrowDropLeftFillIcon';
import RiRocket2Fill from 'remixicon-react/Rocket2FillIcon';
import RiKey2Fill from 'remixicon-react/Key2FillIcon';
import RiToolsFill from 'remixicon-react/ToolsFillIcon';
import RiLightbulbFill from 'remixicon-react/LightbulbFillIcon';
import RiMedal2Fill from 'remixicon-react/Medal2FillIcon';
import RiWindow2Fill from 'remixicon-react/Window2FillIcon';
import RiVidiconFill from 'remixicon-react/VidiconFillIcon';
import RiShoppingBasketFill from 'remixicon-react/ShoppingBasketFillIcon';
import RiLayout3Fill from 'remixicon-react/Layout3FillIcon';
import RiFlashlightFill from 'remixicon-react/FlashlightFillIcon';
import RiReplyAllFill from 'remixicon-react/ReplyAllFillIcon';
import Separator from '../../assets/images/separator-lp.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

function VendaTodosOsDias() {
    return (
        <div className={styles.container}>
            <section className={styles.containerChild}>
                <div>
                    <img src={logo} alt=""/>
                </div>
                <div className={styles.gridTwoColumns}>
                    <div className={`${styles.gridTwoColumnInfo} ${styles.gridTwoColumnsChild}`}>
                        <h1 className={styles.gridTwoColumnInfoTitle}>
                            <span>Pare de Perder Dinheiro na Internet </span>
                            e Comece a Vender Todos os Dias
                        </h1>
                        <p className={styles.gridTwoColumnInfoDescription}>Tenha acesso ao Curso mais completo para vender seu produto ou serviço na internet. Aprenda como atrair mais clientes para o seu negócio, investindo pouco e ganhando muito.</p>
                        <p className={styles.gridTwoColumnInfoCta}>
                            <span><RiFireFill /> </span>
                            Aplicado por +9.000 negócios em 23 países
                        </p>
                        <div className={`${styles.gridTwoColumnInfoBtn} ${styles.ctaBtn}`}>
                            <a href="!#">
                                Inscreva-se por 
                                <span>12x </span>
                                <span>R$97</span>
                            </a>
                            <p>
                                <span><RiArrowDropLeftFill /> </span>
                                <span>ou à vista com desconto </span>
                                por R$997
                            </p>
                        </div>
                    </div>

                    <div className={`${styles.gridTwoColumnImage} ${styles.gridTwoColumnsChild}`}>
                        <img src={ImageVantagesDrop} alt=""/>
                    </div>
                </div>

                <span className={styles.sectionSeparator}>
                    <img src={Separator} alt=""/>
                </span>
            </section>

            <section className={styles.containerChild}>
                <div className={styles.gridTwoColumns}>
                    <div className={`${styles.gridTwoColumnInfoSticky} ${styles.gridTwoColumnsChild}`}>
                        <p>
                            <span><RiRocket2Fill /></span>
                        </p>
                        <p>Módulos do máquina</p>
                        <h2>O que você vai receber ao se inscrever no treinamento</h2>
                    </div>

                    <div className={`${styles.gridTwoColumnInfoCards} ${styles.gridTwoColumnsChild}`}>

                    </div>
                </div>

                <span className={styles.sectionSeparator}>
                    <img src={Separator} alt=""/>
                </span>
            </section>

            <section className={styles.containerChild}>
                <div>
                    <h2>Garantimos conteúdo avançado sobre tudo o que você precisa saber para começar a vender online</h2>
                </div>

                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/hc0ZDRRkhl8?si=gFeTKntjGf-Qpx0j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                
                <div>
                    <GoogleReviews />
                </div>
                
                <div>
                    <Swiper
                        initialSlide={9}
                        loop={true}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        autoplay={{ delay: 4000 }}
                        grabCursor={true}
                        modules={[Autoplay, Pagination]}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            400:{ slidesPerView: 1 },
                            639: { slidesPerView: 2 },
                            865:{ slidesPerView: 3 },
                            1000:{ slidesPerView: 4 },
                            1500:{ slidesPerView: 4 },
                        }}
                    >
                        <SwiperSlide className={styles.swiperContent}>
                            <div className={styles.serviceContent}>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/-76gQhPZKJw?si=TCLoqktaonaDX1IH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide className={styles.swiperContent}>
                            <div className={styles.serviceContent}>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/hc0ZDRRkhl8?si=SI3gAobIkPbYE-6f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className={styles.swiperContent}>
                            <div className={styles.serviceContent}>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/21J8D9yOE2Q?si=LmCYlQkOGq-B-omX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </SwiperSlide>
                            
                        <SwiperSlide className={styles.swiperContent}>
                            <div className={styles.serviceContent}>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/OwkOLhnOpQk?si=UrT0eXlrE9AboGjO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </SwiperSlide>
                            
                        <SwiperSlide className={styles.swiperContent}>
                            <div className={styles.serviceContent}>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/HnzudnjQFH0?si=UCfQIJzpF1ovRhAq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </SwiperSlide>
                            
                        <SwiperSlide className={styles.swiperContent}>
                            <div className={styles.serviceContent}>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ZHkNNMPhv7o?si=PnnEbB9o6piGoqJz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </SwiperSlide>
                            
                        <SwiperSlide className={styles.swiperContent}>
                            <div className={styles.serviceContent}>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/vhVR1xfz80Y?si=ONLdcRbr4t-MEnZm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </SwiperSlide>
                            
                        <SwiperSlide className={styles.swiperContent}>
                            <div className={styles.serviceContent}>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/GYPvdAp4FEY?si=oW6bkp_r5GuETaTt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </SwiperSlide>
                            
                        <SwiperSlide className={styles.swiperContent}>
                            <div className={styles.serviceContent}>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ohyIOIEPq7g?si=Tkz9CMl72t25cb0J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </SwiperSlide>
                            
                        <SwiperSlide className={styles.swiperContent}>
                            <div className={styles.serviceContent}>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/IvEUCnoU-fI?si=Ca1tOg9fzOM3r8-b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </SwiperSlide>

                        <div className={styles.spacingNavigation}></div>
                    </Swiper>
                </div>

                <div className={`${styles.gridTwoColumnInfoBtn} ${styles.ctaBtn}`}>
                    <a href="!#">
                        Inscreva-se por 
                        <span>12x </span>
                        <span>R$97</span>
                    </a>
                    <p>
                        <span><RiArrowDropLeftFill /> </span>
                        <span>ou à vista com desconto </span>
                        por R$997
                    </p>
                </div>
                
                <span className={styles.sectionSeparator}>
                    <img src={Separator} alt=""/>
                </span>
            </section>

            <section className={styles.containerChild}>
                <div>
                    <h2>Ahhhh, mas eu já tentei e não consegui… será que não é só mais um curso de como vender na internet, com promessas sedutoras?</h2>
                </div>

                <div className={styles.gridTwoColumns}>
                    <div className={`${styles.gridTwoColumnImage} ${styles.gridTwoColumnsChild}`}>
                        <img src={ImageMarketplaces} alt=""/>
                    </div>

                    <div className={`${styles.gridTwoColumnInfo} ${styles.gridTwoColumnsChild}`}>
                        <p>Eu conheço a sua dor de sentir que está perdendo tempo e dinheiro ao tentar vender na internet. Conheço a fundo o sentimento de se sentir travado para criar campanhas que vendem e pior ainda, o sentimento da frustração de não vender e não saber o porquê.</p>
                        <p>
                            <span>Por isso te garanto: </span>
                            esse não é mais um curso de como vender na internet. O meu 
                            <span>treinamento foi regravado depois de mais de 9.000 negócios aplicarem o meu método.</span>
                        </p>
                        <div className={`${styles.gridTwoColumnInfoBtn} ${styles.ctaBtn}`}>
                            <a href="!#">
                                Inscreva-se por 
                                <span>12x </span>
                                <span>R$97</span>
                            </a>
                            <p>
                                <span><RiArrowDropLeftFill /> </span>
                                <span>ou à vista com desconto </span>
                                por R$997
                            </p>
                        </div>
                    </div>
                </div>
                
                <span className={styles.sectionSeparator}>
                    <img src={Separator} alt=""/>
                </span>
            </section>

            <section className={styles.containerChild}>
                <div>
                    <h2>
                        <span>E ao se inscrever nele agora, </span>
                        você terá um curso com:
                    </h2>
                </div>

                <div className={styles.gridCardsInfos}>
                    <div className={styles.gridCardInfoChild}>
                        <p>
                            <span><RiKey2Fill /></span>
                        </p>
                        <p>
                            <span>Estruturas Validadas de Palavra Chave: </span>
                            eu ensino no curso os melhores tipos de palavras chave pra vender no Google, já economizando muito tempo e dinheiro pra você.
                        </p>
                    </div>
                    <div className={styles.gridCardInfoChild}>
                        <p>
                            <span><RiToolsFill /></span>
                        </p>
                        <p>
                            <span>O que NÃO FUNCIONA e Erros Comuns: </span>
                            eu também já ensino o que não funciona e os erros mais comuns cometidos por mais de 9.000 alunos. Só isso paga o treinamento.
                        </p>
                    </div>
                    <div className={styles.gridCardInfoChild}>
                        <p>
                            <span><RiLightbulbFill /></span>
                        </p>
                        <p>
                            <span>Soluções Incríveis para os Problemas Comuns: </span>
                            eu sei todos os problemas que vão acontecer na sua jornada de vender na internet. Se a sua campanha não vender, tem uma aula só para transformá-la em uma campanha que vende. Se as suas vendas caírem do nada, tem uma aula só para resolver isso.
                        </p>
                    </div>
                    <div className={styles.gridCardInfoChild}>
                        <p>
                            <span><RiMedal2Fill /></span>
                        </p>
                        <p>
                            <span>Modelos de Anúncios que Funcionam: </span>
                            você terá acesso a estrutura de persuasão dos anúncios que funcionam, para apenas adaptar ao seu tipo de negócio e vender na internet. Até mesmo os melhores gatilhos mentais, por tipos de negócios, você terá acesso mastigado no curso.
                        </p>
                    </div>
                </div>

                <div>
                    <h3>É o mapa das vendas no Google a um clique de distância de você. Inscreva-se agora para começar a vender seu produto ou serviço na internet.</h3>
                </div>

                <div className={`${styles.gridTwoColumnInfoBtn} ${styles.ctaBtn}`}>
                    <a href="!#">
                        Inscreva-se por 
                        <span>12x </span>
                        <span>R$97</span>
                    </a>
                    <p>
                        <span><RiArrowDropLeftFill /> </span>
                        <span>ou à vista com desconto </span>
                        por R$997
                    </p>
                </div>
                                
                <span className={styles.sectionSeparator}>
                    <img src={Separator} alt=""/>
                </span>
            </section>

            <section className={styles.containerChild}>
                <div>
                    <h2>    
                        E você também aprenderá a
                        <span> vender em todas as redes do Google</span>
                    </h2>
                    <p>Veja mais módulos do Máquina que vão te ajudar a ter mais opções de vendas para o seu produto ou serviço:</p>
                </div>

                <div className={styles.gridCardsInfos}>
                    <div className={styles.gridCardInfoChild}>
                        <p>
                            <span><RiWindow2Fill /></span>
                        </p>
                        <p>
                            <span>Como Vender na Rede de Display</span>
                            Você vai aprender como pode vender na Internet através de sites parceiros do Google, inclusive vender para pessoas que ainda não estão procurando pelo que você vende, mas já precisam da sua solução.
                        </p>
                    </div>
                    <div className={styles.gridCardInfoChild}>
                        <p>
                            <span><RiVidiconFill /></span>
                        </p>
                        <p>
                            <span>Como Vender no Youtube Ads</span>
                            O Youtube é uma mina de ouro. Desde negócios locais até infoprodutos, podemos vender praticamente tudo através dessa rede pouco explorada. Descubra as melhores estratégias para transformar a rede de vídeos, segunda maior do Google, em uma Máquina de vendas para o seu negócio.
                        </p>
                    </div>
                    <div className={styles.gridCardInfoChild}>
                        <p>
                            <span><RiShoppingBasketFill /></span>
                        </p>
                        <p>
                            <span>Como Vender no Google Shopping</span>
                            Para você que tem uma loja virtual, essa é a melhor rede para vender no Google. Você vai aprender, do zero, tudo que precisa para atrair os melhores clientes para o seu e-commerce.
                        </p>
                    </div>
                    <div className={styles.gridCardInfoChild}>
                        <p>
                            <span><RiLayout3Fill /></span>
                        </p>
                        <p>
                            <span>Como Vender na Rede Discovery</span>
                            Aprenda como vender na rede de notícias do Google, ainda pouquíssimo explorada no Brasil, mas com um potencial gigantesco de gerar clientes para os mais diversos negócios, tanto serviços quanto produtos.
                        </p>
                    </div>
                    <div className={styles.gridCardInfoChild}>
                        <p>
                            <span><RiFlashlightFill /></span>
                        </p>
                        <p>
                            <span>Como Vender com Performance Max e I.A.</span>
                            A Performance Max é a campanha mais inteligente do Google, que utiliza inteligência artificial para escalar as vendas da sua empresa. Descubra os segredos dessa campanha, para potencializar as vendas do seu negócio.
                        </p>
                    </div>
                    <div className={styles.gridCardInfoChild}>
                        <p>
                            <span><RiReplyAllFill /></span>
                        </p>
                        <p>
                            <span>Como Vender com Estratégias de Remarketing</span>
                            Você ainda aprenderá como reimpactar pessoas que não compraram de você na primeira vez, usando estratégias de persuasão para quebrar objeções e aumentar as vendas do seu site.
                        </p>
                    </div>
                </div>

                <div className={`${styles.gridTwoColumnInfoBtn} ${styles.ctaBtn}`}>
                    <a href="!#">
                        Inscreva-se por 
                        <span>12x </span>
                        <span>R$97</span>
                    </a>
                    <p>
                        <span><RiArrowDropLeftFill /> </span>
                        <span>ou à vista com desconto </span>
                        por R$997
                    </p>
                </div>
                          
                <span className={styles.sectionSeparator}>
                    <img src={Separator} alt=""/>
                </span>
            </section>

            <section className={styles.containerChild}>
                <div>
                    <h2>Ahh, mas eu preciso de muita ajuda e só aula ensinando não basta</h2>
                    <p>Não se preocupe, eu pensei em absolutamente tudo para te ajudar a vender na Internet todos os dias. Ao se inscrever você também recebe:</p>
                </div>

                <div className={styles.gridCardsInfos}>
                    <div className={styles.gridCardInfoChild}>
                        <div>
                            <img alt=""/>
                        </div>
                        <div>
                            <h3></h3>
                            <p></p>
                        </div>
                    </div>
                    <div className={styles.gridCardInfoChild}>
                        <div>
                            <img alt=""/>
                        </div>
                        <div>
                            <h3></h3>
                            <p></p>
                        </div>
                    </div>
                </div>

                <div className={`${styles.gridTwoColumnInfoBtn} ${styles.ctaBtn}`}>
                    <a href="!#">
                        Inscreva-se por 
                        <span>12x </span>
                        <span>R$97</span>
                    </a>
                    <p>
                        <span><RiArrowDropLeftFill /> </span>
                        <span>ou à vista com desconto </span>
                        por R$997
                    </p>
                </div>
                          
                <span className={styles.sectionSeparator}>
                    <img src={Separator} alt=""/>
                </span>
            </section>

        </div>
    )
}

export default VendaTodosOsDias;