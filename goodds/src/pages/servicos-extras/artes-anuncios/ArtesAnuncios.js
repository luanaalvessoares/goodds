import React from "react";
import './ArtesAnuncios.css';
import Whatsapp from "../../../components/whatsapp/Whatsapp";
import Footer from "../../../components/footer/Footer";
import TopTitleImageSection from "../../../components/top-title-image/TopTitleImageSection";
import BackgroundTop from '../../../assets/images/topmkt.webp';
import BackgroundTopChildren1 from '../../../assets/images/topchildrenmkt1.webp';
import BackgroundTopChildren2 from '../../../assets/images/topchildrenmkt2.webp';
import BackgroundTopChildren3 from '../../../assets/images/topchildrenmkt3.webp';
import PackagesSection from "../../../components/packages-section/PackagesSection";
import GoogleReviews from "../../../components/google-reviews/GoogleReviews";
import SimpleTwoColumns from "../../../components/section-simple-twocolumns/SimpleTwoColumns";
import ImageDescription from '../../../assets/images/mineracaodescription.webp';
import CardsIcons from "../../../components/cards-icons/CardsIcons";
import IconCards1 from '../../../assets/images/iconcards1.webp';
import IconCards2 from '../../../assets/images/iconcards2.webp';
import IconCards3 from '../../../assets/images/iconcards3.webp';
import IconCards4 from '../../../assets/images/iconcards4.webp';
import VantagensLoja from "../../../components/vantagens-loja/VantagensLoja";
import ImageVantagens from '../../../assets/images/section-vantagesdrop.webp';

function ArtesAnuncios() {
    const whatsapp = "https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista%20em%20Artes%20para%20Anuncios";
        
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

    const cardsIconsData = {
        title: "Mineração Profissional",
        icon1: `${IconCards1}`,
        cardTitle1: "Fornecedores validados",
        cardDescription1: "Buscamos fornecedores com alta avaliação e que correspondam com uma criteriosa análise de segurança, para garantir as suas entregas.",
        icon2: `${IconCards2}`,
        cardTitle2: "Produtos diferenciados",
        cardDescription2: "Efetuamos uma pesquisa de mercado e selecionamos produtos que possuem um grande potencial de conversão.",
        icon3: `${IconCards3}`,
        cardTitle3: "Descrições completas",
        cardDescription3: "Cadastramos os produtos e executamos a inserção de todas as informações com estratégias de vendas planejadas.",
        icon4: `${IconCards4}`,
        cardTitle4: "Imagens tratadas",
        cardDescription4: "Tratamos as imagens dos produtos para que fiquem em alta resolução e facilite na conversão do produto.",
    };

    return (
        <div>
            <TopTitleImageSection title="Venda todos os dias." subtitle="Alcance novos clientes diariamente. Planejamos estratégias e executamos campanhas de marketing para sua loja virtual." backgroundUrl={BackgroundTop} imageChildren1={BackgroundTopChildren1} imageChildren2={BackgroundTopChildren2} imageChildren3={BackgroundTopChildren3} />
            <PackagesSection packageData1={packageData1}  packageData2={packageData2} sectionPackageTitle="Tenha uma Loja Completa" />
            <GoogleReviews />
            <SimpleTwoColumns title="Produtos que vendem!" description="Temos uma equipe especializada em conversão, a mineração e o cadastramento dos produtos devem ser levados a sério, por isso oferecemos um serviço completo. Se tratando de dropshipping a seleção e o cadastramento do produto é o que define o sucesso da loja, atuamos com uma execução perfeita desde a escolha do item até a implementação no site. Deixe com a nossa equipe." image={ImageDescription} />
            <CardsIcons cardsIconsData={cardsIconsData} />
            <VantagensLoja image={ImageVantagens} vantagemData="" />
            <Footer linkCtaWhatsapp={whatsapp} />
            <Whatsapp whatsappMessage={whatsapp} />
        </div>
    )
}

export default ArtesAnuncios;