import React from "react";
import './DropshippingTradicional.css'
import ImageBackground from "../../../components/image-background/ImageBackground";
import Footer from "../../../components/footer/Footer";
import ImageBg from '../../../assets/images/dropshipping-tradicional-bg.webp'
import VendaTodoDia from "../../../components/venda-todo-dia/VendaTodoDia";
import ImageVenda from '../../../assets/images/ecommerce-eua.webp'
import PackagesSection from "../../../components/packages-section/PackagesSection";
import DropdownTableLoja from "../../../components/dropdown-table/DropdownTableLoja";
import GoogleReviews from "../../../components/google-reviews/GoogleReviews";
import VantagensLoja from "../../../components/vantagens-loja/VantagensLoja";
import ImageVantagens from '../../../assets/images/section-vantagesdrop.webp';
import SimpleTwoColumns from "../../../components/section-simple-twocolumns/SimpleTwoColumns";
import ImageHomeMarketplaces from '../../../assets/images/homemarketplaces.webp';
import TwoSectionsScrollAnimate from "../../../components/two-sections-scroll-animate/TwoSectionsScrollAnimate";
import DropHome from "../../../components/section-drop-home/DropHome";
import Whatsapp from "../../../components/whatsapp/Whatsapp";
import MainCta from '../../../components/main-cta/MainCta';
import ImageMainCta from '../../../assets/images/imagenew.png';
import IncludedGrid4 from "../../../components/included-grid-4/IncludedGrid4";
import IncludedGrid6 from "../../../components/included-grid-6/IncludedGrid6";
import GridCall from "../../../components/grid-call/GridCall";
import SectionBonus from "../../../components/section-bonus/SectionBonus";

function DropshippingTradicional() {
    const whatsapp = "https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista%20em%20dropshipping";

    const contentHeaderSection = {
        titleText: "Criamos sua Loja",
        destaqueTitleText2: "de Dropshipping",
        destaqueTitleText1: "Personalizada com Fornecedores",
        description: "Tenha acesso ao Curso mais completo para vender seu produto ou serviço na internet. Aprenda como atrair mais clientes para o seu negócio, investindo pouco e ganhando muito.",
        vantagem1: "Criação da Marca e do Logo",
        vantagem2: "Mineração e Cadastro de 60 Produtos",
        vantagem3: "03 Anúncios + Assessor de Marketing",
        vantagem4: "Mentoria + Consultoria",
        vantagem5: "Curso com Mais de 300 Aulas",
        vantagem6: "Suporte Dedicado 24h",
        vantagem7: "Garantia de 01 ano",
        iconInfo:"Mais de 9.000 clientes em 12 países",
        btnTextDestaque2: "Preços e Soluções",
        btnDesc: "Aproveite nossa promoção de 50% OFF"
    }

    const packageData1 = {
        packageTitle1: "Super",
        packageDescription1: "Desenvolvimento da Loja Virtual e da Logo com mineração e cadastro exclusivo de 30 produtos já integrado com fornecedores.",
        packagePrice1: "3.999",
        packageNews1: "1.999",
        packageParcel1: "202,58",
        packageName1: "Super:",
        included1Package1: "Criação da Loja Virtual Completa",
        included2Package1: "Criação da Logomarca",
        included3Package1: "30 Produtos Exclusivos",
        included4Package1: "Mentoria + Consultoria",
        included5Package1: "Curso com Mais de 300 Aulas",
        included6Package1: "Suporte Especializado 24h",
        included7Package1: "Garantia de 01 ano",
        included8Package1: "Domínio Grátis (www.suamarca.com.br)",
        included9Package1: "3 Anúncios (Facebook e Instagram)",
        included10Package1: "30 Dias de Assessoria de Marketing",
        packageLink1: "https://dropshipping-goodds.catalog.yampi.io/desenvolvimento-de-loja-dropshipping-start/p"
    };
    const packageData2 = {
        packageTitle2: "Mega",
        packageDescription2: "A solução mais completa e mais vendida, inclui tudo do pacote Super + assessoria de marketing dedidacada e anúncios.",
        packagePrice2: "7.999",
        packageNews2: "3.999",
        packageParcel2: "405,27",
        packageName2: "Mega:",
        included1Package2: "Criação da Loja Virtual Completa",
        included2Package2: "Criação da Logomarca",
        included3Package2: "60 Produtos Exclusivos",
        included4Package2: "Mentoria + Consultoria",
        included5Package2: "Curso com Mais de 300 Aulas",
        included6Package2: "Suporte Especializado 24h",
        included7Package2: "Garantia de 01 ano",
        included8Package2: "Domínio Grátis (www.suamarca.com.br)",
        included9Package2: "3 Anúncios (Facebook e Instagram)",
        included10Package2: "30 Dias de Assessoria de Marketing",
        packageLink2: "https://dropshipping-goodds.catalog.yampi.io/desenvolvimento-de-loja-dropshipping-mega/p"
    };

    return (
        <div  id="pageLoja">
            <MainCta setTop={false} mainCtaImage={ImageMainCta} data={contentHeaderSection} />
            {/* <ImageBackground isVideo={false} title="Loja de Dropshipping Profissional" description="Somos a Primeira Agência de Dropshipping Nacional e Internacional do Brasil" image={ImageBg}/> */}
            <SimpleTwoColumns title="Especialistas em Dropshipping" descriptionOne="Somos a" descriptionDestaque=" Primeira Agência de Dropshipping do Brasil." description=" Desenvolvemos a loja personalizada e prestamos todos os serviços exclusivos para que sua loja venda todos os dias." image={ImageHomeMarketplaces} />
            <DropHome title="Nacional e Internacional" subtitle="1ª Agência do Brasil especializada em " descriptionDestaque="Dropshipping Nacional, Latam e Global." />
            <VantagensLoja image={ImageVantagens} vantagemData="" />
            <PackagesSection packageData1={packageData1}  packageData2={packageData2} sectionPackageTitle="Tenha uma Loja Completa" />
            <DropdownTableLoja titleIncluded="Dropshipping" />
            <GoogleReviews />
            <GridCall />
            <VendaTodoDia image={ImageVenda} />
            <IncludedGrid4 />
            <IncludedGrid6 />
            <SectionBonus />
            <Footer linkCtaWhatsapp={whatsapp} />
            <Whatsapp whatsappMessage={whatsapp} />
        </div>
    )
}

export default DropshippingTradicional;