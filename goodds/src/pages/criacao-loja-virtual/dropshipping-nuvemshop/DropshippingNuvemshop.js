import React from "react";
import './DropshippingNuvemshop.css'
import styles from '../../venda-todos-os-dias/VendaTodosOsDias.module.css';
import stylesMain from '../../../components/main-cta/MainCta.module.css';
import Footer from "../../../components/footer/Footer";
import DropdownTableLoja from "../../../components/dropdown-table/DropdownTableLoja";
import GoogleReviews from "../../../components/google-reviews/GoogleReviews";
import VantagensLoja from "../../../components/vantagens-loja/VantagensLoja";
import ImageVantagens from '../../../assets/images/section-vantagesdrop.webp';
import SimpleTwoColumns from "../../../components/section-simple-twocolumns/SimpleTwoColumns";
import Whatsapp from "../../../components/whatsapp/Whatsapp";
import MainCta from '../../../components/main-cta/MainCta';
import ImageMainCta from '../../../assets/images/drop-global-menu.webp';
import ImagePrimeiraAgencia from '../../../assets/images/home-primeira-agencia.webp';
import PlataformaNuvemShop from '../../../assets/images/plataforma-nuvemshop.webp';
import ImageParceiroPrintful from '../../../assets/images/parceiro-printful.webp';
import ImageCall1 from '../../../assets/images/call-start.svg';
import ImageCall2 from '../../../assets/images/call-aprovacao.svg';
import ImageCall3 from '../../../assets/images/call-marketing.svg';
import RiArrowDropRightFill from 'remixicon-react/ArrowDropRightFillIcon';
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
import RiFireFill from 'remixicon-react/FireFillIcon';
import RiAddFill from 'remixicon-react/AddFillIcon';
import Separator from '../../../assets/images/separator-gradient-azul.svg';
import SeparatorGradient from '../../../assets/images/separator-gradient.svg';
import ImageGarantia from '../../../assets/images/garantia-drop.webp';
import Faq from 'react-faq-component';
import ImageMainCta2 from '../../../assets/images/imagenew.png';
import PackagesDrop from "../../../components/packages-drop/PackagesDrop";

