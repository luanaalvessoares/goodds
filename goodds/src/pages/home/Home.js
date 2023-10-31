import React from "react";
import './Home.css'
import ImageBackground from "../../components/image-background/ImageBackground";
import Footer from '../../components/footer/Footer';
import Whatsapp from "../../components/whatsapp/Whatsapp";
import ServicesCarousel from "../../components/services-carousel/ServicesCarousel";
import GoogleReviews from '../../components/google-reviews/GoogleReviews';
import ParceirosAnimation from "../../components/parceiros-home/ParceirosAnimation";
import FullHome from "../../components/section-full-home/section-full-home/FullHome";
import ImageHomeMarketplaces from '../../assets/images/homemarketplaces.webp';
import SimpleTwoColumns from "../../components/section-simple-twocolumns/SimpleTwoColumns";
import DropHome from "../../components/section-drop-home/DropHome";
import CardsIcons from "../../components/cards-icons/CardsIcons";
import IconCards1 from '../../assets/images/iconcards1.webp';
import IconCards2 from '../../assets/images/iconcards2.webp';
import IconCards3 from '../../assets/images/iconcards3.webp';
import IconCards4 from '../../assets/images/iconcards4.webp';
import TopTitleImageSection from "../../components/top-title-image/TopTitleImageSection";
import BackgroundTop from '../../assets/images/homepainelshopify.webp';
import BackgroundTopChildren1 from '../../assets/images/homegrafico.webp';
import ParceirosHomeCarousel from "../../components/parceiros-home-carousel/ParceirosHomeCarousel";
import MotivosCarousel from "../../components/motivos-home-carousel/MotivosCarousel";

function Home() {
    const whatsapp = "https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista%20em%20E-commerce";
    
    const cardsIconsData = {
        title: "",
        icon1: `${IconCards1}`,
        cardTitle1: "A velocidade da tecnologia a seu favor",
        cardDescription1: "Todos os websites da GOODDS são otimizados para o Google Core Web Vitals.",
        icon2: `${IconCards2}`,
        cardTitle2: "Acelere o crescimento do seu projeto de Drop",
        cardDescription2: "Com os nossos projetos, sua empresa ganha poder e força para escalar sua audiênca.",
        icon3: `${IconCards3}`,
        cardTitle3: "Sua operação de venda segura",
        cardDescription3: "Nossos sites são hospedados na Hostinger Cloud Server, uma solução confiável e protegida.",
        icon4: `${IconCards4}`,
        cardTitle4: "Design com a cara da sua marca",
        cardDescription4: "Os recursos de design que oferecemos são capazes de imprimir sua identidade em um clique.",
    };

    return (
        <div id="home">
            <ImageBackground isVideo="true" title="Criamos seu E-commerce" description="Somos a Primeira Agência Especializada em Dropshipping do Brasil"/>
            <ServicesCarousel />
            <GoogleReviews />
            <ParceirosAnimation />
            <ParceirosHomeCarousel />
            <FullHome title="Full Commerce" subtitle="Desenvolvimento + Gestão + Design + Marketing" description="Com mais de 10 anos de experiência, já desenvolvemos mais de 6.600 projetos personalizados de e-commerce. Nossa equipe é formada por mais de 100 colaboradores e especialistas em diversas áreas: Design, Programação, Marketing, Copyright, Gestão de Projetos, Estrategistas, Suporte ao Cliente e outros." />
            <SimpleTwoColumns title="Especialistas em Marketplaces" description="Venda nos principais Marketplaces do Brasil com a nossa solução de consultoria e implementação. Soluções que vão além da criação da sua loja. Decole suas vendas com nossa consultoria estratégica, campanhas de divulgação e anúncios patrocinados." image={ImageHomeMarketplaces} />
            <DropHome title="Dropshipping" subtitle="1ª Agência do Brasil" description="Somos a Primeira Agência especializada em serviços e soluções voltados para Dropshipping. Desenvolvimento de E-commerce, Marketing, Mineração de Produtos e Consultoria especializada em Dropshipping." />
            <CardsIcons cardsIconsData={cardsIconsData} />
            <div className="topTitleSectionHome">
                <TopTitleImageSection title="Venda todos os dias." subtitle="" backgroundUrl={BackgroundTop} imageChildren1={BackgroundTopChildren1} />
            </div>
            <MotivosCarousel />
            <Footer linkCtaWhatsapp={whatsapp} />
            <Whatsapp whatsappMessage={whatsapp} />
        </div>
    )
}

export default Home;