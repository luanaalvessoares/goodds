import React from "react";
import './LojaVirtual.css';
import Footer from "../../../components/footer/Footer";
import VendaTodoDia from "../../../components/venda-todo-dia/VendaTodoDia";
import PackagesSection from "../../../components/packages-section/PackagesSection";
import DropdownTableLoja from "../../../components/dropdown-table/DropdownTableLoja";
import GoogleReviews from "../../../components/google-reviews/GoogleReviews";
import VantagensLoja from "../../../components/vantagens-loja/VantagensLoja";
import ImageVantagens from '../../../assets/images/section-vantagesdrop.webp';
import SimpleTwoColumns from "../../../components/section-simple-twocolumns/SimpleTwoColumns";
import ImageHomeMarketplaces from '../../../assets/images/homemarketplaces.webp';
import DropHome from "../../../components/section-drop-home/DropHome";
import Whatsapp from "../../../components/whatsapp/Whatsapp";
import MainCta from '../../../components/main-cta/MainCta';
import ImageVendaTodoDia from '../../../assets/images/drop-global-menu.webp';
import ImagePrimeiraAgencia from '../../../assets/images/loja-online-virtual.webp';
import ImageMainCta from '../../../assets/images/imagenew.png';
import IncludedGrid4 from "../../../components/included-grid-4/IncludedGrid4";
import IncludedGrid6 from "../../../components/included-grid-6/IncludedGrid6";
import GridCall from "../../../components/grid-call/GridCall";
import SectionBonus from "../../../components/section-bonus/SectionBonus";

