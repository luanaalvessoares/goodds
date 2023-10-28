import React from "react";
import './LojaVirtual.css';
import ImageBackground from "../../../components/image-background/ImageBackground";
import Footer from "../../../components/footer/Footer";
import ImageBg from '../../../assets/images/loja-virtual-bg.webp';
import ImageVenda from '../../../assets/images/image-venda1.webp';
import ImageVantagens from '../../../assets/images/section-vantagesloja.webp';
import VendaTodoDia from "../../../components/venda-todo-dia/VendaTodoDia";
import PackagesSection from "../../../components/packages-section/PackagesSection";
import DropdownTable from "../../../components/dropdown-table/DropdownTable";
import GoogleReviews from "../../../components/google-reviews/GoogleReviews";
import VantagensLoja from "../../../components/vantagens-loja/VantagensLoja";
import FooterCta from "../../../components/footer-cta/FooterCta";
import Whatsapp from "../../../components/whatsapp/Whatsapp";

function LojaVirtual() {
    const packageData1 = {
        packageTitle1: "Start",
        packageDescription1: "Desenvolvimento de Loja Virtual Profissional com ferramentas que potencializam suas vendas.",
        packagePrice1: "3.999",
        packageNews1: "1.999",
        packageParcel1: "208,25",
        packageName1: "Start:",
        included1Package1: "Criação da Loja Virtual",
        included2Package1: "Criação da Logomarca",
        packageLink1: "https://dropshipping-goodds.catalog.yampi.io/desenvolvimento-e-commerce-start/p"
    };
    const packageData2 = {
        packageTitle2: "Mega",
        packageDescription2: "Considerada a melhor e mais completa solução da Goodds, inclui todo o desenvolvimento da Loja virtual, a integração com 01 marketplace, 30 dias de acessoria de marketing e anúncios.",
        packagePrice2: "5.999",
        packageNews2: "3.999",
        packageParcel2: "416,58",
        packageName2: "Mega:",
        included1Package2: "Criação da Loja Virtual",
        included2Package2: "Criação da Logomarca",
        included3Package2: "30 dias de acessoria de Marketing",
        packageLink2: "https://dropshipping-goodds.catalog.yampi.io/desenvolvimento-e-commerce-mega/p"
    };

    const vantagemData = {
        vantagemTitle: "Vantagens das nossas soluções",
        vantagemTitle1: "Loja de alta conversão",
        vantagemSubtitle1: "Criamos o layout, os banners e o logo. Integramos a loja com os meios de pagamentos, redes sociais e marketplaces.",
        vantagemTitle2: "Campanhas Patrocinadas",
        vantagemSubtitle2: "Disponibilizamos uma equipe especializada em conversão para criar e gerenciar as campanhas para sua loja.",
        vantagemTitle3: "Desenvolvimento da logomarca",
        vantagemSubtitle3: "Ainda não tem marca? Nossa equipe de design te auxilia na escolha do nome e também faz a criação artística da sua logo.",
        vantagemTitle4: "Venda nos marketplaces",
        vantagemSubtitle4: "Disponibilize seus produtos nos maiores marketplaces da internet. Configuramos e integramos com a sua loja",
    };
    
    return (
        <div className="lojaVirtual">
            <ImageBackground isVideo={false} title="Desenvolvimento de Loja Virtual" description="Criamos seu e-commerce completo com layout personalizado, entregamos pronto para você vender!" image={ImageBg}/>
            <VendaTodoDia image={ImageVenda} itemDescription2="Marketplaces | Pagamentos | Entrega | Redes Sociais" itemDescription4="Loja + Logo + Marketing + Consultoria"/>
            <PackagesSection packageData1={packageData1}  packageData2={packageData2} />
            <DropdownTable titleIncluded="Loja Virtual" />
            <GoogleReviews />
            <VantagensLoja image={ImageVantagens} vantagemData={vantagemData} />
            <FooterCta backgroundGradient="linear-gradient(46.87deg, rgb(177, 245, 250) 0%, rgb(77, 255, 158) 96.94%)" />
            <Footer />
            <Whatsapp whatsappMessage="https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista%20em%20Loja%20Virtual"/>
        </div>
    )
}

export default LojaVirtual;