import React from "react";
import style from './PrintOnDemand.module.css';
import Footer from "../../components/footer/Footer";
import DropdownTableLoja from "../../components/dropdown-table/DropdownTableLoja";
import GoogleReviews from "../../components/google-reviews/GoogleReviews";
import VantagensLoja from "../../components/vantagens-loja/VantagensLoja";
import ImageVantagens from '../../assets/images/section-vantagesdrop.webp';
import SimpleTwoColumns from "../../components/section-simple-twocolumns/SimpleTwoColumns";
import Whatsapp from "../../components/whatsapp/Whatsapp";
import MainCta from '../../components/main-cta/MainCta';
import ImageMainCta from '../../assets/images/drop-global-menu.webp';
import ImagePrimeiraAgencia from '../../assets/images/home-primeira-agencia.webp';
import PackagesSection from "../../components/packages-section/PackagesSection";

import ImageParceiroPrintful from '../../assets/images/parceiro-printful.webp';
import ImageCall1 from '../../assets/images/call-start-print.svg';
import ImageCall2 from '../../assets/images/call-aprovacao-print.svg';
import ImageCall3 from '../../assets/images/call-marketing-print.svg';
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
import Separator from '../../assets/images/separator-lp-print.svg';
import SeparatorGradient from '../../assets/images/separator-orange.svg';
import ImageGarantia from '../../assets/images/garantia-drop.webp';
import Faq from 'react-faq-component';
import ImageMainCta2 from '../../assets/images/imagenew.png';
import PackagesDrop from "../../components/packages-drop/PackagesDrop";

