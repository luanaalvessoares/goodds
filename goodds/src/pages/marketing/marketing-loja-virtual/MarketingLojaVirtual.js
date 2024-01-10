import React from "react";
import './MarketingLojaVirtual.css';
import Whatsapp from "../../../components/whatsapp/Whatsapp";
import Footer from "../../../components/footer/Footer";
import TopTitleImageSection from "../../../components/top-title-image/TopTitleImageSection";
import BackgroundTop from '../../../assets/images/topmkt.webp';
import BackgroundTopChildren1 from '../../../assets/images/topchildrenmkt1.webp';
import BackgroundTopChildren2 from '../../../assets/images/topchildrenmkt2.webp';
import BackgroundTopChildren3 from '../../../assets/images/topchildrenmkt3.webp';
import GoogleReviews from '../../../components/google-reviews/GoogleReviews';
import PackagesSection from '../../../components/packages-section/PackagesSection';
import DropdownTableMkt from "../../../components/dropdown-table/DropdownTableMkt";
import SectionVendasMkt from "../../../components/section-vendas-mkt/SectionVendasMkt";
import CardsInfoTitle from "../../../components/cards-infos-titulo/CardsInfoTitle";
import CrescimentoImage from '../../../assets/images/crescimentomkt.webp'
import SimpleTwoColumns from "../../../components/section-simple-twocolumns/SimpleTwoColumns";
import SectionAnuncioMkt from "../../../components/section-anuncio-mkt/SectionAnuncioMkt";


function MarketingLojaVirtual() {
    const whatsapp = "https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista%20em%20Marketing%20para%20Loja%20Virtual";
    const packageData1 = {
        packageTitle1: "Super",
        packageDescription1: "O pacote Super é dedicado para empresas que nunca fizeram campanhas e desejam iniciar a divulgação da sua loja no Facebook e Instagram. O pacote inclui 01 Banner Promocional na Loja + 02 Criativos para Campanhas por mês.",
        packagePrice1: "1.999",
        packageNews1: "999",
        packageParcel1: "101,24",
        packageName1: " no Super",
        included1Package1: "Equipe de marketing especializada",
        included3Package1: "01 Campanha no Facebook",
        included2Package1: "01 Campanha no Instagram",
        included4Package1: "01 Banner Promocional na Loja",
        included5Package1: "02 Criativos para Campanhas por mêsm",
        included13Package1: "Campanhas no Google",
        included14Package1: "02 Criativos em Vídeo por mês",
        included15Package1: "Campanhas no TikTok",
        packageLink1: "https://dropshipping-goodds.catalog.yampi.io/assessoria-de-marketing-para-e-commerce-pacotesuper/p",
        btnName1: "Comprar"
    };
    const packageData2 = {
        packageTitle2: "Mega",
        packageDescription2: "Um pacote com mais anúncios no Facebook e Instagram, além de estratégias e campanhas para o Google com um gerente decidado. O pacote inclui 02 Banners Promocionais na Loja + 04 Criativos para Campanhas por mês.",
        packagePrice2: "3.999",
        packageNews2: "1.999",
        packageParcel2: "202,58",
        packageName2: " no Mega",
        included1Package2: "Gerente de conta dedicado",
        included2Package2: "02 Campanhas no Instagram",
        included3Package2: "02 Campanhas no Facebook",
        included4Package2: "02 Banners Promocionais na Loja",
        included5Package2: "04 Criativos para Campanhas por mês",
        included6Package2: "01 Campanha no Google",
        included13Package2: "02 Criativos em Vídeo por mês",
        included14Package2: "Campanhas no TikTok",
        packageLink2: "https://dropshipping-goodds.catalog.yampi.io/pacote-marketing-para-e-commerce-mega/p",
        btnName2: "Comprar"
    };
    const packageData3 = {
        packageTitle3: "Especial",
        packageDescription3: "Um pacote para quem busca investir em vários canais para escalar o marketing do seu negócio. O pacote inclui 03 Banners Promocionais na Loja + 06 Criativos para Campanhas por mês + 02 Criativos em Vídeo por mês.",
        packagePrice3: "7.999",
        packageNews3: "3.999",
        packageParcel3: "405,27",
        packageName3: " no Especial",
        included1Package3: "Gerente de conta dedicado",
        included2Package3: "03 Campanhas no Instagram",
        included3Package3: "03 Campanhas no Facebook",
        included4Package3: "03 Banners Promocionais na Loja",
        included5Package3: "06 Criativos para Campanhas por mês",
        included6Package3: "02 Criativos em Vídeo por mês",
        included7Package3: "02 Campanhas no Google",
        included8Package3: "01 Campanha no TikTok",
        packageLink3: "https://dropshipping-goodds.catalog.yampi.io/pacote-marketing-para-e-commerce-especial/p",
        btnName3: "Comprar"
    };

    return (
        <div>
            <TopTitleImageSection title="Venda todos os dias." subtitle="Planejamos estratégias e executamos campanhas de marketing para sua loja virtual" backgroundUrl={BackgroundTop} imageChildren1={BackgroundTopChildren1} imageChildren2={BackgroundTopChildren2} imageChildren3={BackgroundTopChildren3} />
            <SimpleTwoColumns title="Marketing para " destaqueTitle="E-commerce" description="Exiba seus anúncios para os clientes quando eles procurarem seus produtos na pesquisa do Google. Disponibilizamos um gestor de tráfego dedicado para gerenciar suas campanhas." image={CrescimentoImage} />
            <SectionAnuncioMkt />
            <CardsInfoTitle title="Mostre ao mundo sua loja e seus produtos" />
            <SectionVendasMkt />
            <GoogleReviews />
            <PackagesSection packageData1={packageData1} segundoPacote={true} packageData2={packageData2} terceiroPacote={true} packageData3={packageData3} sectionPackageTitle="Pacotes e Preços Mensais" />
            <DropdownTableMkt />
            <Footer linkCtaWhatsapp={whatsapp}  mostrarSecao={true}/>
            <Whatsapp whatsappMessage={whatsapp} />
        </div>
    )
}

export default MarketingLojaVirtual;