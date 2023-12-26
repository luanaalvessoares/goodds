import React from "react";
import './Home.css'
import ImageBackground from "../../components/image-background/ImageBackground";
import Footer from '../../components/footer/Footer';
import Whatsapp from "../../components/whatsapp/Whatsapp";
import ServicesCarousel from "../../components/services-carousel/ServicesCarousel";
import GoogleReviews from '../../components/google-reviews/GoogleReviews';
import FullHome from "../../components/section-full-home/FullHome";
import ImageHomePlataformas from '../../assets/images/homeplataformas.webp';
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
import ImagePrimeiraAgencia from '../../assets/images/home-primeira-agencia.webp';

function Home() {
    const whatsapp = "https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista%20em%20E-commerce";

    const cardsIconsData = {
        title: "",
        icon1: `${IconCards1}`,
        cardTitle1: "Layout Exclusivo",
        cardDescription1: "Personalizado e desenvolvido para o seu nicho.",
        icon2: `${IconCards2}`,
        cardTitle2: "Todas as plataformas",
        cardDescription2: "Somos parceiros de TODAS as plataformas de lojas virtuais.",
        icon3: `${IconCards3}`,
        cardTitle3: "Suporte Humanizado",
        cardDescription3: "Cada cliente possui uma equipe dedicada de atendimento.",
        icon4: `${IconCards4}`,
        cardTitle4: "Estrutura Global",
        cardDescription4: "Possuímos 04 escritórios físicos no Brasil e 01 nos EUA.",
    };

    return (
        <div id="home">
            <ImageBackground isVideo="true" cta={true} videoOption={1} title="Tenha um e-commerce profissional" title2=" e venda todos os dias" description="Mais de 9.000 clientes em 12 países"/>
            <ServicesCarousel />
            <GoogleReviews />
            <FullHome title="Full Commerce" subtitle="Somos uma agência de e-commerce completa" description="Com mais de 10 anos de experiência, já desenvolvemos mais de 6.600 projetos personalizados de e-commerce. Nossa equipe é formada por mais de 100 colaboradores e especialistas em diversas áreas: Design, Programação, Marketing, Copyright, Gestão de Projetos, Estrategistas, Suporte ao Cliente e outros." />
            <SimpleTwoColumns title="Especialistas em Dropshipping" descriptionOne="Somos a" descriptionDestaque=" Primeira Agência de Dropshipping do Brasil." description=" Desenvolvemos a loja personalizada e prestamos todos os serviços exclusivos para que sua loja venda todos os dias." image={ImageHomePlataformas} />
            <DropHome title="Nacional e Internacional" subtitle="1ª Agência do Brasil especializada em " descriptionDestaque="Dropshipping Nacional, Latam e Global." image={ImagePrimeiraAgencia} />
            <CardsIcons cardsIconsData={cardsIconsData} />
            <div className="topTitleSectionHome">
                <TopTitleImageSection title="Venda todos os dias." subtitle="" backgroundUrl={BackgroundTop} imageChildren1={BackgroundTopChildren1} />
            </div>
            <ParceirosHomeCarousel />
            <MotivosCarousel />
            <Footer linkCtaWhatsapp={whatsapp} mostrarSecao={true} />
            <Whatsapp whatsappMessage={whatsapp} />
        </div>
    )
}

export default Home;