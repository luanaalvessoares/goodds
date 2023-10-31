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
import SectionCrescimentoMkt from "../../../components/section-crescimento-mkt/SectionCrescimentoMkt";
import SectionAnuncioMkt from "../../../components/section-anuncio-mkt/SectionAnuncioMkt";


function MarketingLojaVirtual() {
    const whatsapp = "https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista%20em%20Marketing%20para%20Loja%20Virtual";
    const packageData1 = {
        packageTitle1: "Start",
        packageDescription1: "Para empresas que nunca fizeram campanhas e desejam iniciar a divulgação da sua loja.",
        packagePrice1: "2.399",
        packageNews1: "1.499",
        packageParcel1: "189,91",
        packageName1: "Start:",
        included1Package1: "R$ 1.500 de budget",
        included2Package1: "1 Campanha Facebook",
        included3Package1: "1 Campanha Instagram",
        packageLink1: "https://dropshipping-goodds.catalog.yampi.io/assessoria-de-marketing-para-e-commerce-start/p"
    };
    const packageData2 = {
        packageTitle2: "Super",
        packageDescription2: "Um pacote com campanhas ilimitadas para quem busca investir no maior número de campanhas e escalar o marketing da loja.",
        packagePrice2: "5.999",
        packageNews2: "3.999",
        packageParcel2: "506,61",
        packageName2: "Super:",
        included1Package2: "Até R$ 8.000 de budget",
        included2Package2: "Campanhas Google ilimitadas",
        included3Package2: "Campanhas Instagram ilimitadas",
        packageLink2: "https://dropshipping-goodds.catalog.yampi.io/assessoria-de-marketing-para-e-commerce-super/p"
    };
    return (
        <div>
            <TopTitleImageSection title="Venda todos os dias." subtitle="Alcance novos clientes diariamente. Planejamos estratégias e executamos campanhas de marketing para sua loja virtual." backgroundUrl={BackgroundTop} imageChildren1={BackgroundTopChildren1} imageChildren2={BackgroundTopChildren2} imageChildren3={BackgroundTopChildren3} />
            <PackagesSection packageData1={packageData1}  packageData2={packageData2} sectionPackageTitle="Pacotes e Preços" />
            <DropdownTableMkt />
            <GoogleReviews />
            <SectionVendasMkt />
            <SectionCrescimentoMkt />
            <CardsInfoTitle title="Mostre ao mundo sua marca e ofereça a melhor experiência de compra" />
            <SectionAnuncioMkt />
            <Footer linkCtaWhatsapp={whatsapp} />
            <Whatsapp whatsappMessage={whatsapp} />
        </div>
    )
}

export default MarketingLojaVirtual;