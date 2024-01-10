import React from "react";
import './PackagesDrop.css';
import PackagesSection from "../packages-section/PackagesSection";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';


function PackagesDrop() {
    const paginationTexts = {
        0: 'Tradicional',
        1: 'Global ou Latam',
        2: 'Promoção 2 em 1',
    };

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"><span class="inner-span">' + paginationTexts[index] + '</span></span>';
        },
    };

    // DROP TRADICIONAL
    const dropTrad1 = {
        packageTitle1: "Loja Dropshipping Super",
        packageDescription1: "Desenvolvimento da Loja Virtual com logo profissional, mineração e cadastro de 15 produtos já integrados com fornecedores.",
        packagePrice1: "3.999",
        packageNews1: "1.999",
        packageParcel1: "202,58",
        packageName1: " no Super",
        included1Package1: "Criação da Loja Virtual Completa",
        included2Package1: "Criação da Logomarca",
        included3Package1: "15 Produtos Exclusivos",
        included4Package1: "Mentoria + Consultoria",
        included5Package1: "Curso com Mais de 300 Aulas",
        included6Package1: "Suporte Especializado 24h",
        included7Package1: "Garantia Vitalícia",
        included8Package1: "Domínio Grátis (www.suamarca.com.br)",
        included13Package1: "Anúncios (Facebook e Instagram)",
        included14Package1: "30 Dias de Assessoria de Marketing",
        packageLink1: "https://dropshipping-goodds.catalog.yampi.io/pacote-loja-de-dropshipping-super/p",
        btnName1: "Comprar",
        bandeiras1: true,
        bandeiraBr1: true,
    };
    const dropTrad2 = {
        packageTitle2: "Loja Dropshipping Mega",
        packageDescription2: "Desenvolvimento da Loja Virtual e da Logo com mineração e cadastro exclusivo de 30 produtos já integrados com fornecedores + 1 anúncio.",
        packagePrice2: "5.999",
        packageNews2: "2.999",
        packageParcel2: "303,92",
        packageName2: " no Mega",
        included1Package2: "Criação da Loja Virtual Completa",
        included2Package2: "Criação da Logomarca",
        included3Package2: "30 Produtos Exclusivos",
        included4Package2: "Mentoria + Consultoria",
        included5Package2: "Curso com Mais de 300 Aulas",
        included6Package2: "Suporte Especializado 24h",
        included7Package2: "Garantia Vitalícia",
        included8Package2: "Domínio Grátis (www.suamarca.com.br)",
        included9Package2: "1 Anúncio (Facebook e Instagram)",
        included13Package2: "30 Dias de Assessoria de Marketing",
        packageLink2: "https://dropshipping-goodds.catalog.yampi.io/pacote-loja-de-dropshipping-mega/p",
        btnName2: "Comprar",
        bandeiras2: true,
        bandeiraBr2: true,
    };
    const dropTrad3 = {
        packageTitle3: "Loja Dropshipping Especial",
        packageDescription3: "A solução mais completa e mais vendida, inclui tudo do pacote Mega + 30 produtos extras + assessoria de marketing dedicada e 3 anúncios.",
        packagePrice3: "7.999",
        packageNews3: "3.999",
        packageParcel3: "405,27",
        packageName3: " no Especial",
        included1Package3: "Criação da Loja Virtual Completa",
        included2Package3: "Criação da Logomarca",
        included3Package3: "60 Produtos Exclusivos",
        included4Package3: "Mentoria + Consultoria",
        included5Package3: "Curso com Mais de 300 Aulas",
        included6Package3: "Suporte Especializado 24h",
        included7Package3: "Garantia Vitalícia",
        included8Package3: "Domínio Grátis (www.suamarca.com.br)",
        included9Package3: "3 Anúncios (Facebook e Instagram)",
        included10Package3: "30 Dias de Assessoria de Marketing",
        packageLink3: "https://dropshipping-goodds.catalog.yampi.io/pacote-loja-de-dropshipping-especial/p",
        btnName3: "Comprar",
        bandeiras3: true,
        bandeiraBr3: true,
    };


    // DROP LATAM
    const dropLatam1 = {
        packageTitle1: "Loja Dropshipping Global ou Latam Super",
        packageDescription1: "Desenvolvimento da Loja Virtual com logo profissional para venda Internacional, mineração e cadastro de 15 produtos já integrados e traduzidos com fornecedores.",
        packagePrice1: "5.999",
        packageNews1: "2.999",
        packageParcel1: "303,92",
        packageName1: " no Super",
        included1Package1: "Criação da Loja Virtual Completa",
        included2Package1: "Criação da Logomarca",
        included3Package1: "Checkout para Venda Internacional",
        included4Package1: "Cadastro de 15 Produtos em Inglês ou Espanhol",
        included5Package1: "Mentoria + Consultoria",
        included6Package1: "Curso com Mais de 300 Aulas",
        included7Package1: "Suporte Especializado 24h",
        included8Package1: "Garantia Vitalícia",
        included9Package1: "Domínio Grátis (www.suamarca.com.br)",
        included13Package1: "Anúncios (Facebook e Instagram)",
        included14Package1: "30 Dias de Assessoria de Marketing",
        packageLink1: "https://dropshipping-goodds.catalog.yampi.io/pacote-loja-de-dropshipping-global-super/p",
        bandeiras1: true,
        bandeiraEua1: true,
        bandeiraEs1: true,
        btnName1: "Comprar"
    };
    const dropLatam2 = {
        packageTitle2: "Loja Dropshipping Global ou Latam Mega",
        packageDescription2: "Desenvolvimento da Loja Virtual e da Logo para venda Internacional com mineração e cadastro exclusivo de 30 produtos já integrados e traduzidos com fornecedores + 1 anúncio.",
        packagePrice2: "7.999",
        packageNews2: "3.999",
        packageParcel2: "405,27",
        packageName2: " no Mega",
        included1Package2: "Criação da Loja Virtual Completa",
        included2Package2: "Criação da Logomarca",
        included3Package2: "Checkout para Venda Internacional",
        included4Package2: "Cadastro de 30 Produtos em Inglês ou Espanhol",
        included5Package2: "Mentoria + Consultoria",
        included6Package2: "Curso com Mais de 300 Aulas",
        included7Package2: "Suporte Especializado 24h",
        included8Package2: "Garantia Vitalícia",
        included9Package2: "Domínio Grátis (www.suamarca.com.br)",
        included10Package2: "1 Anúncio (Facebook e Instagram)",
        included13Package2: "30 Dias de Assessoria de Marketing",
        packageLink2: "https://dropshipping-goodds.catalog.yampi.io/pacote-loja-de-dropshipping-global-mega/p",
        bandeiras2: true,
        bandeiraEua2: true,
        bandeiraEs2: true,
        btnName2: "Comprar"
    };
    const dropLatam3 = {
        packageTitle3: "Loja Dropshipping Global ou Latam Especial",
        packageDescription3: "A solução mais completa e mais vendida para venda Internacional, inclui tudo do pacote Mega + 30 produtos extras + assessoria de marketing dedidacada e 3 anúncios.",
        packagePrice3: "9.999",
        packageNews3: "4.999",
        packageParcel3: "506,61",
        packageName3: " no Especial",
        included1Package3: "Criação da Loja Virtual Completa",
        included2Package3: "Criação da Logomarca",
        included3Package3: "Checkout para Venda Internacional",
        included4Package3: "Cadastro de 60 Produtos em Inglês ou Espanhol",
        included5Package3: "Mentoria + Consultoria",
        included6Package3: "Curso com Mais de 300 Aulas",
        included7Package3: "Suporte Especializado 24h",
        included8Package3: "Garantia Vitalícia",
        included9Package3: "Domínio Grátis (www.suamarca.com.br)",
        included10Package3: "3 Anúncios (Facebook e Instagram)",
        included11Package3: "30 Dias de Assessoria de Marketing",
        packageLink3: "https://dropshipping-goodds.catalog.yampi.io/pacote-loja-de-dropshipping-global-especial/p",
        bandeiras3: true,
        bandeiraEua3: true,
        bandeiraEs3: true,
        btnName3: "Comprar"
    };


    // // DROP GLOBAL
    // const dropGlobal1 = {
    //     packageTitle1: "Loja Dropshipping Global Super",
    //     packageDescription1: "Desenvolvimento da Loja Virtual com logo profissional, mineração e cadastro de 15 produtos já integrados com fornecedores.",
    //     packagePrice1: "5.999",
    //     packageNews1: "2.999",
    //     packageParcel1: "303,92",
    //     packageName1: " no Super",
    //     included1Package1: "Criação da Loja Virtual Completa",
    //     included2Package1: "Criação da Logomarca",
    //     included3Package1: "15 Produtos Exclusivos",
    //     included4Package1: "Mentoria + Consultoria",
    //     included5Package1: "Curso com Mais de 300 Aulas",
    //     included6Package1: "Suporte Especializado 24h",
    //     included7Package1: "Garantia Vitalícia",
    //     included8Package1: "Domínio Grátis (www.suamarca.com.br)",
    //     included11Package1: "Anúncios (Facebook e Instagram)",
    //     included12Package1: "30 Dias de Assessoria de Marketing",
    //     packageLink1: "https://dropshipping-goodds.catalog.yampi.io/pacote-loja-de-dropshipping-global-super/p"
    // };
    // const dropGlobal2 = {
    //     packageTitle2: "Loja Dropshipping Global Mega",
    //     packageDescription2: "Desenvolvimento da Loja Virtual e da Logo com mineração e cadastro exclusivo de 30 produtos já integrados com fornecedores + 1 anúncio.",
    //     packagePrice2: "7.999",
    //     packageNews2: "3.999",
    //     packageParcel2: "405,27",
    //     packageName2: " no Mega",
    //     included1Package2: "Criação da Loja Virtual Completa",
    //     included2Package2: "Criação da Logomarca",
    //     included3Package2: "30 Produtos Exclusivos",
    //     included4Package2: "Mentoria + Consultoria",
    //     included5Package2: "Curso com Mais de 300 Aulas",
    //     included6Package2: "Suporte Especializado 24h",
    //     included7Package2: "Garantia Vitalícia",
    //     included8Package2: "Domínio Grátis (www.suamarca.com.br)",
    //     included9Package2: "1 Anúncio (Facebook e Instagram)",
    //     included11Package2: "30 Dias de Assessoria de Marketing",
    //     packageLink2: "https://dropshipping-goodds.catalog.yampi.io/pacote-loja-de-dropshipping-global-mega/p"
    // };
    // const dropGlobal3 = {
    //     packageTitle3: "Loja Dropshipping Global Especial",
    //     packageDescription3: "A solução mais completa e mais vendida, inclui tudo do pacote Mega + 30 produtos extras + assessoria de marketing dedidacada e 3 anúncios.",
    //     packagePrice3: "9.999",
    //     packageNews3: "4.999",
    //     packageParcel3: "506,61",
    //     packageName3: " no Especial",
    //     included1Package3: "Criação da Loja Virtual Completa",
    //     included2Package3: "Criação da Logomarca",
    //     included3Package3: "60 Produtos Exclusivos",
    //     included4Package3: "Mentoria + Consultoria",
    //     included5Package3: "Curso com Mais de 300 Aulas",
    //     included6Package3: "Suporte Especializado 24h",
    //     included7Package3: "Garantia Vitalícia",
    //     included8Package3: "Domínio Grátis (www.suamarca.com.br)",
    //     included9Package3: "3 Anúncios (Facebook e Instagram)",
    //     included10Package3: "30 Dias de Assessoria de Marketing",
    //     packageLink3: "https://dropshipping-goodds.catalog.yampi.io/pacote-loja-de-dropshipping-global-especial/p"
    // };


    // DROP 2 EM 1
    const dropDuplo1 = {
        packageTitle1: "Duas Lojas de Dropshipping",
        packageDescription1: "Desenvolvimento de 02 Lojas de Dropshipping completas. Tenha uma Loja no Brasil para vender em real e outra no exterior para vender em dólar.",
        packagePrice1: "9.999",
        packageNews1: "4.999",
        packageParcel1: "506,61",
        packageName1: " no Pacote",
        included1Package1: "Duas Lojas de Dropshipping Completas",
        included2Package1: "Criação da Logomarca",
        included3Package1: "Mineração e cadastro de 30 Produtos (Português e Inglês)",
        included4Package1: "Mentoria + Consultoria",
        included5Package1: "Curso com Mais de 300 Aulas",
        included6Package1: "Suporte Especializado 24h",
        included7Package1: "Garantia Vitalícia",
        included8Package1: "Domínio Grátis (www.suamarca.com.br)",
        included9Package1: "03 Anúncios (Facebook e Instagram)",
        included10Package1: "30 Dias de Assessoria de Marketing",
        packageLink1: "https://www.goodds.com.br/venda-todos-os-dias",
        bandeiras1: true,
        bandeiraEua1: true,
        bandeiraBr1: true,
        bandeiraEs1: true,
        btnName1: "SAIBA MAIS",
        botaoDegrade: true,
    };
    const dropDuplo2 = {
        packageTitle2: "",
        packageDescription2: "",
        packagePrice2: "",
        packageNews2: "",
        packageParcel2: "",
        packageName2: "",
        included1Package2: "",
        included2Package2: "",
        included3Package2: "",
        included4Package2: "",
        included5Package2: "",
        included6Package2: "",
        included7Package2: "",
        included8Package2: "",
        included9Package2: "",
        included11Package2: "",
        packageLink2: ""
    };
    const dropDuplo3 = {
        packageTitle3: "",
        packageDescription3: "",
        packagePrice3: "",
        packageNews3: "",
        packageParcel3: "",
        packageName3: "",
        included1Package3: "",
        included2Package3: "",
        included3Package3: "",
        included4Package3: "",
        included5Package3: "",
        included6Package3: "",
        included7Package3: "",
        included8Package3: "",
        included9Package3: "",
        included10Package3: "",
        packageLink3: ""
    };


    return (
        <div id="packagesDrop">
            <div className="titlePackagesDrop">
                <h1 id="pacotesDoDropTitle">Soluções de Dropshipping</h1>
            </div>
          <Swiper
              slidesPerView={1}
              autoHeight={true}
              pagination={pagination}
              grabCursor={true}
              modules={[Pagination]}
              id="slidesPackagesDrop"
          >

                <SwiperSlide className="slidesPackagesDrop">
                    <div>
                        <PackagesSection packageData1={dropTrad1} segundoPacote={true} packageData2={dropTrad2} terceiroPacote={true} packageData3={dropTrad3} sectionPackageTitle="" />
                    </div>
                </SwiperSlide>


                  
                <SwiperSlide className="slidesPackagesDrop">
                    <div>
                        <PackagesSection packageData1={dropLatam1} segundoPacote={true} packageData2={dropLatam2} terceiroPacote={true} packageData3={dropLatam3} sectionPackageTitle="" />
                    </div>
                </SwiperSlide>

                  
                  
                {/* <SwiperSlide className="slidesPackagesDrop">
                    <div>
                        <PackagesSection packageData1={dropGlobal1} segundoPacote={true} packageData2={dropGlobal2} terceiroPacote={true} packageData3={dropGlobal3} sectionPackageTitle="" />
                    </div>
                </SwiperSlide> */}

                  
                  
                <SwiperSlide className="slidesPackagesDrop" id="packageDropDuplo">
                    <div>
                        <PackagesSection packageData1={dropDuplo1} segundoPacote={false} packageData2={dropDuplo2} terceiroPacote={false} packageData3={dropDuplo3} sectionPackageTitle="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default PackagesDrop;