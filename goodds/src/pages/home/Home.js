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
        cardTitle1: "Desenvolvemos o layout do seu jeito",
        cardDescription1: "Personalizado e exclusivo para o seu nicho.",
        icon2: `${IconCards2}`,
        cardTitle2: "Todas as plataformas",
        cardDescription2: "Somos parceiros de TODAS as plataformas de lojas virtuais do Brasil.",
        icon3: `${IconCards3}`,
        cardTitle3: "Suporte Humanizado",
        cardDescription3: "Cada cliente possui uma equipe de especialistas dedicada de atendimento.",
        icon4: `${IconCards4}`,
        cardTitle4: "Estrutura Global",
        cardDescription4: "Possuímos 04 escritórios físicos no Brasil e 01 nos EUA. Tome um café com a gente :)",
    };

    return (
        <div id="home">
            <ImageBackground isVideo="true" title="Tenha um e-commerce profissional" title2=" e venda todos os dias" description="Mais de 9.000 clientes em 12 países"/>
            <ServicesCarousel />
            <GoogleReviews title="Confira depoimentos de quem já comprou e já está vendendo na Internet todos os dias"/>
            <FullHome title="Full Commerce" subtitle="Somos uma agência de e-commerce completa" description="Com mais de 10 anos de experiência, já desenvolvemos mais de 6.600 projetos personalizados de e-commerce. Nossa equipe é formada por mais de 100 colaboradores e especialistas em diversas áreas: Design, Programação, Marketing, Copyright, Gestão de Projetos, Estrategistas, Suporte ao Cliente e outros." />
            <SimpleTwoColumns title="Especilistas em Dropshipping" description="Venda nos principais Marketplaces do Brasil com a nossa solução de consultoria e implementação. Soluções que vão além da criação da sua loja. Decole suas vendas com nossa consultoria estratégica, campanhas de divulgação e anúncios patrocinados." image={ImageHomeMarketplaces} />
            <DropHome title="Dropshipping" subtitle="1ª Agência do Brasil" description="Somos a primeira agencia do Brasil especializada em Dropshipping. Fazemos o desenvolvimento da loja PERSONALIZADA e prestamos todos os serviços exclusivos para que você tenha uma operação profissional e venda todos os dias." />
            <CardsIcons cardsIconsData={cardsIconsData} />
            <div className="topTitleSectionHome">
                <TopTitleImageSection title="Venda todos os dias." subtitle="" backgroundUrl={BackgroundTop} imageChildren1={BackgroundTopChildren1} />
            </div>
            <ParceirosHomeCarousel />
            <MotivosCarousel />
            <Footer linkCtaWhatsapp={whatsapp} />
            <Whatsapp whatsappMessage={whatsapp} />
        </div>
    )
}

export default Home;