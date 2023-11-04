import React from "react";
import './DropshippingTradicional.css'
import ImageBackground from "../../../components/image-background/ImageBackground";
import Footer from "../../../components/footer/Footer";
import ImageBg from '../../../assets/images/dropshipping-tradicional-bg.webp'
import VendaTodoDia from "../../../components/venda-todo-dia/VendaTodoDia";
import ImageVenda from '../../../assets/images/image-venda1.webp'
import PackagesSection from "../../../components/packages-section/PackagesSection";
import DropdownTableLoja from "../../../components/dropdown-table/DropdownTableLoja";
import GoogleReviews from "../../../components/google-reviews/GoogleReviews";
import VantagensLoja from "../../../components/vantagens-loja/VantagensLoja";
import ImageVantagens from '../../../assets/images/section-vantagesdrop.webp';
import SimpleTwoColumns from "../../../components/section-simple-twocolumns/SimpleTwoColumns";
import ImageHomeMarketplaces from '../../../assets/images/homemarketplaces.webp';
import Whatsapp from "../../../components/whatsapp/Whatsapp";

function DropshippingTradicional() {
    const whatsapp = "https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista%20em%20dropshipping";
    
    const packageData1 = {
        packageTitle1: "Start",
        packageDescription1: "Desenvolvimento de Loja Virtual profissional com ferramentas que potencializam suas vendas, com cadastro de 30 produtos e integrada com fornecedores.",
        packagePrice1: "3.399",
        packageNews1: "1.999",
        packageParcel1: "208,25",
        packageName1: "Start:",
        included1Package1: "Criação da Loja Virtual",
        included2Package1: "Criação da Logomarca",
        included3Package1: "Mineração e cadastro de 30 produtos",
        packageLink1: "https://dropshipping-goodds.catalog.yampi.io/desenvolvimento-de-loja-dropshipping-start/p"
    };
    const packageData2 = {
        packageTitle2: "Mega",
        packageDescription2: "A solução mais interessante, considerada a melhor e mais completa da Goodds inclui acessoria de marketing e anúncios.",
        packagePrice2: "5.999",
        packageNews2: "3.999",
        packageParcel2: "416,58",
        packageName2: "Mega:",
        included1Package2: "Criação da Loja Virtual",
        included2Package2: "Criação da Logomarca",
        included3Package2: "Mineração e cadastro de 30 produtos",
        included4Package2: "30 dias de acessoria de Marketing",
        packageLink2: "https://dropshipping-goodds.catalog.yampi.io/desenvolvimento-de-loja-dropshipping-mega/p"
    };

    return (
        <div>
            <ImageBackground isVideo={false} title="Loja de Dropshipping Profissional" description="Somos a Primeira Agência de Dropshipping Nacional e Internacional" image={ImageBg}/>
            <VendaTodoDia image={ImageVenda}/>
            <PackagesSection packageData1={packageData1}  packageData2={packageData2} sectionPackageTitle="Tenha uma Loja Completa" />
            <DropdownTableLoja titleIncluded="Dropshipping" />
            <GoogleReviews />
            <VantagensLoja image={ImageVantagens} vantagemData="" />
            <SimpleTwoColumns title="Especialistas em Marketplaces" description="Venda nos principais Marketplaces do Brasil com a nossa solução de consultoria e implementação. Soluções que vão além da criação da sua loja. Decole suas vendas com nossa consultoria estratégica, campanhas de divulgação e anúncios patrocinados." image={ImageHomeMarketplaces} />
            <Footer linkCtaWhatsapp={whatsapp} />
            <Whatsapp whatsappMessage={whatsapp} />
        </div>
    )
}

export default DropshippingTradicional;