function PrintOnDemand() {
    const whatsapp = "https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista%20em%20print%20on%20demand";

    const vantagemData = {
        vantagemTitle: "Vantagens da nossa solução",
        vantagemSubtitle4: "Fazemos a intergração da sua Loja Virtual com os melhores fornecedores de Print On Demand do mercado."
    }

    const packageData1 = {
        packageTitle1: "Start",
        packageDescription1: "Criação da Loja Virtual completa, integrada com as redes sociais, meios de pagamento e fornecedores de Print On Demand.",
        packagePrice1: "3.997",
        packageNews1: "1.997",
        packageParcel1: "202,38",
        packageName1: " no Start",
        included1Package1: "Criação da Loja Virtual Completa",
        included2Package1: "Layout Personalizado",
        included3Package1: "Mentoria + Consultoria",
        included4Package1: "Curso com Centenas de Aulas",
        included5Package1: "Suporte Especializado 24h",
        included6Package1: "Garantia Vitalícia",
        included7Package1: "Domínio Grátis (www.suamarca.com.br)",
        included13Package1: "Criação da Logomarca",
        included14Package1: "Anúncios (Facebook e Instagram)",
        included15Package1: "30 Dias de Assessoria de Marketing",
        packageLink1: "https://dropshipping-goodds.catalog.yampi.io/desenvolvimento-print-on-demand-start/p",
        btnName1: "Comprar"
    };
    const packageData2 = {
        packageTitle2: "Super",
        packageDescription2: "Desenvolvimento da Loja Virtual completa e da Logo profissional + integração com fornecedores de Print On Demand + integração de marketing e 1 anúncio.",
        packagePrice2: "5.997",
        packageNews2: "2.997",
        packageParcel2: "303,72",
        packageName2: " no Super",
        included1Package2: "Criação da Loja Virtual Completa",
        included2Package2: "Criação da Logomarca",
        included3Package2: "Layout Personalizado",
        included4Package2: "Mentoria + Consultoria",
        included5Package2: "Curso com Centenas de Aulas",
        included6Package2: "Suporte Especializado 24h",
        included7Package2: "Garantia Vitalícia",
        included8Package2: "Domínio Grátis (www.suamarca.com.br)",
        included9Package2: "1 Anúncio (Facebook e Instagram)",
        included13Package2: "30 Dias de Assessoria de Marketing",
        packageLink2: "https://dropshipping-goodds.catalog.yampi.io/desenvolvimento-print-on-demand-super/p",
        btnName2: "Comprar"
    };
    const packageData3 = {
        packageTitle3: "Mega",
        packageDescription3: "A solução mais completa e mais vendida, inclui tudo do pacote Super + assessoria de marketing dedidacada e 3 anúncios.",
        packagePrice3: "7.997",
        packageNews3: "3.997",
        packageParcel3: "405,06",
        packageName3: " no Mega",
        included1Package3: "Criação da Loja Virtual Completa",
        included2Package3: "Criação da Logomarca",
        included3Package3: "Layout Personalizado",
        included4Package3: "Mentoria + Consultoria",
        included5Package3: "Curso com Centenas de Aulas",
        included6Package3: "Suporte Especializado 24h",
        included7Package3: "Garantia Vitalícia",
        included8Package3: "Domínio Grátis (www.suamarca.com.br)",
        included9Package3: "3 Anúncios (Facebook e Instagram)",
        included10Package3: "30 Dias de Assessoria de Marketing",
        packageLink3: "https://dropshipping-goodds.catalog.yampi.io/desenvolvimento-print-on-demand-mega/p",
        btnName3: "Comprar"
    };

    const data = {
        rows: [
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
            title: "Como funciona o cadastro dos produtos?",
            content: "Temos um departamento especializado no cadastro de produtos, que faz manualmente toda a seleção para garantir exclusividade. Escolhemos os melhores produtos para o nicho da sua loja e após a sua aprovação fazemos o cadastro dos produtos."
          },
          {
            title: "Como funciona a mentoria?",
            content: "Através da nossa plataforma de estudos você terá acesso a milhares de aulas, gravadas e ao vivo, que te ajudarão a vender todos os dias na internet. Além disso, você conta também com um time de mentores para te auxiliar com tudo."
          },
          {
            title: "Sou iniciante, posso comprar o pacote sem ter experiência?",
            content: "Sim, pode comprar sem medo. Nossa equipe te auxilia com tudo do zero! Desde o primeiro contato com Print On Demand até as vendas."
          },
          {
            title: "Vou ter suporte 24h?",
            content: "Sim, no pacote está incluso 60 dias de suporte, após esse período você tem a opção de manter o acesso por apenas R$139 à nossa plataforma de suporte com uma equipe de plantão em horário comercial e vídeos tutoriais que te auxiliam com todas as suas dúvidas a hora que você precisar."
          },
        ]
      }

    return (
        <div className={style.pagePrint} id="pagePrint">
            <div className={style.containerMainCta}>
                <section className={style.containerChild}>
                    <div className={`${style.child1} ${style.child}`}>
                        <div>
                            <div className={style.gridTwoColumns}>
                                <div className={`${style.gridTwoColumnInfo} ${style.gridTwoColumnsChild}`}>
                                    <h1 className={`${style.gridTwoColumnInfoTitle} ${style.titleMainPrint}`}>
                                        <span>Desenvolvemos sua </span>
                                        <span className={style.primaryDestaqueText}>Loja Print On Demand </span>
                                    </h1>
                                    <div className={style.vantagens}>
                                        <p><span className={style.iconAdd}><RiAddFill /></span> Criação da Marca e do Logo</p>
                                        <p><span className={style.iconAdd}><RiAddFill /></span> Criação e Cadastro de Produtos</p>
                                        <p><span className={style.iconAdd}><RiAddFill /></span> 03 Anúncios + Assessor de Marketing</p>
                                        <p><span className={style.iconAdd}><RiAddFill /></span> Mentoria + Consultoria</p>
                                        <p><span className={style.iconAdd}><RiAddFill /></span> Curso com Centenas de Aulas</p>
                                        <p><span className={style.iconAdd}><RiAddFill /></span> Suporte Dedicado 24h</p>
                                        <p><span className={style.iconAdd}><RiAddFill /></span> Garantia Vitalícia</p>
                                    </div>
                                    <p className={`${style.gridTwoColumnInfoCta} ${style.destaqueText}`}>
                                        <span className={style.iconFire}><RiFireFill /> </span>
                                        Mais de 9.000 clientes em 12 países
                                    </p>
                                    <div className={`${style.gridTwoColumnInfoBtn} ${style.ctaBtn}`}>
                                        <a href="#packageSection">
                                            <span>
                                                <p>Preços e Soluções</p>
                                            </span>
                                        </a>
                                        <p>
                                            <span><RiArrowDropRightFill />Aproveite nossa promoção de 50% OFF</span>
                                        </p>
                                    </div>
                                </div>

                                <div className={`${style.gridTwoColumnImage} ${style.gridTwoColumnsChild}`}>
                                    <img src={ImageMainCta} alt=""/>
                                </div>
                            </div>
                        </div>

                        <span className={style.sectionSeparatorGreen}>
                            <img src={SeparatorGradient} alt=""/>
                        </span>

                    </div>
                </section>
            </div>
            
            <section className={style.simpleContainer}>
                <div className={style.containerTwoColumnsDefault}>
                    <div className={style.containerChildTwoColumnsDefault}>
                        <div className={style.simpleContent}>
                            <h2 className={style.simpleTitle}>
                                Especialistas em Print On Demand
                            </h2>
                            <h4>Somos a Primeira Agência de Dropshipping Nacional e Internacional do Brasil focada no desenvolvimento de lojas e na prestação de serviços para Print On Demand.</h4>
                        </div>
                    </div>

                    <div className={style.containerChildTwoColumnsDefault}>
                        <img src={ImagePrimeiraAgencia} className={`${style.imageTwoColumnsDefault} ${style.simpleImage}`} alt="" />
                    </div>
                </div>
            </section>

            <VantagensLoja image={ImageVantagens} vantagemData={vantagemData} />

            <GoogleReviews />

            <section className={style.containerChild}>
                <div className={`${style.child5} ${style.child}`}>
                    <div>
                        <div>
                            <h2>
                                <span className={style.destaqueText}>Ao contratar agora, </span>
                                você terá:
                            </h2>
                        </div>

                        <div className={style.gridCardsInfos}>
                            <div className={style.gridCardInfoChild}>
                                <p>
                                    <span className={`${style.destaqueText} ${style.iconStyle}`}><RiKey2Fill /></span>
                                </p>
                                <p>
                                    <span className={style.destaqueText}><h6>Loja Print On Demand Profissional: </h6></span>
                                    vamos criar e entregar uma Loja personalizada para você vender Print On Demand no Brasil.
                                </p>
                            </div>
                            <div className={style.gridCardInfoChild}>
                                <p>
                                    <span className={`${style.destaqueText} ${style.iconStyle}`}><RiToolsFill /></span>
                                </p>
                                <p>
                                    <span className={style.destaqueText}><h6>Equipe de Marketing Dedicada: </h6></span>
                                    temos pacotes com gestor de tráfego dedicado para atender sua conta e garantir que você venda nos primeiros dias.
                                </p>
                            </div>
                            <div className={style.gridCardInfoChild}>
                                <p>
                                    <span className={`${style.destaqueText} ${style.iconStyle}`}><RiMedal2Fill /></span>
                                </p>
                                <p>
                                    <span className={style.destaqueText}><h6>Produtos e Fornecedores Validados: </h6></span>
                                    fazemos a seleção dos produtos e cadastramos com descrições de alta conversão na sua Loja Virtual.
                                </p>
                            </div>
                            <div className={style.gridCardInfoChild}>
                                <p>
                                    <span className={`${style.destaqueText} ${style.iconStyle}`}><RiLightbulbFill /></span>
                                </p>
                                <p>
                                    <span className={style.destaqueText}><h6>Suporte Exclusivo 24h: </h6></span>
                                    fornecemos acompanhamento e suporte dedicado direto pela nossa plataforma exclusiva de atendimento ao cliente.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3>Você está a um clique de ter uma loja completa desenvolvida pela primeira agência especializada em Print On Demand do Brasil. Contrate agora e conquiste a sua liberdade financeira.</h3>
                        </div>

                        <div className={`${style.gridTwoColumnInfoBtn} ${style.ctaBtn}`}>
                            <a href="#packageSection">
                                Preços e Soluções
                            </a>
                            <p>
                                <span className={style.ctaBtnDesc}><RiArrowDropRightFill /> Aproveite nossa promoção de 50% OFF</span>
                            </p>
                        </div>
                                        
                        <span className={style.sectionSeparator}>
                            <img src={Separator} alt=""/>
                        </span>
                    </div>
                </div>
            </section>

            <section className={style.containerChild}>
                <div className={`${style.child6} ${style.child}`}>
                    <div>
                        <div className={style.titleSub}>
                            <h2>    
                                E você também terá
                                <span className={style.destaqueText}> Mentoria com um time de Especialistas</span>
                            </h2>
                            <p>Além de executarmos tudo para você, também te ensinamos a vender todos os dias na internet.</p>
                        </div>

                        <div className={style.gridCardsInfos}>
                            <div className={`${style.gridCardInfoChild} ${style.borderLeft}`}>
                                <p>
                                    <span className={`${style.destaqueText} ${style.iconStyle}`}><RiWindow2Fill /></span>
                                </p>
                                <p>
                                    <span className={style.destaqueText}><h6>Gerencie os pedidos da sua Loja</h6></span>
                                    Ensinamos o passo-a-passo para que você possa de maneira simplificada fazer a gestão dos seus pedidos e das suas vendas.
                                </p>
                            </div>
                            <div className={`${style.gridCardInfoChild} ${style.borderRight}`}>
                                <p>
                                    <span className={`${style.destaqueText} ${style.iconStyle}`}><RiVidiconFill /></span>
                                </p>
                                <p>
                                    <span className={style.destaqueText}><h6>Seu E-commerce do seu jeito</h6></span>
                                    Personalize e altere cores, banners, imagens e os textos da sua loja com tutoriais desenvolvidos por uma equipe de design qualificada.
                                </p>
                            </div>
                            <div className={`${style.gridCardInfoChild} ${style.borderLeft}`}>
                                <p>
                                    <span className={`${style.destaqueText} ${style.iconStyle}`}><RiShoppingBasketFill /></span>
                                </p>
                                <p>
                                    <span className={style.destaqueText}><h6>Marketing para Facebook e Instagram</h6></span>
                                    Você vai aprender, do zero, tudo que precisa para atrair os melhores clientes para o seu e-commerce através dos anúncios patrocinados.
                                </p>
                            </div>
                            <div className={`${style.gridCardInfoChild} ${style.borderRight}`}>
                                <p>
                                    <span className={`${style.destaqueText} ${style.iconStyle}`}><RiLayout3Fill /></span>
                                </p>
                                <p>
                                    <span className={style.destaqueText}><h6>Mineração de Produtos e Fornecedores</h6></span>
                                    Aprenda como selecionar produtos de alta conversão e escolher os fornecedores certos para sua Loja de Print On Demand.
                                </p>
                            </div>
                            <div className={`${style.gridCardInfoChild} ${style.borderLeft}`}>
                                <p>
                                    <span className={`${style.destaqueText} ${style.iconStyle}`}><RiFlashlightFill /></span>
                                </p>
                                <p>
                                    <span className={style.destaqueText}><h6>Como utilizar IA para vender mais</h6></span>
                                    Criamos e disponibilizamos uma metodologia desenvolvida para otimizar toda sua operação utilizando Inteligência Artificial.
                                </p>
                            </div>
                            <div className={`${style.gridCardInfoChild} ${style.borderRight}`}>
                                <p>
                                    <span className={`${style.destaqueText} ${style.iconStyle}`}><RiReplyAllFill /></span>
                                </p>
                                <p>
                                    <span className={style.destaqueText}><h6>Como prestar o melhor atendimento</h6></span>
                                    Através de uma equipe premiada você irá aprender a fornecer o melhor atendimento e suporte ao seu cliente no seu e-commerce.
                                </p>
                            </div>
                        </div>

                        <div className={`${style.gridTwoColumnInfoBtn} ${style.ctaBtn}`}>
                            <a href="#packageSection">
                                Preços e Soluções
                            </a>
                            <p>
                                <span className={style.ctaBtnDesc}><RiArrowDropRightFill /> Aproveite nossa promoção de 50% OFF</span>
                            </p>
                        </div>
                                
                        <span className={style.sectionSeparator}>
                            <img src={Separator} alt=""/>
                        </span>
                    </div>
                </div>
            </section>

            <section className={style.containerChild}>
                <div className={`${style.child7} ${style.child}`}>
                    <div>
                        <div className={style.titleSub}>
                            <h2>Acompanhe todas as etapas do desenvolvimento com reuniões de alinhamento</h2>
                            <p>Pensamos em absolutamente tudo e compreendemos a importância de você acompanhar de perto todas as execuções.</p>
                        </div>

                        <div className={style.gridCardsInfos}>
                            <div className={style.gridCardInfoChild}>
                                <div>
                                    <img src={ImageCall1} alt=""/>
                                </div>
                                <div>
                                    <h3>Reunião Start</h3>
                                    <p>Após a contratação do pacote fazemos uma reunião com você para definir as personalizações da sua loja e também para te orientar sobre tudo.</p>
                                </div>
                            </div>
                            <div className={style.gridCardInfoChild}>
                                <div>
                                    <img src={ImageCall2} alt=""/>
                                </div>
                                <div>
                                    <h3>Reunião de Aprovação</h3>
                                    <p>Criamos sua loja com exclusividade seguindo suas ideias e referências, e após o desenvolvimento você aprova tudo para que fique do seu jeito.</p>
                                </div>
                            </div>
                            <div className={style.gridCardInfoChild}>
                                <div>
                                    <img src={ImageCall3} alt=""/>
                                </div>
                                <div>
                                    <h3>Reunião de Marketing</h3>
                                    <p>Com toda criação concluída nossa equipe de marketing alinha em uma reunião dedicada com você as estratégias dos anúncios patrocinados.</p>
                                </div>
                            </div>
                        </div>

                        <div className={style.child7Info3}>
                            <h2>E depois do desenvolvimento?</h2>

                            <p>
                                Nosso time de 
                                <span> mentores especializados </span>
                                estão sempre de plantão para tirar suas dúvidas e auxiliar no gerenciamento da sua loja para você vender todos os dias na internet.
                            </p>
                        </div>
                                
                        <div className={`${style.gridTwoColumnInfoBtn} ${style.ctaBtn}`}>
                            <a href="#packageSection">
                                Preços e Soluções
                            </a>
                            <p>
                                <span className={style.ctaBtnDesc}><RiArrowDropRightFill /> Aproveite nossa promoção de 50% OFF</span>
                            </p>
                        </div>
        
                        <span className={style.sectionSeparator}>
                            <img src={Separator} alt=""/>
                        </span>
                    </div>
                </div>
            </section>
            
            {/* <section className={style.containerChild}>
                <div className={`${style.child4} ${style.child}`}>
                    <div>
                        <div>
                            <h2>Ahhh, mas eu já tentei ter uma Loja de Dropshipping e não consegui…</h2>
                        </div>

                        <div className={style.gridTwoColumns}>
                            <div className={`${style.gridTwoColumnImage} ${style.gridTwoColumnsChild}`}>
                                <img src={ImageMainCta2} alt=""/>
                            </div>

                            <div className={`${style.gridTwoColumnInfo} ${style.gridTwoColumnsChild}`}>
                                <p>Conhecemos a fundo o sentimento de querer criar uma Loja de Dropshipping por conta própria ou a frustração de não vender e não saber o porquê.</p>
                                <p>
                                    <span className={style.destaqueText}><h6>Por isso Garantimos: </h6></span>
                                    essa não é só mais uma solução de Dropshipping. 
                                    <span className={style.underlineText}> Os nossos pacotes foram desenvolvidos com base nas experiências e entrega de mais de 9.000 Lojas Virtuais em 12 países.</span>
                                </p>
                                <div className={`${style.gridTwoColumnInfoBtn} ${style.ctaBtn}`}>
                                    <a href="#packagesDrop">
                                        Preços e Soluções
                                    </a>
                                    <p>
                                        <span className={style.ctaBtnDesc}><RiArrowDropRightFill /> Aproveite nossa promoção de 50% OFF</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <span className={style.sectionSeparator}>
                            <img src={Separator} alt=""/>
                        </span>
                    </div>

                </div>
            </section> */}

            <PackagesSection packageData1={packageData1} segundoPacote={true} packageData2={packageData2} terceiroPacote={true} packageData3={packageData3} sectionPackageTitle="Print On Demand" />
            <DropdownTableLoja />

            <section className={`${style.containerChild} ${style.sectionBg}`}>
                <div className={`${style.child8} ${style.child}`}>
                    <div>
                        <div className={style.child8Title}>
                            <h2>Todos os Bônus que você recebe ao adquirir nosso pacote:</h2>
                        </div>

                        <div className={style.gridCardsInfos}>
                            <div className={style.gridCardInfoChild}>
                                <img src={ImageParceiroPrintful} alt="" />
                            </div>

                            <div className={style.gridCardInfoChild}>
                                <h2>Integração da Printful para venda de produtos personalizados sob demanda sem estoque</h2>

                                <p>A Printful é a maior empresa de Print on Demand do mundo. Ela disponibiliza mais de 340 produtos para serem personalizados com a sua marca.</p>
                            </div>
                        </div>

                        <div className={style.gridCardsMiniInfos}>
                            <div className={style.gridCardMiniInfoChild}>
                                <div>
                                    <div>
                                        <span className={style.checkIconDrop}><RiCheckDoubleFill /></span>
                                    </div>
                                    <div>
                                        <p>Tema Extra de Alta Conversão</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.gridCardMiniInfoChild}>
                                <div>
                                    <div>
                                        <span className={style.checkIconDrop}><RiCheckDoubleFill /></span>
                                    </div>
                                    <div>
                                        <p>Curso de Técnicas e Estratégias de Vendas</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.gridCardMiniInfoChild}>
                                <div>
                                    <div>
                                        <span className={style.checkIconDrop}><RiCheckDoubleFill /></span>
                                    </div>
                                    <div>
                                        <p>Acesso a Fornecedores Nacionais Exclusivos</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.gridCardMiniInfoChild}>
                                <div>
                                    <div>
                                        <span className={style.checkIconDrop}><RiCheckDoubleFill /></span>
                                    </div>
                                    <div>
                                        <p>Consultoria de Contabilidade</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.gridCardMiniInfoChild}>
                                <div>
                                    <div>
                                        <span className={style.checkIconDrop}><RiCheckDoubleFill /></span>
                                    </div>
                                    <div>
                                        <p>Condições Especiais em Apps e Plataformas</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.gridCardMiniInfoChild}>
                                <div>
                                    <div>
                                        <span className={style.checkIconDrop}><RiCheckDoubleFill /></span>
                                    </div>
                                    <div>
                                        <p>Receba um Funil de Vendas Validado</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={style.title}>
                            <h2>
                                <span>Bônus EXCLUSIVOS </span>
                                para Venda Global
                            </h2>
                        </div>

                        <div className={`${style.gridCardsMiniInfos} ${style.miniInfoTwoColumns}`}>
                            <div className={style.gridCardMiniInfoChild}>
                                <div>
                                    <div>
                                        <span className={style.checkIconDrop}><RiCheckDoubleFill /></span>
                                    </div>
                                    <div>
                                        <p>Metodologia para Mineração Global</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.gridCardMiniInfoChild}>
                                <div>
                                    <div>
                                        <span className={style.checkIconDrop}><RiCheckDoubleFill /></span>
                                    </div>
                                    <div>
                                        <p>Estudo Analítico dos Principais Países</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`${style.gridTwoColumnInfoBtn} ${style.ctaBtn}`}>
                            <a href="#packageSection">
                                Preços e Soluções
                            </a>
                            <p>
                                <span className={style.ctaBtnDesc}><RiArrowDropRightFill /> Aproveite nossa promoção de 50% OFF</span>
                            </p>
                        </div>
        
                        <span className={style.sectionSeparator}>
                            <img src={SeparatorGradient} alt=""/>
                        </span>
                    </div>
                </div>
            </section>

            <section className={style.containerChild}>
                <div className={`${style.child10} ${style.child}`}>
                    <div>
                        {/* <div>
                            <h2>
                                Confira depoimentos de quem já comprou e já está
                                <span className={style.destaqueText}> vendendo na Internet todos os dias</span>
                            </h2>
                        </div> */}

                        <div className={style.reviewsGoogle}>
                            <GoogleReviews />
                        </div>

                        <div className={style.gridTwoColumns}>
                            <div className={style.gridTwoColumnsChild}>
                                <div>
                                    <img src={ImageGarantia} alt="" />
                                </div>
                            </div>

                            <div className={style.gridTwoColumnsChild}>
                                <div>
                                    <h3>Garantia Vitalícia</h3>
                                    <p>Você recebe nossa Garantia Técnica para sempre, assegurando que a solução adquirida funcionará conforme especificações técnicas prometidas. Esta garantia é válida para clientes que possuírem nosso suporte mensal.</p>
                                </div>
                            </div>
                        </div>

                        <span className={style.sectionSeparator}>
                            <img src={Separator} alt=""/>
                        </span>
                    </div>

                </div>
            </section>

            <section className={`${style.containerChild} ${style.faqSection}`}>
                <div className={`${style.child11} ${style.child}`}>
                    <div>
                        <div className={style.title}>
                            <h2>Ainda com dúvida?</h2>
                            <p>Abaixo você encontra as perguntas mais comuns sobre os pacotes</p>
                        </div>

                        <div className={style.faq}>
                            <Faq data={data}/>
                        </div>

                        <div className={`${style.gridTwoColumnInfoBtn} ${style.ctaBtn}`}>
                            <a href="#packageSection">
                                Preços e Soluções
                            </a>
                            <p>
                                <span className={style.ctaBtnDesc}><RiArrowDropRightFill /> Aproveite nossa promoção de 50% OFF</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer linkCtaWhatsapp={whatsapp} mostrarSecao={false} />
            <Whatsapp whatsappMessage={whatsapp} />
        </div>
    )
}

export default PrintOnDemand;