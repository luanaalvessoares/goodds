import React from "react";
import './MineracaoProdutosDropshipping.css';
import Whatsapp from "../../../components/whatsapp/Whatsapp";
import Footer from "../../../components/footer/Footer";
import TopTitleImageSection from "../../../components/top-title-image/TopTitleImageSection";
import BackgroundTop from '../../../assets/images/topmineracao.webp';
import BackgroundTopChildren1 from '../../../assets/images/topchildrenmineracao.webp';
import PackagesSection from "../../../components/packages-section/PackagesSection";
import GoogleReviews from "../../../components/google-reviews/GoogleReviews";
import ImageDescription from '../../../assets/images/mineracaodescription.webp';
import SimpleTwoColumns from "../../../components/section-simple-twocolumns/SimpleTwoColumns";
import CardsIcons from "../../../components/cards-icons/CardsIcons";
import IconCards1 from '../../../assets/images/iconcards1.webp';
import IconCards2 from '../../../assets/images/iconcards2.webp';
import IconCards3 from '../../../assets/images/iconcards3.webp';
import IconCards4 from '../../../assets/images/iconcards4.webp';

function MineracaoProdutosDropshipping() {
    const whatsapp = "https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista%20em%20mineração%20de%20produtos%20para%20Dropshipping";
 
    const packageData1 = {
        packageTitle1: "30 produtos",
        packageDescription1: "Mineração e cadastro profissional de 30 produtos com padronização de imagens e descrição otimizada.",
        packagePrice1: "1.997",
        packageNews1: "997",
        packageParcel1: "101,04",
        packageName1: "",
        included1Package1: "Seleção exclusiva",
        included2Package1: "Cadastro após aprovação",
        included3Package1: "Copywriting otimizado",
        included4Package1: "Tratamento das imagens",
        packageLink1: "https://dropshipping-goodds.catalog.yampi.io/pacote-de-mineracao-e-cadastro-30-produtos/p",
        btnName1: "Comprar"
    };
    const packageData2 = {
        packageTitle2: "60 produtos",
        packageDescription2: "Mineração e cadastro profissional de 60 produtos com padronização de imagens e descrição otimizada.",
        packagePrice2: "3.997",
        packageNews2: "1.897",
        packageParcel2: "192,25",
        packageName2: "",
        included1Package2: "Seleção exclusiva",
        included2Package2: "Cadastro após aprovação",
        included3Package2: "Copywriting otimizado",
        included4Package2: "Tratamento das imagens",
        packageLink2: "https://dropshipping-goodds.catalog.yampi.io/mineracao-e-cadastro-de-produtos-para-dropshipping-60-produtos/p",
        btnName2: "Comprar"
    };
    const packageData3 = {
        packageTitle3: "90 produtos",
        packageDescription3: "Mineração e cadastro profissional de 90 produtos com padronização de imagens e descrição otimizada.",
        packagePrice3: "5.997",
        packageNews3: "2.697",
        packageParcel3: "273,32",
        packageName3: "",
        included1Package3: "Seleção exclusiva",
        included2Package3: "Cadastro após aprovação",
        included3Package3: "Copywriting otimizado",
        included4Package3: "Tratamento das imagens",
        packageLink3: "https://dropshipping-goodds.catalog.yampi.io/mineracao-e-cadastro-de-produtos-para-dropshipping-90-produtos/p",
        btnName3: "Comprar"
    };

    const cardsIconsData = {
        title: "Mineração Profissional",
        icon1: `${IconCards1}`,
        cardTitle1: "Fornecedores",
        cardDescription1: "Buscamos os fornecedores mais bem avaliados para garantir segurança nas suas entregas.",
        icon2: `${IconCards2}`,
        cardTitle2: "Produtos",
        cardDescription2: "Selecionamos produtos exclusivos que possuem um grande potencial de conversão.",
        icon3: `${IconCards3}`,
        cardTitle3: "Descrições",
        cardDescription3: "Destacamos os benefícios e características de cada produto com técnicas de copywriting.",
        icon4: `${IconCards4}`,
        cardTitle4: "Imagens",
        cardDescription4: "Tratamos as imagens dos produtos para que fiquem em alta resolução e facilite na conversão.",
    };

    return (
        <div>
            <TopTitleImageSection title="Encontramos produtos vencedores para sua loja" subtitle="Mineramos e cadastramos no seu site, produtos testados com alto poder de conversão." backgroundUrl={BackgroundTop} imageChildren2={BackgroundTopChildren1} />
            <CardsIcons cardsIconsData={cardsIconsData} />
            <SimpleTwoColumns title="Produtos que vendem!" description="Possuímos um departamento exclusivo de produtos. No dropshipping a seleção e o cadastramento do produto é um dos pilares que define o sucesso da loja. Atuamos com uma execução perfeita desde a escolha do item até a implementação no site." image={ImageDescription} />
            <GoogleReviews />
            <PackagesSection packageData1={packageData1} segundoPacote={true} packageData2={packageData2} terceiroPacote={true} packageData3={packageData3} sectionPackageTitle="Mineração de produtos" />
            <Footer linkCtaWhatsapp={whatsapp} mostrarSecao={true} />
            <Whatsapp whatsappMessage={whatsapp} />
        </div>
    )
}

export default MineracaoProdutosDropshipping;