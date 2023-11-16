import React, { Component } from 'react';
import styles from './VendaTodosOsDias.module.css';
import GoogleReviews from '../../components/google-reviews/GoogleReviews';
import { motion } from "framer-motion";
import logo from '../../assets/images/logo.webp';
import ImageVantagesDrop from '../../assets/images/section-vantagesdrop.webp';
import ImageMarketplaces from '../../assets/images/homemarketplaces.webp';
import ImageNavicon1 from '../../assets/images/navicon-3.webp';
import ImageNavicon2 from '../../assets/images/navicon-4.webp';
import ImagePrimeiraAgencia from '../../assets/images/home-primeira-agencia.webp';
import PaymentIcons from '../../assets/images/payment-icons.webp';
import RiFireFill from 'remixicon-react/FireFillIcon';
import RiArrowDropRightFill from 'remixicon-react/ArrowDropRightFillIcon';
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
import RiCheckDoubleFill from 'remixicon-react/CheckDoubleFillIcon';
import RiFilmFill from 'remixicon-react/FilmFillIcon';
import RiFileList3Fill from 'remixicon-react/FileList3FillIcon';
import RiFileSettingsFill from 'remixicon-react/FileSettingsFillIcon';
import RiCheckFill from 'remixicon-react/CheckFillIcon';
import RiArrowRightSLine from 'remixicon-react/ArrowRightSLineIcon';
import Separator from '../../assets/images/separator-lp.svg';
import SeparatorGreen from '../../assets/images/separator-green.svg';
import Faq from 'react-faq-component';
import { Link } from 'react-router-dom';
import Whatsapp from '../../components/whatsapp/Whatsapp';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