function LojaVirtual() {
    const whatsapp = "https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista%20em%20Loja%20Virtual";

    const contentHeaderSection = {
        destaqueTitleText1: "Tenha uma ",
        titleText: "Loja Virtual ",
        destaqueTitleText2: "profissional e venda todos os dias",
        description: "Tenha acesso ao Curso mais completo para vender seu produto ou serviço na internet. Aprenda como atrair mais clientes para o seu negócio, investindo pouco e ganhando muito.",
        vantagem1: "Design Personalizado",
        vantagem2: "Desenvolvimento Rápido",
        vantagem3: "Milhares de Integrações",
        vantagem4: "Integrada com as Redes Sociais",
        vantagem5: "Checkout Simplificado",
        vantagem6: "Suporte Dedicado 24h",
        vantagem7: "Garantia Vitalícia",
        iconInfo:"Mais de 9.000 clientes em 12 países",
        btnTextDestaque2: "Preços e Soluções",
        btnDesc: "Aproveite nossa promoção de 50% OFF",
        linkBtn: "#packageSection"
    }

    const vantagemData = {
        vantagemTitle: 'Vantagens da nossa Solução',
        vantagemSubtitle1: 'Criamos o layout, os banners e o logo. Integramos a loja com os meios de pagamentos, redes sociais e sistemas de frete.',
        vantagemTitle4: 'Suporte Especializado',
        vantagemSubtitle4: 'Oferecemos acompanhamento dedicado no desenvolvimento do projeto e também no suporte da sua loja virtual.',
        vantagemTitle5: 'Layout Personalizado',
        vantagemSubtitle5: 'Fazemos o desenvolvimento da loja conforme as suas preferências. Toda a criação artística é feita exclusivamente para sua marca.',
    };

    const packageData1 = {
        packageTitle1: "Super",
        packageDescription1: "Criação da Loja Virtual completa, integrada com as redes sociais, meios de pagamento e sistemas de entrega.",
        packagePrice1: "3.997",
        packageNews1: "1.997",
        packageParcel1: "202,38",
        packageName1: " no Super",
        included1Package1: "Criação da Loja Virtual Completa",
        included2Package1: "Layout Personalizado",
        included3Package1: "Mentoria + Consultoria",
        included4Package1: "Curso com Centenas de Aulas",
        included5Package1: "Suporte Especializado 24h",
        included6Package1: "Garantia Vitalícia",
        included7Package1: "Domínio Grátis (www.suamarca.com.br)",
        included13Package1: "Criação da Logomarca",
        included14Package1: "Anúncios (Facebook e Instagram)",
        included15Package1: "30 Dias de Assessoria de Marketing",
        packageLink1: "https://dropshipping-goodds.catalog.yampi.io/desenvolvimento-e-commerce-start/p",
        btnName1: "Comprar"
    };
    const packageData2 = {
        packageTitle2: "Mega",
        packageDescription2: "Desenvolvimento da Loja Virtual completa e da Logo profissional + integração de marketing e 1 anúncio.",
        packagePrice2: "5.997",
        packageNews2: "2.997",
        packageParcel2: "303,72",
        packageName2: " no Mega",
        included1Package2: "Criação da Loja Virtual Completa",
        included2Package2: "Criação da Logomarca",
        included3Package2: "Layout Personalizado",
        included4Package2: "Mentoria + Consultoria",
        included5Package2: "Curso com Centenas de Aulas",
        included6Package2: "Suporte Especializado 24h",
        included7Package2: "Garantia Vitalícia",
        included8Package2: "Domínio Grátis (www.suamarca.com.br)",
        included9Package2: "1 Anúncio (Facebook e Instagram)",
        included13Package2: "30 Dias de Assessoria de Marketing",
        packageLink2: "https://dropshipping-goodds.catalog.yampi.io/pacote-e-commerce-completo-mega/p",
        btnName2: "Comprar"
    };
    const packageData3 = {
        packageTitle3: "Especial",
        packageDescription3: "A solução mais completa e mais vendida, inclui tudo do pacote Mega + assessoria de marketing dedidacada e 3 anúncios.",
        packagePrice3: "7.997",
        packageNews3: "3.997",
        packageParcel3: "405,06",
        packageName3: " no Especial",
        included1Package3: "Criação da Loja Virtual Completa",
        included2Package3: "Criação da Logomarca",
        included3Package3: "Layout Personalizado",
        included4Package3: "Mentoria + Consultoria",
        included5Package3: "Curso com Centenas de Aulas",
        included6Package3: "Suporte Especializado 24h",
        included7Package3: "Garantia Vitalícia",
        included8Package3: "Domínio Grátis (www.suamarca.com.br)",
        included9Package3: "3 Anúncios (Facebook e Instagram)",
        included10Package3: "30 Dias de Assessoria de Marketing",
        packageLink3: "https://dropshipping-goodds.catalog.yampi.io/pacote-e-commerce-completo-especial/p",
        btnName3: "Comprar"
    };

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
        bonus1: "Tema Personalizado de Alta Conversão",
        bonus2: "",
        bonus3: "Acesso a uma Coleção de Banners Personalizados",
        bonus4: "Aprenda Tudo Sobre Artes e Imagens no Canva",
        bonus5: "",
        bonus6: "",
        bonus7: "Metodologia para Venda no Comércio Global",
        bonus8: "",
    };
    
    return (
        <div className="lojaVirtual" id="pageLoja">
            <MainCta setTop={false} mainCtaImage={ImageMainCta} data={contentHeaderSection} />
            {/* <ImageBackground isVideo={false} title="Loja de Dropshipping Profissional" description="Somos a Primeira Agência de Dropshipping Nacional e Internacional do Brasil" image={ImageBg}/> */}
            <SimpleTwoColumns title="Especialistas em" destaqueTitle="E-commerce" descriptionOne="Somos uma" descriptionDestaque=" Agência Full E-commerce." description=" Desenvolvemos a loja personalizada e prestamos todos os serviços exclusivos para que sua loja venda todos os dias." image={ImageHomeMarketplaces} />
            <DropHome title="Nacional e Internacional" subtitle="Agência especializada em " descriptionDestaque="venda online dentro e fora do Brasil." image={ImagePrimeiraAgencia} />
            <VantagensLoja image={ImageVantagens} vantagemData={vantagemData} lastInfo={false} />
            <GridCall />
            <PackagesSection packageData1={packageData1} segundoPacote={true} packageData2={packageData2} terceiroPacote={true} packageData3={packageData3} sectionPackageTitle="Tenha uma Loja Completa" />
            <DropdownTableLoja />
            <GoogleReviews />
            <VendaTodoDia image={ImageVendaTodoDia} itemDescription2="Apps | Pagamentos | Entrega | Redes Sociais" itemDescription4="Loja + Logo + Marketing" />
            <IncludedGrid4 gridData={grid1Data} />
            <IncludedGrid6 gridData={grid2Data} />
            <SectionBonus bonusData={bonusData} />
            <Footer linkCtaWhatsapp={whatsapp} mostrarSecao={false} />
            <Whatsapp whatsappMessage={whatsapp} />
        </div>
    )
}

export default LojaVirtual;