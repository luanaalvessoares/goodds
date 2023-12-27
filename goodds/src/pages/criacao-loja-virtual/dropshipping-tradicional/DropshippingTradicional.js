import React from "react";
import './DropshippingTradicional.css'
import Footer from "../../../components/footer/Footer";
import VendaTodoDia from "../../../components/venda-todo-dia/VendaTodoDia";
import DropdownTableLoja from "../../../components/dropdown-table/DropdownTableLoja";
import GoogleReviews from "../../../components/google-reviews/GoogleReviews";
import VantagensLoja from "../../../components/vantagens-loja/VantagensLoja";
import ImageVantagens from '../../../assets/images/section-vantagesdrop.webp';
import SimpleTwoColumns from "../../../components/section-simple-twocolumns/SimpleTwoColumns";
import ImageHomeMarketplaces from '../../../assets/images/homemarketplaces.webp';
import DropHome from "../../../components/section-drop-home/DropHome";
import Whatsapp from "../../../components/whatsapp/Whatsapp";
import MainCta from '../../../components/main-cta/MainCta';
import ImageMainCta from '../../../assets/images/drop-global-menu.webp';
import ImageVendaTodoDia from '../../../assets/images/imagenew.png';
import IncludedGrid4 from "../../../components/included-grid-4/IncludedGrid4";
import IncludedGrid6 from "../../../components/included-grid-6/IncludedGrid6";
import GridCall from "../../../components/grid-call/GridCall";
import SectionBonus from "../../../components/section-bonus/SectionBonus";
import ImagePrimeiraAgencia from '../../../assets/images/home-primeira-agencia.webp';

import PackagesDrop from "../../../components/packages-drop/PackagesDrop";

function DropshippingTradicional() {
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
        vantagem5: "Curso com Mais de 300 Aulas",
        vantagem6: "Suporte Dedicado 24h",
        vantagem7: "Garantia Vitalícia",
        iconInfo:"Mais de 9.000 clientes em 12 países",
        btnTextDestaque2: "Preços e Soluções",
        btnDesc: "Aproveite nossa promoção de 50% OFF"
    }

    const grid1Data = {
        gridTitle1: "01 E-commerce Completo: ",
        gridSubtitle1: "",
        gridTitle2: "",
        gridSubtitle2: "",
        gridTitle3: "Logo Profissional: ",
        gridSubtitle3: "Nossa equipe de design cria a identidade visual da sua marca aplicando estratégias de posicionamento para que sua estrutura seja completa.",
        gridTitle4: "",
        gridSubtitle4: "",
    };

    const grid2Data = {
        gridTitle4: "Venda nos Marketplaces",
        gridSubtitle4: "Aprenda tudo sobre marketplace e a importância de vender nos grandes players do mercado. Seus produtos na Amazon, Mercado Livre, Shopee, Shein...",
        ctaText: "Você está a um clique de ter uma loja completa desenvolvida por uma agência que já criou mais de 9.000 lojas. Compre agora sua loja completa."
    };

    const bonusData ={
        printImage: "",
        printTitle: "",
        printSubtitle: "",
        bonus1: "",
        bonus2: "",
        bonus3: "",
        bonus4: "",
        bonus5: "",
        bonus6: "",
        bonus7: "",
        bonus8: "",
    };

    return (
        <div id="pageLoja">
            <MainCta setTop={false} mainCtaImage={ImageMainCta} data={contentHeaderSection} />
            {/* <ImageBackground isVideo={false} title="Loja de Dropshipping Profissional" description="Somos a Primeira Agência de Dropshipping Nacional e Internacional do Brasil" image={ImageBg}/> */}
            <SimpleTwoColumns title="Especialistas em Dropshipping" descriptionOne="Somos a" descriptionDestaque=" Primeira Agência de Dropshipping do Brasil." description=" Desenvolvemos a loja personalizada e prestamos todos os serviços exclusivos para que sua loja venda todos os dias." image={ImageHomeMarketplaces} />
            <DropHome title="Nacional e Internacional" subtitle="1ª Agência do Brasil especializada em " descriptionDestaque="Dropshipping Nacional, Latam e Global." image={ImagePrimeiraAgencia} />
            <VantagensLoja image={ImageVantagens} vantagemData="" />
            <GridCall />
            <PackagesDrop />
            <DropdownTableLoja />
            <GoogleReviews />
            <VendaTodoDia image={ImageVendaTodoDia} />
            <IncludedGrid4 gridData={grid1Data} />
            <IncludedGrid6 gridData={grid2Data} />
            <SectionBonus bonusData={bonusData} />
            <Footer linkCtaWhatsapp={whatsapp} mostrarSecao={false} />
            <Whatsapp whatsappMessage={whatsapp} />
        </div>
    )
}

export default DropshippingTradicional;