function DropshippingNuvemshop() {
    const whatsapp = "https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista%20em%20dropshipping";

    const contentHeaderSection = {
        destaqueTitleText1: "Criamos sua ",
        titleText: "Loja de Dropshipping ",
        destaqueTitleText2: "Personalizada com Fornecedores",
        description: "Tenha acesso ao Curso mais completo para vender seu produto ou serviço na internet. Aprenda como atrair mais clientes para o seu negócio, investindo pouco e ganhando muito.",
        vantagem1: "Criação da Marca e do Logo",
        vantagem2: "Mineração e Cadastro de 60 Produtos",
        vantagem3: "03 Anúncios + Assessor de Marketing",
        vantagem4: "Mentoria + Consultoria",
        vantagem5: "Curso com Centenas de Aulas",
        vantagem6: "Suporte Dedicado 24h",
        vantagem7: "Garantia Vitalícia",
        iconInfo:"Mais de 9.000 clientes em 12 países",
        btnTextDestaque2: "Preços e Soluções",
        btnDesc: "Aproveite nossa promoção de 50% OFF",
        linkBtn: "#pacotesDoDropTitle"
    }

    const data = {
        rows: [
          {
            title: "A Loja de Dropshipping Tradicional é diferente da Loja de Dropshipping Global e Latam?",
            content: "Sim, na Tradicional configuramos uma loja com checkout brasileiro e as descrições dos produtos são em português. Na loja Global e Latam as configurações de checkout e idioma são internacionais, assim como a descrição dos produtos em inglês ou espanhol. Desenvolvemos o layout personalizado para o idioma local."
          },
          {
            title: "Qual o idioma da loja global?",
            content: "Inglês ou espanhol, você poderá escolher."
          },
          {
            title: "Qual o prazo de desenvolvimento dos pacotes?",
            content: "Todos os desenvolvimentos são exclusivos e personalizados, por isso o prazo total de desenvolvimento pode variar de 20 à 30 dias conforme a solução contratada."
          },
          {
            title: "O domínio está incluso no pacote?",
            content: "Sim, está incluso o domínio .com e o domínio .com.br."
          },
          {
            title: "Quanto devo investir em marketing?",
            content: "Indicamos um investimento mínimo diário de R$50 para que você tenha retorno já nos primeiros dias. A definição do valor é relativo conforme o seu potencial de investimento e a velocidade de escala que deseja atingir."
          },
          {
            title: "Quanto tempo está incluso de assessoria de marketing no pacote?",
            content: "Disponibilizamos um especialista dedicado em marketing por 30 dias para gerenciar seus anúncios e campanhas. Após esse período você pode contratar a assessoria mensal de marketing ou seguir por conta própria gerenciando as campanhas que já estarão vendendo."
          },
          {
            title: "Como funciona a mineração e o cadastro dos produtos?",
            content: "Temos um departamento especializado em mineração e cadastro de produtos, que faz manualmente toda a seleção para garantir exclusividade. Escolhemos os melhores produtos para o nicho da sua loja e após a sua aprovação fazemos o cadastro em português na loja nacional e em inglês ou espanhol na loja global."
          },
          {
            title: "Como funciona a mentoria?",
            content: "Através da nossa plataforma de estudos você terá acesso a milhares de aulas, gravadas e ao vivo, que te ajudarão a vender todos os dias na internet. Além disso, você conta também com um time de mentores para te auxiliar com tudo."
          },
          {
            title: "Sou iniciante, posso comprar o pacote sem ter experiência?",
            content: "Sim, pode comprar sem medo. Nossa equipe te auxilia com tudo do zero! Desde o primeiro contato com dropshipping até as vendas."
          },
          {
            title: "Vou ter suporte 24h?",
            content: "Sim, no pacote está incluso 60 dias de suporte, após esse período você tem a opção de manter o acesso por apenas R$169 à nossa plataforma de suporte com uma equipe de plantão em horário comercial e vídeos tutoriais que te auxiliam com todas as suas dúvidas a hora que você precisar."
          },
        ]
      }

    return (
        <div id="pageLoja">
            {/* <MainCta setTop={false} mainCtaImage={ImageMainCta} data={contentHeaderSection} /> */}
            <div className={stylesMain.containerMainCta} id="topo-nuvemshop">
                <section className={stylesMain.containerChild}>
                    <div className={`${stylesMain.child1} ${styles.child}`}>
                        <div>
                            <div className={stylesMain.gridTwoColumns}>
                                <div className={`${stylesMain.gridTwoColumnInfo} ${stylesMain.gridTwoColumnsChild}`}>
                                    <h1 className={stylesMain.gridTwoColumnInfoTitle}>
                                        Criamos sua Loja de Dropshipping
                                        <br/>Na <span id="topo-destaque-nuvemshop">Nuvemshop</span>
                                    </h1>
                                    <div className={stylesMain.vantagens}>
                                        <p><span className={stylesMain.iconAdd}><RiAddFill /></span> Criação da Marca e do Logo</p>
                                        <p><span className={stylesMain.iconAdd}><RiAddFill /></span> Mineração e Cadastro de 60 Produtos</p>
                                        <p><span className={stylesMain.iconAdd}><RiAddFill /></span> 03 Anúncios + Assessor de Marketing</p>
                                        <p><span className={stylesMain.iconAdd}><RiAddFill /></span> Mentoria + Consultoria</p>
                                        <p><span className={stylesMain.iconAdd}><RiAddFill /></span> Curso com Centenas de Aulas</p>
                                        <p><span className={stylesMain.iconAdd}><RiAddFill /></span> Suporte Dedicado 24h</p>
                                        <p><span className={stylesMain.iconAdd}><RiAddFill /></span> Garantia Vitalícia</p>
                                    </div>
                                    <p className={`${stylesMain.gridTwoColumnInfoCta} ${stylesMain.destaqueText}`}>
                                        <span className={stylesMain.iconFire}><RiFireFill /> </span>
                                        Mais de 9.000 clientes em 12 países
                                    </p>
                                    <div className={`${stylesMain.gridTwoColumnInfoBtn} ${stylesMain.ctaBtn}`}>
                                        <a href="#pacotesDoDropTitle">
                                            <span>
                                                <p>Preços e Soluções</p>
                                            </span>
                                        </a>
                                        <p>
                                            <span><RiArrowDropRightFill />Aproveite nossa promoção de 50% OFF</span>
                                        </p>
                                    </div>
                                </div>

                                <div className={`${stylesMain.gridTwoColumnImage} ${stylesMain.gridTwoColumnsChild}`}>
                                    <img src={ImageMainCta} alt=""/>
                                </div>
                            </div>
                        </div>

                        <span className={stylesMain.sectionSeparatorGreen}>
                            <img src={Separator} alt=""/>
                        </span>

                    </div>
                </section>
            </div>
            
            <SimpleTwoColumns title="Especialistas Nuvemshop" descriptionOne="" descriptionDestaque="Somos a Primeira Agência de Dropshipping Nacional e Internacional do Brasil." description=" Desenvolvemos a loja personalizada e prestamos todos os serviços exclusivos para que sua loja venda todos os dias." image={PlataformaNuvemShop} />

            <VantagensLoja image={ImageVantagens} vantagemData="" />

            <GoogleReviews />

            <section className={styles.containerChild}>
                <div className={`${styles.child5} ${styles.child}`}>
                    <div>
                        <div>
                            <h2>
                                <span className={styles.destaqueText}>Ao contratar agora, </span>
                                você terá:
                            </h2>
                        </div>

                        <div className={styles.gridCardsInfos}>
                            <div className={styles.gridCardInfoChild}>
                                <p>
                                    <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiKey2Fill /></span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}><h6>Loja de Dropshipping Profissional: </h6></span>
                                    vamos criar e entregar uma Loja personalizada para você vender dentro e fora do Brasil faturando em real ou em dólar.
                                </p>
                            </div>
                            <div className={styles.gridCardInfoChild}>
                                <p>
                                    <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiToolsFill /></span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}><h6>Equipe de Marketing Dedicada: </h6></span>
                                    temos pacotes com gestor de tráfego dedicado para atender sua conta e garantir que você venda nos primeiros dias.
                                </p>
                            </div>
                            <div className={styles.gridCardInfoChild}>
                                <p>
                                    <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiMedal2Fill /></span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}><h6>Produtos Campeões Validados: </h6></span>
                                    fazemos a seleção de cada produto e após sua aprovação cadastramos com descrições de alta conversão na sua loja.
                                </p>
                            </div>
                            <div className={styles.gridCardInfoChild}>
                                <p>
                                    <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiLightbulbFill /></span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}><h6>Suporte Exclusivo 24h: </h6></span>
                                    fornecemos acompanhamento e suporte dedicado direto pela nossa plataforma exclusiva de atendimento ao cliente.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3>Você está a um clique de ter uma loja completa desenvolvida pela primeira agência especializada em Dropshipping do Brasil. Contrate agora e conquiste a sua liberdade financeira.</h3>
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
                                E você também terá
                                <span className={styles.destaqueText}> Mentoria com um time de Especialistas</span>
                            </h2>
                            <p>Além de executarmos tudo para você, também te ensinamos a vender todos os dias na internet.</p>
                        </div>

                        <div className={styles.gridCardsInfos}>
                            <div className={`${styles.gridCardInfoChild} ${styles.borderLeft}`}>
                                <p>
                                    <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiWindow2Fill /></span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}><h6>Gerencie os pedidos da sua Loja</h6></span>
                                    Ensinamos o passo-a-passo para que você possa de maneira simplificada fazer a gestão dos seus pedidos e das suas vendas.
                                </p>
                            </div>
                            <div className={`${styles.gridCardInfoChild} ${styles.borderRight}`}>
                                <p>
                                    <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiVidiconFill /></span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}><h6>Seu E-commerce do seu jeito</h6></span>
                                    Personalize e altere cores, banners, imagens e os textos da sua loja com tutoriais desenvolvidos por uma equipe de design qualificada.
                                </p>
                            </div>
                            <div className={`${styles.gridCardInfoChild} ${styles.borderLeft}`}>
                                <p>
                                    <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiShoppingBasketFill /></span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}><h6>Marketing para Facebook e Instagram</h6></span>
                                    Você vai aprender, do zero, tudo que precisa para atrair os melhores clientes para o seu e-commerce através dos anúncios patrocinados.
                                </p>
                            </div>
                            <div className={`${styles.gridCardInfoChild} ${styles.borderRight}`}>
                                <p>
                                    <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiLayout3Fill /></span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}><h6>Mineração de Produtos e Fornecedores</h6></span>
                                    Aprenda como selecionar produtos de alta conversão e escolher os fornecedores certos para sua Loja de Dropshipping.
                                </p>
                            </div>
                            <div className={`${styles.gridCardInfoChild} ${styles.borderLeft}`}>
                                <p>
                                    <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiFlashlightFill /></span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}><h6>Como utilizar IA para vender mais</h6></span>
                                    Criamos e disponibilizamos uma metodologia desenvolvida para otimizar toda sua operação utilizando Inteligência Artificial.
                                </p>
                            </div>
                            <div className={`${styles.gridCardInfoChild} ${styles.borderRight}`}>
                                <p>
                                    <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiReplyAllFill /></span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}><h6>Como prestar o melhor atendimento</h6></span>
                                    Através de uma equipe premiada você irá aprender a fornecer o melhor atendimento e suporte ao seu cliente no seu e-commerce.
                                </p>
                            </div>
                        </div>

                        {/* <div className={`${styles.gridTwoColumnInfoBtn} ${styles.ctaBtn}`}>
                            <a href="#pacotesDoDropTitle">
                                Preços e Soluções
                            </a>
                            <p>
                                <span className={styles.ctaBtnDesc}><RiArrowDropRightFill /> Aproveite nossa promoção de 50% OFF</span>
                            </p>
                        </div> */}
                                
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
                            <h2>Acompanhe todas as etapas do desenvolvimento com reuniões de alinhamento</h2>
                            <p>Pensamos em absolutamente tudo e compreendemos a importância de você acompanhar de perto todas as execuções.</p>
                        </div>

                        <div className={styles.gridCardsInfos}>
                            <div className={styles.gridCardInfoChild}>
                                <div>
                                    <img src={ImageCall1} alt=""/>
                                </div>
                                <div>
                                    <h3>Reunião Start</h3>
                                    <p>Após a contratação do pacote fazemos uma reunião com você para definir as personalizações da sua loja e também para te orientar sobre tudo.</p>
                                </div>
                            </div>
                            <div className={styles.gridCardInfoChild}>
                                <div>
                                    <img src={ImageCall2} alt=""/>
                                </div>
                                <div>
                                    <h3>Reunião de Aprovação</h3>
                                    <p>Criamos sua loja com exclusividade seguindo suas ideias e referências, e após o desenvolvimento você aprova tudo para que fique do seu jeito.</p>
                                </div>
                            </div>
                            <div className={styles.gridCardInfoChild}>
                                <div>
                                    <img src={ImageCall3} alt=""/>
                                </div>
                                <div>
                                    <h3>Reunião de Marketing</h3>
                                    <p>Com toda criação concluída nossa equipe de marketing alinha em uma reunião dedicada com você as estratégias dos anúncios patrocinados.</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.child7Info3}>
                            <h2>E depois do desenvolvimento?</h2>

                            <p>
                                Nosso time de 
                                <span> mentores especializados </span>
                                estão sempre de plantão para tirar suas dúvidas e auxiliar no gerenciamento da sua loja para você vender todos os dias na internet.
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
                            <h2>Ahhh, mas eu já tentei ter uma Loja de Dropshipping e não consegui…</h2>
                        </div>

                        <div className={styles.gridTwoColumns}>
                            <div className={`${styles.gridTwoColumnImage} ${styles.gridTwoColumnsChild}`}>
                                <img src={ImageMainCta2} alt=""/>
                            </div>

                            <div className={`${styles.gridTwoColumnInfo} ${styles.gridTwoColumnsChild}`}>
                                <p>Conhecemos a fundo o sentimento de querer criar uma Loja de Dropshipping por conta própria ou a frustração de não vender e não saber o porquê.</p>
                                <p>
                                    <span className={styles.destaqueText}><h6>Por isso Garantimos: </h6></span>
                                    essa não é só mais uma solução de Dropshipping. 
                                    <span className={styles.underlineText}> Os nossos pacotes foram desenvolvidos com base nas experiências e entrega de mais de 9.000 Lojas Virtuais em 12 países.</span>
                                </p>
                                {/* <div className={`${styles.gridTwoColumnInfoBtn} ${styles.ctaBtn}`}>
                                    <a href="#pacotesDoDropTitle">
                                        Preços e Soluções
                                    </a>
                                    <p>
                                        <span className={styles.ctaBtnDesc}><RiArrowDropRightFill /> Aproveite nossa promoção de 50% OFF</span>
                                    </p>
                                </div> */}
                            </div>
                        </div>
                        
                        <span className={styles.sectionSeparator}>
                            <img src={Separator} alt=""/>
                        </span>
                    </div>

                </div>
            </section>

            <div name="#pacotesDoDropTitle"><PackagesDrop /></div>
            <DropdownTableLoja />

            <section className={`${styles.containerChild} ${styles.sectionBg}`}>
                <div className={`${styles.child8} ${styles.child}`}>
                    <div>
                        <div className={styles.child8Title}>
                            <h2>Todos os Bônus que você recebe ao adquirir nosso pacote:</h2>
                        </div>

                        <div className={styles.gridCardsInfos}>
                            <div className={styles.gridCardInfoChild}>
                                <img src={ImageParceiroPrintful} alt="" />
                            </div>

                            <div className={styles.gridCardInfoChild}>
                                <h2>Integração da Printful para venda de produtos personalizados sob demanda sem estoque</h2>

                                <p>A Printful é a maior empresa de Print-on-Demand do mundo. Ela disponibiliza mais de 340 produtos para serem personalizados com a sua marca.</p>
                            </div>
                        </div>

                        <div className={styles.gridCardsMiniInfos}>
                            <div className={styles.gridCardMiniInfoChild}>
                                <div>
                                    <div>
                                        <span className={styles.checkIconDrop}><RiCheckDoubleFill /></span>
                                    </div>
                                    <div>
                                        <p>Tema Extra de Alta Conversão</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.gridCardMiniInfoChild}>
                                <div>
                                    <div>
                                        <span className={styles.checkIconDrop}><RiCheckDoubleFill /></span>
                                    </div>
                                    <div>
                                        <p>Curso de Técnicas e Estratégias de Vendas</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.gridCardMiniInfoChild}>
                                <div>
                                    <div>
                                        <span className={styles.checkIconDrop}><RiCheckDoubleFill /></span>
                                    </div>
                                    <div>
                                        <p>Acesso a Fornecedores Nacionais Exclusivos</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.gridCardMiniInfoChild}>
                                <div>
                                    <div>
                                        <span className={styles.checkIconDrop}><RiCheckDoubleFill /></span>
                                    </div>
                                    <div>
                                        <p>Consultoria de Contabilidade</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.gridCardMiniInfoChild}>
                                <div>
                                    <div>
                                        <span className={styles.checkIconDrop}><RiCheckDoubleFill /></span>
                                    </div>
                                    <div>
                                        <p>Condições Especiais em Apps e Plataformas</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.gridCardMiniInfoChild}>
                                <div>
                                    <div>
                                        <span className={styles.checkIconDrop}><RiCheckDoubleFill /></span>
                                    </div>
                                    <div>
                                        <p>Receba um Funil de Vendas Validado</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.title}>
                            <h2>
                                <span>Bônus EXCLUSIVOS </span>
                                para Venda Global
                            </h2>
                        </div>

                        <div className={`${styles.gridCardsMiniInfos} ${styles.miniInfoTwoColumns}`}>
                            <div className={styles.gridCardMiniInfoChild}>
                                <div>
                                    <div>
                                        <span className={styles.checkIconDrop}><RiCheckDoubleFill /></span>
                                    </div>
                                    <div>
                                        <p>Metodologia para Mineração Global</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.gridCardMiniInfoChild}>
                                <div>
                                    <div>
                                        <span className={styles.checkIconDrop}><RiCheckDoubleFill /></span>
                                    </div>
                                    <div>
                                        <p>Estudo Analítico dos Principais Países</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className={`${styles.gridTwoColumnInfoBtn} ${styles.ctaBtn}`}>
                            <a href="#pacotesDoDropTitle">
                                Preços e Soluções
                            </a>
                            <p>
                                <span className={styles.ctaBtnDesc}><RiArrowDropRightFill /> Aproveite nossa promoção de 50% OFF</span>
                            </p>
                        </div> */}
        
                        <span className={styles.sectionSeparator}>
                            <img src={SeparatorGradient} alt=""/>
                        </span>
                    </div>
                </div>
            </section>

            <section className={styles.containerChild}>
                <div className={`${styles.child10} ${styles.child}`}>
                    <div>
                        {/* <div>
                            <h2>
                                Confira depoimentos de quem já comprou e já está
                                <span className={styles.destaqueText}> vendendo na Internet todos os dias</span>
                            </h2>
                        </div> */}

                        <div className={styles.reviewsGoogle}>
                            <GoogleReviews />
                        </div>

                        <div className={styles.gridTwoColumns}>
                            <div className={styles.gridTwoColumnsChild}>
                                <div>
                                    <img src={ImageGarantia} alt="" />
                                </div>
                            </div>

                            <div className={styles.gridTwoColumnsChild}>
                                <div>
                                    <h3>Garantia Vitalícia</h3>
                                    <p>Você recebe nossa Garantia Técnica para sempre, assegurando que a solução adquirida funcionará conforme especificações técnicas prometidas. Esta garantia é válida para clientes que possuírem nosso suporte mensal.</p>
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
                            <p>Abaixo você encontra as perguntas mais comuns sobre os pacotes</p>
                        </div>

                        <div className={styles.faq}>
                            <Faq data={data}/>
                        </div>

                        {/* <div className={`${styles.gridTwoColumnInfoBtn} ${styles.ctaBtn}`}>
                            <a href="#pacotesDoDropTitle">
                                Preços e Soluções
                            </a>
                            <p>
                                <span className={styles.ctaBtnDesc}><RiArrowDropRightFill /> Aproveite nossa promoção de 50% OFF</span>
                            </p>
                        </div> */}
                    </div>
                </div>
            </section>

            <Footer linkCtaWhatsapp={whatsapp} mostrarSecao={false} />
            <Whatsapp whatsappMessage={whatsapp} />
        </div>
    )
}

export default DropshippingNuvemshop;