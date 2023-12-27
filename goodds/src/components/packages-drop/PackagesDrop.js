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
        1: 'Latam',
        2: 'Global',
        3: '2 em 1',
    };

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"><span class="inner-span">' + paginationTexts[index] + '</span></span>';
        },
    };


    const dropTrad1 = {
        packageTitle1: "Tradicional Super",
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
        included11Package1: "Anúncios (Facebook e Instagram)",
        included12Package1: "30 Dias de Assessoria de Marketing",
        packageLink1: "https://dropshipping-goodds.catalog.yampi.io/desenvolvimento-de-loja-dropshipping-megaa/p"
    };
    const dropTrad2 = {
        packageTitle2: "Tradicional Mega",
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
        included11Package2: "30 Dias de Assessoria de Marketing",
        packageLink2: "https://dropshipping-goodds.catalog.yampi.io/desenvolvimento-de-loja-dropshipping-start/p"
    };
    const dropTrad3 = {
        packageTitle3: "Tradicional Especial",
        packageDescription3: "A solução mais completa e mais vendida, inclui tudo do pacote Mega + 30 produtos extras + assessoria de marketing dedidacada e 3 anúncios.",
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
        packageLink3: "https://dropshipping-goodds.catalog.yampi.io/desenvolvimento-de-loja-dropshipping-megaa/p"
    };

    const dropLatam1 = {
        packageTitle1: "Latam Super",
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
        included11Package1: "Anúncios (Facebook e Instagram)",
        included12Package1: "30 Dias de Assessoria de Marketing",
        packageLink1: "https://dropshipping-goodds.catalog.yampi.io/desenvolvimento-de-loja-dropshipping-megaa/p"
    };
    const dropLatam2 = {
        packageTitle2: "Latam Mega",
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
        included11Package2: "30 Dias de Assessoria de Marketing",
        packageLink2: "https://dropshipping-goodds.catalog.yampi.io/desenvolvimento-de-loja-dropshipping-start/p"
    };
    const dropLatam3 = {
        packageTitle3: "Latam Especial",
        packageDescription3: "A solução mais completa e mais vendida, inclui tudo do pacote Mega + 30 produtos extras + assessoria de marketing dedidacada e 3 anúncios.",
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
        packageLink3: "https://dropshipping-goodds.catalog.yampi.io/desenvolvimento-de-loja-dropshipping-megaa/p"
    };

    const dropGlobal1 = {
        packageTitle1: "Global Super",
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
        included11Package1: "Anúncios (Facebook e Instagram)",
        included12Package1: "30 Dias de Assessoria de Marketing",
        packageLink1: "https://dropshipping-goodds.catalog.yampi.io/desenvolvimento-de-loja-dropshipping-megaa/p"
    };
    const dropGlobal2 = {
        packageTitle2: "Global Mega",
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
        included11Package2: "30 Dias de Assessoria de Marketing",
        packageLink2: "https://dropshipping-goodds.catalog.yampi.io/desenvolvimento-de-loja-dropshipping-start/p"
    };
    const dropGlobal3 = {
        packageTitle3: "Global Especial",
        packageDescription3: "A solução mais completa e mais vendida, inclui tudo do pacote Mega + 30 produtos extras + assessoria de marketing dedidacada e 3 anúncios.",
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
        packageLink3: "https://dropshipping-goodds.catalog.yampi.io/desenvolvimento-de-loja-dropshipping-megaa/p"
    };

    const dropDuplo1 = {
        packageTitle1: "2 em 1 Super",
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
        included11Package1: "Anúncios (Facebook e Instagram)",
        included12Package1: "30 Dias de Assessoria de Marketing",
        packageLink1: "https://dropshipping-goodds.catalog.yampi.io/desenvolvimento-de-loja-dropshipping-megaa/p"
    };
    const dropDuplo2 = {
        packageTitle2: "2 em 1 Mega",
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
        included11Package2: "30 Dias de Assessoria de Marketing",
        packageLink2: "https://dropshipping-goodds.catalog.yampi.io/desenvolvimento-de-loja-dropshipping-start/p"
    };
    const dropDuplo3 = {
        packageTitle3: "2 em 1 Especial",
        packageDescription3: "A solução mais completa e mais vendida, inclui tudo do pacote Mega + 30 produtos extras + assessoria de marketing dedidacada e 3 anúncios.",
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
        packageLink3: "https://dropshipping-goodds.catalog.yampi.io/desenvolvimento-de-loja-dropshipping-megaa/p"
    };


    return (
        <div id="packagesDrop">
            <div className="titlePackagesDrop">
                <h1>Soluções de Dropshipping</h1>
            </div>
          <Swiper
              initialSlide={7}
              loop={true}
              slidesPerView={1}
              pagination={pagination}
              autoplay={{ delay: 8000 }}
              grabCursor={true}
              modules={[ Autoplay, Pagination]}
              id="slidesPackagesDrop"
          >

                <SwiperSlide className="slidesPackagesDrop">
                    <div>
                        <PackagesSection packageData1={dropTrad1} packageData2={dropTrad2} terceiroPacote={true} packageData3={dropTrad3} sectionPackageTitle="" />
                    </div>
                </SwiperSlide>

                  
                <SwiperSlide className="slidesPackagesDrop">
                    <div>
                        <PackagesSection packageData1={dropLatam1} packageData2={dropLatam2} terceiroPacote={true} packageData3={dropLatam3} sectionPackageTitle="" />
                    </div>
                </SwiperSlide>

                  
                  
                <SwiperSlide className="slidesPackagesDrop">
                    <div>
                        <PackagesSection packageData1={dropGlobal1} packageData2={dropGlobal2} terceiroPacote={true} packageData3={dropGlobal3} sectionPackageTitle="" />
                    </div>
                </SwiperSlide>

                  
                  
                <SwiperSlide className="slidesPackagesDrop">
                    <div>
                        <PackagesSection packageData1={dropDuplo1} packageData2={dropDuplo2} terceiroPacote={true} packageData3={dropDuplo3} sectionPackageTitle="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default PackagesDrop;