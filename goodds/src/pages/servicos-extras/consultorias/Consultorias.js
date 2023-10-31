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
    
    return (
        <div>
            <TitleDescription title="Consultoria estratégica para sua Loja Virtual" description="Independente do momento do seu negócio, nós te mostramos o caminho." />
            <SectionTopConsultorias title="Uma mentoria feita por especialistas que amam Dropshipping." subtitle="Apresentamos técnicas, ferramentas e processos que facilitam a jornada da sua loja, rumo ao sucesso. Otimizamos a operação do seu negócio de forma simplificada." image={ImageTop} />
            <PackagesSection packageData1={packageData1}  packageData2={packageData2} sectionPackageTitle="Tenha uma Loja Completa" />
            <GoogleReviews />
            <CardsInfoTitle title="Mostre ao mundo sua marca e ofereça a melhor experiência de compra" />
            <SectionClientReview title="Planejamos seu caminho para o crescimento" image={ImageClient} comment="Experiência Excelente, equipe SUPER competente, criativos e atenciosos. Me ajudaram com a idéia do nome da minha loja e o logo ficou demais. Atedimento nota mil. Só tenho que agradecer pelo comprometimento e suporte que superou as minhas expectativas." clientName="Rosana Januário — Loja TendTudo" deskImageClient={DeskImageClient} />
            <Footer linkCtaWhatsapp={whatsapp} />
            <Whatsapp whatsappMessage={whatsapp} />
        </div>
    )
}

export default Consultorias;