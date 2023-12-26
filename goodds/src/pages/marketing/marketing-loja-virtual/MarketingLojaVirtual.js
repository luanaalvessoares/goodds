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
        packageDescription1: "Para empresas que nunca fizeram campanhas e desejam iniciar a divulgação da sua loja no Facebook e Instagram.",
        packagePrice1: "1.999",
        packageNews1: "999",
        packageParcel1: "101,24",
        packageName1: " no Super",
        included1Package1: "Equipe de marketing especializada",
        included2Package1: "01 Campanha no Facebook",
        included3Package1: "01 Campanha no Instagram",
        included11Package1: "Campanhas no Google",
        included12Package1: "Campanhas no TikTok",
        packageLink1: "https://dropshipping-goodds.catalog.yampi.io/assessoria-de-marketing-para-e-commerce-start/p"
    };
    const packageData2 = {
        packageTitle2: "Mega",
        packageDescription2: "Um pacote com mais anúncios no Facebook e Instagram, além de estratégias e campanhas para o Google com um gerente decidado.",
        packagePrice2: "3.999",
        packageNews2: "1.999",
        packageParcel2: "202,58",
        packageName2: " no Mega",
        included1Package2: "Gerente de conta dedicado",
        included2Package2: "02 Campanhas no Instagram",
        included3Package2: "02 Campanhas no Facebook",
        included4Package2: "01 Campanha no Google",
        included11Package2: "Campanhas no TikTok",
        packageLink2: "https://dropshipping-goodds.catalog.yampi.io/assessoria-de-marketing-para-e-commerce-super/p"
    };
    const packageData3 = {
        packageTitle3: "Especial",
        packageDescription3: "Um pacote para quem busca investir em vários canais com uma quantidade maior de anúncios, para escalar o marketing do seu negócio.",
        packagePrice3: "7.999",
        packageNews3: "3.999",
        packageParcel3: "506,61",
        packageName3: " no Especial",
        included1Package3: "Gerente de conta dedicado",
        included2Package3: "03 Campanhas no Instagram",
        included3Package3: "03 Campanhas no Facebook",
        included4Package3: "02 Campanhas no Google",
        included5Package3: "01 Campanha no TikTok",
        packageLink3: "https://dropshipping-goodds.catalog.yampi.io/assessoria-de-marketing-para-e-commerce-super/p"
    };

    return (
        <div>
            <TopTitleImageSection title="Venda todos os dias." subtitle="Planejamos estratégias e executamos campanhas de marketing para sua loja virtual" backgroundUrl={BackgroundTop} imageChildren1={BackgroundTopChildren1} imageChildren2={BackgroundTopChildren2} imageChildren3={BackgroundTopChildren3} />
            <SimpleTwoColumns title="Marketing para " destaqueTitle="E-commerce" description="Exiba seus anúncios para os clientes quando eles procurarem seus produtos na pesquisa do Google. Disponibilizamos um gestor de tráfego dedicado para gerenciar suas campanhas." image={CrescimentoImage} />
            <SectionAnuncioMkt />
            <CardsInfoTitle title="Mostre ao mundo sua loja e seus produtos" />
            <SectionVendasMkt />
            <GoogleReviews />
            <PackagesSection packageData1={packageData1} packageData2={packageData2} terceiroPacote={true} packageData3={packageData3} sectionPackageTitle="Pacotes e Preços Mensais" />
            <DropdownTableMkt />
            <Footer linkCtaWhatsapp={whatsapp}  mostrarSecao={true}/>
            <Whatsapp whatsappMessage={whatsapp} />
        </div>
    )
}

export default MarketingLojaVirtual;