function VendaTodosOsDias() {
    const whatsapp = "https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista%20em%20E-commerce";

    const data = {
        rows: [
          {
            title: "Por quanto tempo tenho acesso ao Máquina?",
            content: "O acesso ao Máquina, à comunidade e a todos bônus é de 12 meses."
          },
          {
            title: "Após 12 meses, é possível renovar o acesso?",
            content: "Sim, você pode renovar seu acesso após um ano. Para isso, basta solicitar a renovação através do email: suporte@adrianogianini.com.br."
          },
          {
            title: "É possível cancelar após os 7 dias?",
            content: "Não. Você tem 7 dias para analisar tudo que precisar, assistir diversas aulas e optar por ficar ou não com o treinamento. Mas após 7 dias, não é mais possível fazer o cancelamento."
          },
          {
            title: "Se eu não gostar, posso cancelar? Como fazer o cancelamento do curso?",
            content: "Sim, você tem 7 dias corridos, a partir da sua compra, para analisar o curso e exercer o direito de cancelamento. Em até 7 dias, conforme o código de defesa do consumidor, é possível cancelar e receber 100% do valor pago, sem dificuldades. Para solicitar o cancelamento basta enviar um email para: suporte@adrianogianini.com.br."
          },
          {
            title: "Sobre quais assuntos o Máquina aborda?",
            content: "Você verá tudo sobre Rede de Pesquisa, Display, YouTube, Discovery, Performance Max, Shopping, Remarketing e muita estratégia avançada para produtos físicos, digitais, serviços, entre outros. Além de ChatGPT, Vendas, Criação de Sites, Google Analytics, Meta Ads, dentre outros."
          },
          {
            title: "Posso solicitar uma mentoria/consultoria individual ou que alguém analise as minhas campanhas?",
            content: "Não, isso não é possível. Não vendemos consultoria individual, mas sim um treinamento para que você aprenda a cuidar das suas próprias campanhas. É perfeitamente possível tirar dúvidas na comunidade, sempre que as tiver, mas não oferecemos a prestação de serviços de marketing para alunos. Apenas o treinamento, o suporte a dúvidas na comunidade e as aulas ao vivo em grupo fazem parte da sua compra."
          },
          {
            title: "Caso eu tenha dúvidas, há como fazer perguntas e obter ajuda?",
            content: "Sim! Temos uma comunidade no Facebook onde você pode fazer perguntas para obter ajuda. Muitas vezes, inclusive, de negócios iguais ao seu, que já aplicaram os conhecimentos do curso e estão gerando resultados. Além disso, temos um time de mentores altamente qualificados e treinados diariamente no Método do Máquina, que ajudarão com as suas dúvidas."
          },
          {
            title: "O Curso é Atualizado? Funciona para o momento presente?",
            content: "Sim, o curso é super atualizado, com as aulas regravadas sempre que algo deixa de existir ou funcionar. Também incluímos novas aulas sempre que novos recursos são lançados, para que você fique sempre totalmente atualizado sobre o que está funcionando no momento."
          },
          {
            title: "Como funcionam as aulas? São gravadas ou ao vivo?",
            content: "O curso inteiro é gravado. Você tem acesso assim que seu pagamento é confirmado. Existem momentos ao vivo, onde são feitos estudos de casos de alunos, de acordo com critérios explicados dentro da plataforma. Esses momentos são bônus, pois tudo que o aluno precisa para anunciar está nas aulas. Os estudos de caso servem para ver, na prática, um negócio que aplicou os conhecimentos das aulas. Ainda assim, mesmo esses momentos sendo ao vivo, as gravações sempre ficam disponíveis e podem ser assistidas posteriormente."
          },
          {
            title: "Sou iniciante, posso fazer o curso ou precisa ter experiência?",
            content: "Sim, pode fazer sem medo. O curso começa totalmente do zero, para quem nunca teve contato com marketing digital na vida, e vai avançando até os níveis estratégicos mais avançados, para que você encontre o melhor caminho no Google para vender todos os dias e que faça sentido para o seu negócio e quanto de verba você tem disponível para começar a anunciar."
          },
          {
            title: "Não tenho cartão de crédito, é possível parcelar de alguma outra forma?",
            content: "Sim, nós temos soluções de parcelamento sem o uso do cartão de crédito. Para esta opção, é necessário enviar um e-mail solicitando mais informações para suporte@adrianogianini.com.br."
          },
          {
            title: "Não tenho limite de crédito em um cartão, consigo pagar usando dois cartões?",
            content: "Sim, é possível. Para esta forma de pagamento, é necessário enviar uma solicitação para suporte@adrianogianini.com.br, informando que deseja pagar com dois cartões de crédito."
          },
          {
            title: "Em quanto tempo o acesso às aulas e aos bônus estarão disponíveis para mim?",
            content: "Todas as aulas do método são liberadas imediatamente após a confirmação do seu pagamento. Os bônus são liberados no oitavo dia da sua compra, depois de você testar e decidir que o curso principal é para você."
          },
          {
            title: "Sou Afiliado, esse curso é indicado para mim?",
            content: "Não, nosso curso é focado em empresas. Indicamos para donos de empresas, funcionários de empresas (departamento de marketing) ou profissionais que prestam serviços para empresas, como gestores de tráfego, agências e consultores. Mesmo sabendo que muitos dos nossos conteúdos gratuitos ajudam os afiliados, nós não recomendamos nosso curso para Afiliados. Por ser um curso focado em empresas e gestores de tráfego que atendem empresas, não há um exemplo sequer, um cenário sequer, dentro da realidade de quem vive nesse meio."
          },
          {
            title: "Posso compartilhar ou repassar o meu acesso para outra pessoa?",
            content: "Não. Toda compra é pessoal e intransferível, sendo proibido o compartilhamento do usuário, sob risco de bloqueio permanente. Utilizamos tecnologia avançada que detecta compartilhamento de usuários e bloqueia sempre que isso acontece. É possível, mediante solicitação formal por email, trocar os dados de acesso em casos onde o comprador e o aluno são pessoas diferentes. Para isso, um email deverá ser enviado para suporte@adrianogianini.com.br."
          }
        ]
      }

    return (
        <div className={styles.container}>
            <section className={styles.containerChild}>
                <div className={`${styles.child1} ${styles.child}`}>
                    <div>
                        <div className={styles.logo}>
                            <Link to="/">
                                <img src={logo} alt=""/>
                            </Link>

                            <div className={styles.especialistasBtn}>
                                <a href="" rel="noreferrer">
                                    Equipe de Vendas
                                </a>
                            </div>
                        </div>
                        <div className={styles.gridTwoColumns}>
                            <div className={`${styles.gridTwoColumnInfo} ${styles.gridTwoColumnsChild}`}>
                                <h1 className={styles.gridTwoColumnInfoTitle}>
                                    <span className={styles.destaqueText}>Pare de Perder Dinheiro na Internet </span>
                                    e Comece a Vender Todos os Dias
                                </h1>
                                <p className={styles.gridTwoColumnInfoDescription}>Tenha acesso ao Curso mais completo para vender seu produto ou serviço na internet. Aprenda como atrair mais clientes para o seu negócio, investindo pouco e ganhando muito.</p>
                                <p className={`${styles.gridTwoColumnInfoCta} ${styles.destaqueText}`}>
                                    <span><RiFireFill /> </span>
                                    Aplicado por +9.000 negócios em 23 países
                                </p>
                                <div className={`${styles.gridTwoColumnInfoBtn} ${styles.ctaBtn}`}>
                                    <a href="!#">
                                        Inscreva-se por 
                                        <span>
                                            <h3> 12x </h3>
                                        </span>
                                        <span>
                                            <h3>R$97</h3>
                                        </span>
                                    </a>
                                    <p>
                                        <span><RiArrowDropRightFill /> ou à vista com desconto </span>
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
                    </div>

                </div>
            </section>

            <section className={styles.containerChild}>
                <div className={`${styles.child2} ${styles.child}`}>
                    <div>
                        <div className={styles.gridTwoColumns}>
                            <div className={styles.gridTwoColumnsChild}>
                                <div className={styles.gridTwoColumnInfoSticky}>
                                    <p className={styles.destaqueText}>
                                        <span><RiRocket2Fill /></span>
                                    </p>
                                    <p className={styles.destaqueText}>Módulos do máquina</p>
                                    <h2>O que você vai receber ao se inscrever no treinamento</h2>
                                </div>
                            </div>

                            <div className={`${styles.gridTwoColumnInfoCards} ${styles.gridTwoColumnsChild}`}>
                                <div className={styles.stickyInfoCard}>
                                    <span>01</span>
                                    <h4>O mapa para atrair seu público comprador</h4>
                                    <p>Você vai aprender  as minhas melhores técnicas e estratégias para encontrar as pessoas que vão comprar de você na internet. Só com esse módulo, você já conseguirá aumentar as suas vendas e reduzir os custos de investimento.</p>
                                </div>
                                <div className={styles.stickyInfoCard}>
                                    <span>02</span>
                                    <h4>Os Segredos de Persuasão que Fazem você Vender MUITO</h4>
                                    <p>Aprenda como usar a persuasão para criar anúncios altamente poderosos que vão vender muito mais o seu produto ou serviço. Você deixará de criar anúncios sem graça e sem vendas e passará a criar anúncios campeões que vendem todos os dias.</p>
                                </div>
                                <div className={styles.stickyInfoCard}>
                                    <span>03</span>
                                    <h4>Como Vender no Google, na maior fonte de clientes do mundo</h4>
                                    <p>Você vai aprender  absolutamente tudo que precisa para criar uma campanha profissional para vender no Google, passo a passo. Vou mostrar técnicas para descobrir palavras chave, para configurar sua campanha e para segmentá-la do jeito certo que fará você vender de verdade, para criar anúncios irresistíveis e muito mais.</p>
                                </div>
                                <div className={styles.stickyInfoCard}>
                                    <span>04</span>
                                    <h4>O mapa para atrair seu público comprador</h4>
                                    <p>Você vai aprender  as minhas melhores técnicas e estratégias para encontrar as pessoas que vão comprar de você na internet. Só com esse módulo, você já conseguirá aumentar as suas vendas e reduzir os custos de investimento.</p>
                                </div>
                            </div>
                        </div>

                        <span className={styles.sectionSeparator}>
                            <img src={Separator} alt=""/>
                        </span>
                    </div>
                </div>
            </section>

            <section className={styles.containerChild}>
                <div className={`${styles.child3} ${styles.child}`}>
                    <div>
                        <div>
                            <h2>Garantimos conteúdo avançado sobre tudo o que você precisa saber para começar a vender online</h2>
                        </div>

                        <div className={styles.mainVideo}>
                            <iframe src="https://www.youtube.com/embed/hc0ZDRRkhl8?si=gFeTKntjGf-Qpx0j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        
                        <div>
                            <GoogleReviews />
                        </div>
                        
                        <div className={styles.carouselVideos}>
                            <Swiper
                                initialSlide={9}
                                loop={true}
                                spaceBetween={60}
                                pagination={{ clickable: true, dynamicBullets: true }}
                                autoplay={{ delay: 6000 }}
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
                                        <iframe src="https://www.youtube.com/embed/-76gQhPZKJw?si=TCLoqktaonaDX1IH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </SwiperSlide>
                                
                                <SwiperSlide className={styles.swiperContent}>
                                    <div className={styles.serviceContent}>
                                        <iframe src="https://www.youtube.com/embed/hc0ZDRRkhl8?si=SI3gAobIkPbYE-6f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className={styles.swiperContent}>
                                    <div className={styles.serviceContent}>
                                        <iframe src="https://www.youtube.com/embed/21J8D9yOE2Q?si=LmCYlQkOGq-B-omX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </SwiperSlide>
                                    
                                <SwiperSlide className={styles.swiperContent}>
                                    <div className={styles.serviceContent}>
                                        <iframe src="https://www.youtube.com/embed/OwkOLhnOpQk?si=UrT0eXlrE9AboGjO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </SwiperSlide>
                                    
                                <SwiperSlide className={styles.swiperContent}>
                                    <div className={styles.serviceContent}>
                                        <iframe src="https://www.youtube.com/embed/HnzudnjQFH0?si=UCfQIJzpF1ovRhAq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </SwiperSlide>
                                    
                                <SwiperSlide className={styles.swiperContent}>
                                    <div className={styles.serviceContent}>
                                        <iframe src="https://www.youtube.com/embed/ZHkNNMPhv7o?si=PnnEbB9o6piGoqJz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </SwiperSlide>
                                    
                                <SwiperSlide className={styles.swiperContent}>
                                    <div className={styles.serviceContent}>
                                        <iframe src="https://www.youtube.com/embed/vhVR1xfz80Y?si=ONLdcRbr4t-MEnZm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </SwiperSlide>
                                    
                                <SwiperSlide className={styles.swiperContent}>
                                    <div className={styles.serviceContent}>
                                        <iframe src="https://www.youtube.com/embed/GYPvdAp4FEY?si=oW6bkp_r5GuETaTt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </SwiperSlide>
                                    
                                <SwiperSlide className={styles.swiperContent}>
                                    <div className={styles.serviceContent}>
                                        <iframe src="https://www.youtube.com/embed/ohyIOIEPq7g?si=Tkz9CMl72t25cb0J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </SwiperSlide>
                                    
                                <SwiperSlide className={styles.swiperContent}>
                                    <div className={styles.serviceContent}>
                                        <iframe src="https://www.youtube.com/embed/IvEUCnoU-fI?si=Ca1tOg9fzOM3r8-b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </SwiperSlide>

                                <div className={styles.spacingNavigation}></div>
                            </Swiper>
                        </div>

                        <div className={`${styles.gridTwoColumnInfoBtn} ${styles.ctaBtn}`}>
                            <a href="!#">
                                Inscreva-se por 
                                <span>
                                    <h3> 12x </h3>
                                </span>
                                <span>
                                    <h3>R$97</h3>
                                </span>
                            </a>
                            <p>
                                <span><RiArrowDropRightFill /> ou à vista com desconto </span>
                                por R$997
                            </p>
                        </div>
                        
                        <span className={styles.sectionSeparator}>
                            <img src={Separator} alt=""/>
                        </span>                        
                    </div>
                </div>
            </section>

            <section className={styles.containerChild}>
                <div className={`${styles.child4} ${styles.child}`}>
                    <div>
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
                                    <span className={styles.destaqueText}>Por isso te garanto: </span>
                                    esse não é mais um curso de como vender na internet. O meu 
                                    <span className={styles.underlineText}> treinamento foi regravado depois de mais de 9.000 negócios aplicarem o meu método.</span>
                                </p>
                                <div className={`${styles.gridTwoColumnInfoBtn} ${styles.ctaBtn}`}>
                                    <a href="!#">
                                        Inscreva-se por 
                                        <span>
                                            <h3> 12x </h3>
                                        </span>
                                        <span>
                                            <h3>R$97</h3>
                                        </span>
                                    </a>
                                    <p>
                                        <span><RiArrowDropRightFill /> ou à vista com desconto </span>
                                        por R$997
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <span className={styles.sectionSeparator}>
                            <img src={Separator} alt=""/>
                        </span>
                    </div>

                </div>
            </section>

            <section className={styles.containerChild}>
                <div className={`${styles.child5} ${styles.child}`}>
                    <div>
                        <div>
                            <h2>
                                <span className={styles.destaqueText}>E ao se inscrever nele agora, </span>
                                você terá um curso com:
                            </h2>
                        </div>

                        <div className={styles.gridCardsInfos}>
                            <div className={styles.gridCardInfoChild}>
                                <p>
                                    <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiKey2Fill /></span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}>Estruturas Validadas de Palavra Chave: </span>
                                    eu ensino no curso os melhores tipos de palavras chave pra vender no Google, já economizando muito tempo e dinheiro pra você.
                                </p>
                            </div>
                            <div className={styles.gridCardInfoChild}>
                                <p>
                                    <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiToolsFill /></span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}>O que NÃO FUNCIONA e Erros Comuns: </span>
                                    eu também já ensino o que não funciona e os erros mais comuns cometidos por mais de 9.000 alunos. Só isso paga o treinamento.
                                </p>
                            </div>
                            <div className={styles.gridCardInfoChild}>
                                <p>
                                    <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiLightbulbFill /></span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}>Soluções Incríveis para os Problemas Comuns: </span>
                                    eu sei todos os problemas que vão acontecer na sua jornada de vender na internet. Se a sua campanha não vender, tem uma aula só para transformá-la em uma campanha que vende. Se as suas vendas caírem do nada, tem uma aula só para resolver isso.
                                </p>
                            </div>
                            <div className={styles.gridCardInfoChild}>
                                <p>
                                    <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiMedal2Fill /></span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}>Modelos de Anúncios que Funcionam: </span>
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
                                <span>
                                    <h3> 12x </h3>
                                </span>
                                <span>
                                    <h3>R$97</h3>
                                </span>
                            </a>
                            <p>
                                <span><RiArrowDropRightFill /> ou à vista com desconto </span>
                                por R$997
                            </p>
                        </div>
                                        
                        <span className={styles.sectionSeparator}>
                            <img src={Separator} alt=""/>
                        </span>
                    </div>
                </div>
            </section>

            <section className={styles.containerChild}>
                <div className={`${styles.child6} ${styles.child}`}>
                    <div>
                        <div className={styles.titleSub}>
                            <h2>    
                                E você também aprenderá a
                                <span className={styles.destaqueText}> vender em todas as redes do Google</span>
                            </h2>
                            <p>Veja mais módulos do Máquina que vão te ajudar a ter mais opções de vendas para o seu produto ou serviço:</p>
                        </div>

                        <div className={styles.gridCardsInfos}>
                            <div className={`${styles.gridCardInfoChild} ${styles.borderLeft}`}>
                                <p>
                                    <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiWindow2Fill /></span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}>Como Vender na Rede de Display</span>
                                    Você vai aprender como pode vender na Internet através de sites parceiros do Google, inclusive vender para pessoas que ainda não estão procurando pelo que você vende, mas já precisam da sua solução.
                                </p>
                            </div>
                            <div className={`${styles.gridCardInfoChild} ${styles.borderRight}`}>
                                <p>
                                    <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiVidiconFill /></span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}>Como Vender no Youtube Ads</span>
                                    O Youtube é uma mina de ouro. Desde negócios locais até infoprodutos, podemos vender praticamente tudo através dessa rede pouco explorada. Descubra as melhores estratégias para transformar a rede de vídeos, segunda maior do Google, em uma Máquina de vendas para o seu negócio.
                                </p>
                            </div>
                            <div className={`${styles.gridCardInfoChild} ${styles.borderLeft}`}>
                                <p>
                                    <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiShoppingBasketFill /></span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}>Como Vender no Google Shopping</span>
                                    Para você que tem uma loja virtual, essa é a melhor rede para vender no Google. Você vai aprender, do zero, tudo que precisa para atrair os melhores clientes para o seu e-commerce.
                                </p>
                            </div>
                            <div className={`${styles.gridCardInfoChild} ${styles.borderRight}`}>
                                <p>
                                    <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiLayout3Fill /></span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}>Como Vender na Rede Discovery</span>
                                    Aprenda como vender na rede de notícias do Google, ainda pouquíssimo explorada no Brasil, mas com um potencial gigantesco de gerar clientes para os mais diversos negócios, tanto serviços quanto produtos.
                                </p>
                            </div>
                            <div className={`${styles.gridCardInfoChild} ${styles.borderLeft}`}>
                                <p>
                                    <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiFlashlightFill /></span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}>Como Vender com Performance Max e I.A.</span>
                                    A Performance Max é a campanha mais inteligente do Google, que utiliza inteligência artificial para escalar as vendas da sua empresa. Descubra os segredos dessa campanha, para potencializar as vendas do seu negócio.
                                </p>
                            </div>
                            <div className={`${styles.gridCardInfoChild} ${styles.borderRight}`}>
                                <p>
                                    <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiReplyAllFill /></span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}>Como Vender com Estratégias de Remarketing</span>
                                    Você ainda aprenderá como reimpactar pessoas que não compraram de você na primeira vez, usando estratégias de persuasão para quebrar objeções e aumentar as vendas do seu site.
                                </p>
                            </div>
                        </div>

                        <div className={`${styles.gridTwoColumnInfoBtn} ${styles.ctaBtn}`}>
                            <a href="!#">
                                Inscreva-se por 
                                <span>
                                    <h3> 12x </h3>
                                </span>
                                <span>
                                    <h3>R$97</h3>
                                </span>
                            </a>
                            <p>
                                <span><RiArrowDropRightFill /> ou à vista com desconto </span>
                                por R$997
                            </p>
                        </div>
                                
                        <span className={styles.sectionSeparator}>
                            <img src={Separator} alt=""/>
                        </span>
                    </div>
                </div>
            </section>

            <section className={styles.containerChild}>
                <div className={`${styles.child7} ${styles.child}`}>
                    <div>
                        <div className={styles.titleSub}>
                            <h2>Ahh, mas eu preciso de muita ajuda e só aula ensinando não basta</h2>
                            <p>Não se preocupe, eu pensei em absolutamente tudo para te ajudar a vender na Internet todos os dias. Ao se inscrever você também recebe:</p>
                        </div>

                        <div className={styles.gridCardsInfos}>
                            <div className={styles.gridCardInfoChild}>
                                <div>
                                    <img src={ImageNavicon1} alt=""/>
                                </div>
                                <div>
                                    <h3>Materiais de Apoio em PDF</h3>
                                    <p>Diversos materiais, com complementos das aulas, para te ajudar. E ainda, um livro resumo completo para reforçar seu conhecimento.</p>
                                </div>
                            </div>
                            <div className={styles.gridCardInfoChild}>
                                <div>
                                    <img src={ImageNavicon2} alt=""/>
                                </div>
                                <div>
                                    <h3>Planilhas Incríveis</h3>
                                    <p>Diversas planilhas que vão te ajudar no planejamento das suas campanhas e também na análise dos números que retornam suas campanhas.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2>E se eu tiver dúvidas? E se eu travar na hora de colocar em prática?</h2>

                            <p>
                                Temos uma comunidade onde você pode postar qualquer dúvida para receber ajuda de negócios que já estão 
                                <span>vendendo no Google todos os dias e sabem o caminho das pedras. </span>
                                São alunos iguais a você, que já passaram pelas mesmas dificuldades.
                            </p>

                            <p>
                                Além disso, nosso time de 
                                <span>Mentores Especialistas </span>
                                estão de plantão na Comunidade para tirar suas dúvidas e te ajudar a destravar sobre as dúvidas do treinamento. São Mentores que foram treinados diretamente por mim para atender suas dúvidas.
                            </p>
                        </div>
                                
                        <div className={`${styles.gridTwoColumnInfoBtn} ${styles.ctaBtn}`}>
                            <a href="!#">
                                Inscreva-se por 
                                <span>
                                    <h3> 12x </h3>
                                </span>
                                <span>
                                    <h3>R$97</h3>
                                </span>
                            </a>
                            <p>
                                <span><RiArrowDropRightFill /> ou à vista com desconto </span>
                                por R$997
                            </p>
                        </div>
        
                        <span className={styles.sectionSeparator}>
                            <img src={Separator} alt=""/>
                        </span>
                    </div>
                </div>
            </section>

            <section className={`${styles.containerChild} ${styles.sectionBg}`}>
                <div className={`${styles.child8} ${styles.child}`}>
                    <div>
                        <div>
                            <h2>Todos os Bônus que você recebe ao entrar para o Método Máquina de Tráfego e Conversão</h2>
                        </div>

                        <div className={styles.gridCardsInfos}>
                            <div className={styles.gridCardInfoChild}>
                                <img src={ImageMarketplaces} alt="" />
                            </div>

                            <div className={styles.gridCardInfoChild}>
                                <h2>Curso de Inteligência Artificial para Google Ads com ChatGPT</h2>

                                <p>O primeiro curso do Brasil onde você vai aprender Inteligência Artificial aplicada especificamente a Google Ads e vender na internet.</p>

                                <p>Você vai aprender a usar o ChatGPT para potencializar suas vendas e criar suas campanhas de um modo totalmente profissional e eficiente.</p>
                            </div>
                        </div>

                        <div className={styles.gridCardsMiniInfos}>
                            <div className={styles.gridCardMiniInfoChild}>
                                <div>
                                    <span><RiCheckDoubleFill /></span>
                                </div>
                                <div>
                                    <p>Curso de Google Analytics 4 (GA4)</p>
                                </div>
                            </div>
                            <div className={styles.gridCardMiniInfoChild}>
                                <div>
                                    <span><RiCheckDoubleFill /></span>
                                </div>
                                <div>
                                    <p>Curso de Técnicas de Vendas (em breve)</p>
                                </div>
                            </div>
                            <div className={styles.gridCardMiniInfoChild}>
                                <div>
                                    <span><RiCheckDoubleFill /></span>
                                </div>
                                <div>
                                    <p>Curso de Meta Ads (Facebook Ads e Instagram Ads)</p>
                                </div>
                            </div>
                            <div className={styles.gridCardMiniInfoChild}>
                                <div>
                                    <span><RiCheckDoubleFill /></span>
                                </div>
                                <div>
                                    <p>Curso de Criação de Sites Profissionais</p>
                                </div>
                            </div>
                            <div className={styles.gridCardMiniInfoChild}>
                                <div>
                                    <span><RiCheckDoubleFill /></span>
                                </div>
                                <div>
                                    <p>Curso de Teste A/B para Aumentar as Vendas</p>
                                </div>
                            </div>
                            <div className={styles.gridCardMiniInfoChild}>
                                <div>
                                    <span><RiCheckDoubleFill /></span>
                                </div>
                                <div>
                                    <p>Big FAQ Book de Dúvidas: perguntas já respondidas</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.title}>
                            <h2>
                                <span>Bônus ESPECIAIS </span>
                                para Gestores de Tráfego
                            </h2>
                        </div>

                        <div className={`${styles.gridCardsMiniInfos} ${styles.miniInfoTwoColumns}`}>
                            <div className={styles.gridCardMiniInfoChild}>
                                <div>
                                    <span><RiCheckDoubleFill /></span>
                                </div>
                                <div>
                                    <p>Plano para Viver de Gestão de Tráfego</p>
                                </div>
                            </div>
                            <div className={styles.gridCardMiniInfoChild}>
                                <div>
                                    <span><RiCheckDoubleFill /></span>
                                </div>
                                <div>
                                    <p>Plano para Faturar 10K por mês com Gestão de Tráfego</p>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.gridTwoColumnInfoBtn} ${styles.ctaBtn}`}>
                            <a href="!#">
                                Inscreva-se por 
                                <span>
                                    <h3> 12x </h3>
                                </span>
                                <span>
                                    <h3>R$97</h3>
                                </span>
                            </a>
                            <p>
                                <span><RiArrowDropRightFill /> ou à vista com desconto </span>
                                por R$997
                            </p>
                        </div>
        
                        <span className={styles.sectionSeparator}>
                            <img src={SeparatorGreen} alt=""/>
                        </span>
                    </div>
                </div>
            </section>

            <section className={styles.containerChild}>
                <div className={`${styles.child9} ${styles.child}`}>
                    <div>
                        <div className={styles.gridTwoColumns}>
                            <div className={styles.gridTwoColumnsChild}>
                                <div>
                                    <img src={logo} alt="" />
                                </div>

                                <h2>
                                    Estude em uma
                                    <span className={styles.destaqueText}> plataforma pensada no seu aprendizado</span>
                                </h2>

                                <p>Tudo que você precisa para aprender, em um só lugar.</p>

                                <p className={styles.iconStyle}>
                                    <span><RiFilmFill /></span>
                                    Aulas em alta definição
                                </p>
                                <p className={styles.iconStyle}>
                                    <span><RiFileList3Fill /></span>
                                    Resumos em PDF
                                </p>
                                <p className={styles.iconStyle}>
                                    <span><RiFileSettingsFill /></span>
                                    Diversas Planilhas de apoio
                                </p>
                            </div>

                            <div className={styles.gridTwoColumnsChild}>
                                <img src={ImageVantagesDrop} alt="" />
                            </div>
                        </div>

                        <div className={styles.title}>
                            <h2>
                                E para facilitar ainda mais a sua vida, eu preparei
                                <span className={styles.destaqueText}> bônus insanos </span>
                                para 
                                <span className={styles.underlineText}> você tomar sua decisão agora…</span>
                            </h2>
                        </div>

                        <div>
                            <img src={ImagePrimeiraAgencia} alt="" />
                        </div>

                        <div className={`${styles.gridTwoColumns} ${styles.lastChild}`}>
                            <div className={styles.gridTwoColumnsChild}>
                                <p>
                                    <span className={styles.destaqueText}><RiCheckFill /></span>
                                    Curso Máquina de Tráfego e Conversão - 
                                    <span className={styles.destaqueText}> R$2.500,00</span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}><RiCheckFill /></span>
                                    Curso de ChatGPT - 
                                    <span className={styles.destaqueText}> R$997,00</span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}><RiCheckFill /></span>
                                    Curso de Vendas - 
                                    <span className={styles.destaqueText}> R$2.000,00</span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}><RiCheckFill /></span>
                                    Curso de Google Analytics 4 (GA4) - 
                                    <span className={styles.destaqueText}> R$997,00</span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}><RiCheckFill /></span>
                                    Curso de Meta Ads (Facebook Ads e Instagram Ads) - 
                                    <span className={styles.destaqueText}> R$997,00</span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}><RiCheckFill /></span>
                                    Curso de Criação de Sites Profissionais - 
                                    <span className={styles.destaqueText}> R$497,00</span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}><RiCheckFill /></span>
                                    Curso de Teste A/B para Aumentar as Vendas - 
                                    <span className={styles.destaqueText}> R$497,00</span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}><RiCheckFill /></span>
                                    Curso Como Faturar 10k/mês com Gestão de Tráfego - 
                                    <span className={styles.destaqueText}> R$997,00</span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}><RiCheckFill /></span>
                                    Big FAQ Book de Dúvidas - 
                                    <span className={styles.destaqueText}> R$297,00</span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}><RiCheckFill /></span>
                                    Acesso à Comunidade para tirar dúvidas e fazer networking - 
                                    <span className={styles.destaqueText}> R$297,00</span>
                                </p>

                                <h2>
                                    TOTAL DE:
                                    <span className={styles.destaqueText}> R$9,779,00</span>
                                </h2>
                            </div>

                            <div className={styles.gridTwoColumnsChild}>
                                <div className={styles.logoInscrever}>
                                    <img src={logo} alt="" />
                                </div>

                                <div className={styles.ctaOther}>
                                    <p>
                                        <span>Por apenas</span>
                                        <span className={`${styles.ctaDestaque} ${styles.destaqueText}`}>
                                            <span>12x de </span>
                                            <span>
                                                <h3>R$97,00</h3>
                                            </span>
                                        </span>
                                    </p>
                                    <p>
                                        ou
                                        <span className={styles.underlineText}> R$997 </span>
                                        à vista
                                    </p>
                                </div>

                                <div className={styles.inscrever}>
                                    <h3>INSCREVA-SE AGORA</h3>
                                </div>

                                <div className={styles.paymentIcons}>
                                    <img src={PaymentIcons} alt="" />
                                </div>                   
                            </div>
                        </div>
        
                        <span className={styles.sectionSeparator}>
                            <img src={Separator} alt=""/>
                        </span>
                    </div>
                </div>
            </section>

            <section className={styles.containerChild}>
                <div className={`${styles.child10} ${styles.child}`}>
                    <div>
                        <div>
                            <h2>
                                Confira depoimentos de quem já comprou e já está
                                <span className={styles.destaqueText}> vendendo na Internet todos os dias</span>
                            </h2>
                        </div>

                        <div>
                            <GoogleReviews />
                        </div>

                        <div className={styles.gridTwoColumns}>
                            <div className={styles.gridTwoColumnsChild}>
                                <div>
                                    <img src={ImageNavicon1} alt="" />
                                </div>
                                <h3>Compromisso e Satisfação Garantida</h3>
                                <p>Se você ainda está indeciso, quero te contar algo muito importante: Você não tem absolutamente NADA a perder se inscrevendo no Máquina.</p>
                            </div>

                            <div className={styles.gridTwoColumnsChild}>
                                <div>
                                    <h3>Satisfação Garantida Incondicional</h3>
                                    <p>Você tem 7 dias para testar o treinamento e descobrir se ele é para você. Se, dentro deste período, você não gostar, basta enviar um e-mail e devolveremos o seu dinheiro completo sem enrolação ou pergunta alguma.</p>
                                </div>

                                <div>
                                    <h3>Satisfação Garantida Condicional</h3>
                                    <p>Se em até um ano, assistindo ao curso, aplicando os conhecimentos adquiridos no curso, fazendo os exercícios, tirando suas dúvidas e seguindo as recomendações do professor, você achar que o curso não te ajudou em nada a vender mais no Google, te darei uma hora de consultoria comigo, Adriano Gianini, analisando sua conta e traçando a estratégia que você deve seguir.</p>
                                </div>
                            </div>
                        </div>

                        <span className={styles.sectionSeparator}>
                            <img src={Separator} alt=""/>
                        </span>
                    </div>

                </div>
            </section>

            <section className={`${styles.containerChild} ${styles.faqSection}`}>
                <div className={`${styles.child11} ${styles.child}`}>
                    <div>
                        <div className={styles.title}>
                            <h2>Ainda com dúvida?</h2>
                            <p>Abaixo você encontra as perguntas mais comuns sobre o treinamento</p>
                        </div>

                        <div className={styles.faq}>
                            <Faq data={data}/>
                        </div>

                        <div className={`${styles.gridTwoColumnInfoBtn} ${styles.ctaBtn}`}>
                            <a href="!#">
                                Inscreva-se por 
                                <span>
                                    <h3> 12x </h3>
                                </span>
                                <span>
                                    <h3>R$97</h3>
                                </span>
                            </a>
                            <p>
                                <span><RiArrowDropRightFill /> ou à vista com desconto </span>
                                por R$997
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.containerChild} ${styles.footerBg}`}>
                <div className={`${styles.child12} ${styles.child}`}>
                    <div className={styles.footerGrid}>
                        <div>
                            <img src={logo} alt="" />
                        </div>

                        <p>O Máquina é o Método Validado por mais de 9.000 empresas em 23 países para vender no Google todos os dias.</p>

                        <a href="!#">
                            Quero me inscrever 
                            <span><RiArrowRightSLine /></span>
                        </a>

                        <div className={styles.copy}>
                            <p>© 2023 Goodds - Todos os direitos reservados</p>
                        </div>  
                    </div>
                </div>
            </section>

            <Whatsapp whatsappMessage={whatsapp} />
        </div>
    )
}

export default VendaTodosOsDias;