import React from "react";
import './MarketingLojaDropshipping.css';
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
import SectionAnuncioMkt from "../../../components/section-anuncio-mkt/SectionAnuncioMkt";
import CrescimentoImage from '../../../assets/images/crescimentomkt.webp'
import SimpleTwoColumns from "../../../components/section-simple-twocolumns/SimpleTwoColumns";


function MarketingLojaDropshipping() {
    const whatsapp = "https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista%20em%20Marketing%20para%20Dropshipping";
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
        packageLink1: "https://dropshipping-goodds.catalog.yampi.io/campanhas-de-marketing-start/p"
    };
    const packageData2 = {
        packageTitle2: "Super",
        packageDescription2: "A solução mais interessante, considerada a melhor e mais completa da Goodds inclui acessoria de marketing e anúncios.",
        packagePrice2: "5.999",
        packageNews2: "3.999",
        packageParcel2: "506,61",
        packageName2: "Super:",
        included1Package2: "Até R$ 8.000 de budget",
        included2Package2: "Campanhas Google ilimitadas",
        included3Package2: "Campanhas Instagram ilimitadas",
        packageLink2: "https://dropshipping-goodds.catalog.yampi.io/assessoria-de-marketing-para-dropshipping-super/p"
    };
    return (
        <div>
            <TopTitleImageSection title="Venda todos os dias." subtitle="Alcance novos clientes diariamente. Planejamos estratégias e executamos campanhas de marketing para sua loja virtual." backgroundUrl={BackgroundTop} imageChildren1={BackgroundTopChildren1} imageChildren2={BackgroundTopChildren2} imageChildren3={BackgroundTopChildren3} />
            <PackagesSection packageData1={packageData1}  packageData2={packageData2} sectionPackageTitle="Pacotes e Preços" />
            <DropdownTableMkt />
            <GoogleReviews />
            <SectionVendasMkt />
            <SimpleTwoColumns title="Faça suas vendas crescerem com Google Adwords" description="Exiba seus anúncios para os clientes quando eles procurarem empresas como a sua na Pesquisa Google e no Maps. Converta resultados como cliques para acessar seu site ou chamadas feitas para sua empresa." image={CrescimentoImage} />
            <CardsInfoTitle title="Mostre ao mundo sua marca e ofereça a melhor experiência de compra" />
            <SectionAnuncioMkt />
            <Footer linkCtaWhatsapp={whatsapp} />
            <Whatsapp whatsappMessage={whatsapp} />
        </div>
    )
}

export default MarketingLojaDropshipping;