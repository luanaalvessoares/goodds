import React from "react";
import './Consultorias.css';
import Whatsapp from "../../../components/whatsapp/Whatsapp";
import Footer from "../../../components/footer/Footer";
import TitleDescription from "../../../components/title-description/TitleDescription";
import SectionTopConsultorias from "../../../components/section-top-consultorias/SectionTopConsultorias";
import ImageTop from '../../../assets/images/top-image-consultorias.webp';
import PackagesSection from "../../../components/packages-section/PackagesSection";
import GoogleReviews from "../../../components/google-reviews/GoogleReviews";
import CardsInfoTitle from '../../../components/cards-infos-titulo/CardsInfoTitle';
import SectionClientReview from '../../../components/section-client-review/SectionClientReview';
import ImageClient from '../../../assets/images/client1.webp';
import DeskImageClient from '../../../assets/images/desktop1.webp';

function Consultorias() {
    const whatsapp = "https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20Consultor%20Especialista";


    const packageData1 = {
        packageTitle1: "Consultoria Marketplace",
        packageDescription1: "Mentoria com um especialista sobre a operação das vendas nos marketplaces e apresentação de soluções para o momento do seu negócio",
        packagePrice1: "1.997",
        packageNews1: "997",
        packageParcel1: "101,04",
        packageName1: "",
        included1Package1: "Call de até 1h",
        included2Package1: "Resumo da consultoria em PDF",
        included3Package1: "Consultor dedicado",
        included4Package1: "Configuração e integração do Bling",
        packageLink1: "https://dropshipping-goodds.catalog.yampi.io/consultoria-para-marketplace/p",
        btnName1: "Comprar"
    };
    const packageData2 = {
        packageTitle2: "Consultoria de Loja Virtual",
        packageDescription2: "Análise técnica do e-commerce executada por uma equipe de TI especializada, com apresentação e entrega de relatório e sugestões de melhorias na loja virtual.",
        packagePrice2: "1.997",
        packageNews2: "997",
        packageParcel2: "101,04",
        packageName2: "",
        included1Package2: "Call de até 1h para apresentação do relatório",
        included2Package2: "Relatório pós análise em PDF",
        included3Package2: "Consultor dedicado",
        included4Package2: "Análise do layout e das integrações",
        packageLink2: "https://dropshipping-goodds.catalog.yampi.io/consultoria-analise-tecnica-de-e-commerce/p",
        btnName2: "Comprar"
    };
    const packageData3 = {
        packageTitle3: "Consultoria de Dropshipping",
        packageDescription3: "Mentoria com um especialista sobre a operação de dropshipping e a apresentação de soluções para o momento do seu negócio.",
        packagePrice3: "1.997",
        packageNews3: "997",
        packageParcel3: "101,04",
        packageName3: "",
        included1Package3: "Call de até 1h",
        included2Package3: "Resumo da consultoria em PDF",
        included3Package3: "Consultor dedicado",
        included4Package3: "Dropshipping Nacional e Global",
        packageLink3: "https://dropshipping-goodds.catalog.yampi.io/consultoria-de-dropshipping/p",
        btnName3: "Comprar"
    };
    
    return (
        <div>
            <TitleDescription title="Consultoria estratégica para sua Loja Virtual" description="Independente do momento do seu negócio, nós te mostramos o caminho." />
            <SectionTopConsultorias title="Mentorias feitas por especialistas que amam venda online." subtitle="Apresentamos técnicas, ferramentas e processos que facilitam a jornada da sua loja, rumo ao sucesso. Otimizamos a operação do seu negócio de forma simplificada." image={ImageTop} />
            <PackagesSection packageData1={packageData1} segundoPacote={true} packageData2={packageData2} terceiroPacote={true} packageData3={packageData3} sectionPackageTitle="Escolha sua Consultoria" />
            <GoogleReviews />
            <CardsInfoTitle title="Mostre ao mundo sua marca e ofereça a melhor experiência de compra" />
            <SectionClientReview title="Planejamos seu caminho para o crescimento" image={ImageClient} comment="Experiência Excelente, equipe SUPER competente, criativos e atenciosos. Me ajudaram com a idéia do nome da minha loja e o logo ficou demais. Atedimento nota mil. Só tenho que agradecer pelo comprometimento e suporte que superou as minhas expectativas." clientName="Rosana Januário — Loja TendTudo" deskImageClient={DeskImageClient} />
            <Footer linkCtaWhatsapp={whatsapp} mostrarSecao={true} />
            <Whatsapp whatsappMessage={whatsapp} />
        </div>
    )
}

export default Consultorias;