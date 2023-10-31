import React from "react";
import './DropshippingGlobal.css'
import ImageBackground from "../../../components/image-background/ImageBackground";
import Footer from "../../../components/footer/Footer";
import ImageBg from '../../../assets/images/dropshipping-global-bg.webp'
import ImageVenda from '../../../assets/images/image-venda4.webp'
import VendaTodoDia from "../../../components/venda-todo-dia/VendaTodoDia";
import PackagesSection from "../../../components/packages-section/PackagesSection";
import DropdownTableLoja from "../../../components/dropdown-table/DropdownTableLoja";
import GoogleReviews from "../../../components/google-reviews/GoogleReviews";
import VantagensLoja from "../../../components/vantagens-loja/VantagensLoja";
import ImageVantagens from '../../../assets/images/section-vantagesdrop.webp';
import Whatsapp from "../../../components/whatsapp/Whatsapp";

function DropshippingGlobal() {
    const whatsapp = "https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista%20em%20Dropshipping%20Global";

    const packageData1 = {
        packageTitle1: "Start",
        packageDescription1: "Desenvolvimento de Loja Virtual profissional com ferramentas que potencializam suas vendas, com cadastro de 30 produtos e integrada com fornecedores.",
        packagePrice1: "4.999",
        packageNews1: "2.999",
        packageParcel1: "312,42",
        packageName1: "Start:",
        included1Package1: "Criação da Loja Virtual",
        included2Package1: "Criação da Logomarca",
        included3Package1: "Mineração e cadastro de 30 produtos",
        packageLink1: "https://dropshipping-goodds.catalog.yampi.io/desenvolvimento-de-loja-dropshipping-global-start/p"
    };
    const packageData2 = {
        packageTitle2: "Mega",
        packageDescription2: "A solução mais interessante, considerada a melhor e mais completa da Goodds inclui acessoria de marketing e anúncios.",
        packagePrice2: "7.999",
        packageNews2: "4.999",
        packageParcel2: "520,75",
        packageName2: "Mega:",
        included1Package2: "Criação da Loja Virtual",
        included2Package2: "Criação da Logomarca",
        included3Package2: "Mineração e cadastro de 30 produtos",
        included4Package2: "30 dias de acessoria de Marketing",
        packageLink2: "https://dropshipping-goodds.catalog.yampi.io/desenvolvimento-de-loja-dropshipping-global-mega/p"
    };

    return (
        <div>
            <ImageBackground isVideo={false} title="Loja de Dropshipping Global" description="Tenha uma Loja fora do Brasil e receba em Dólar." image={ImageBg}/>
            <VendaTodoDia image={ImageVenda}/>
            <PackagesSection packageData1={packageData1}  packageData2={packageData2} sectionPackageTitle="Tenha uma Loja Completa" />
            <DropdownTableLoja titleIncluded="Dropshipping" />
            <GoogleReviews />
            <VantagensLoja image={ImageVantagens} vantagemData="" />
            <Footer linkCtaWhatsapp={whatsapp} />
            <Whatsapp whatsappMessage={whatsapp} />
        </div>
    )
}

export default DropshippingGlobal;