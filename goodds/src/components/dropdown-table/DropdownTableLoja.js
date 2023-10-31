import React, { useState } from 'react';
import styles from './DropdownTable.module.css';
import PackagesIncluded from '../packages-included/PackagesIncluded';
import RiArrowDownSLine from 'remixicon-react/ArrowDownSLineIcon';
import RiCheckFill from 'remixicon-react/CheckFillIcon';
import TableIcon1 from '../../assets/images/tableicon-1.webp';
import TableIcon2 from '../../assets/images/tableicon-2.webp';
import TableIcon3 from '../../assets/images/tableicon-3.webp';
import TableIcon4 from '../../assets/images/tableicon-4.webp';
import TableIcon5 from '../../assets/images/tableicon-5.webp';
import TableIcon6 from '../../assets/images/tableicon-6.webp';


function DropdownTableLoja(props) {
    const table1 = [
        {
            servicePackageTitle: "Integração com AliExpress",
            servicePackageDescription: "Tenha todos os produtos do AliExpress em seu estoque.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Produtos",
            servicePackageDescription: "Quantidade de produtos que você pode cadastrar na sua loja.",
            packageValue1: "Ilimitados",
            packageValue2: "Ilimitados",
        },
        {
            servicePackageTitle: "Hospedagem",
            servicePackageDescription: "Servidor dedicado Cloud com melhor serviço de uptime.",
            packageValue1: "Incluso no mensal",
            packageValue2: "Incluso no mensal",
        },
        {
            servicePackageTitle: "Domínio",
            servicePackageDescription: "Endereço online profissional para o seu projeto.",
            packageValue1: "1 ano incluso",
            packageValue2: "1 ano incluso",
        },
        {
            servicePackageTitle: "Certificado SSL",
            servicePackageDescription: "Todos os projetos contam com SSL, que é um mecanismo de criptografia criado para aumentar a segurança do seu site.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "App para gestão da loja (Android e iOS)",
            servicePackageDescription: "Configure e gerencie facilmente sua loja via App para celular.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Monitore o status de pagamento e envio",
            servicePackageDescription: "Os status de pedidos podem ajudá-lo a tomar atitudes para um pedido específico (por exemplo, decidir se um pedido precisa ser enviado ou reembolsado).",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Opções de produtos",
            servicePackageDescription: "Se você vende produtos com variações (por exemplo, tamanhos e cores diferentes), liste-os como um produto base com opções.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Avisos de estoque baixo",
            servicePackageDescription: "Saiba a quantidade exata de mercadorias prontas para serem vendidas para cada fornecedor AliExpress.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Variações de produto",
            servicePackageDescription: "Adicione variações para produtos que venham com mais de uma opção como tamanho e cor.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Gestão de inventário para opções de produtos",
            servicePackageDescription: "Monitore os níveis de estoque para opções de produtos como tamanho e cor.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Filtre por palavra-chave, preço e categoria",
            servicePackageDescription: "Permita que os clientes encontrem o que procuram rapidamente, acelerando a conversão.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Produtos favoritos",
            servicePackageDescription: "Permita que os clientes criem uma lista de produtos favoritos que eles possam encontrar e comprar facilmente em sua próxima visita.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Contas de E-mail",
            servicePackageDescription: "Transmita profissionalismo com um endereço de email que corresponde ao seu domínio.",
            packageValue1: "Ilimitados",
            packageValue2: "Ilimitados",
        },
        {
            servicePackageTitle: "Google Analytics",
            servicePackageDescription: "Explore a ferramenta de monitoramento e análise de sites mais utilizada no mundo.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Pixel Facebook",
            servicePackageDescription: "Um trecho de código para seu site que permite medir, otimizar e criar públicos para suas campanhas de anúncios.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "CDN CloudFlare",
            servicePackageDescription: "Projetos da Goodds são disponibilizados por meio da CDN Cloudfront da CloudFlare para garantir mais segurança e um carregamento extremamente rápido.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Personalização de Tema",
            servicePackageDescription: "Tenha acesso às personalizações da sua loja e edite a qualquer momento as sessões de navegação.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Acesso Editor HTML/CSS",
            servicePackageDescription: "Obtenha acesso ao editor de códigos do tema para aplicar personalizações, configurações e scripts adicionais.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        }
    ];
    
    const table2 = [
        {
            servicePackageTitle: "Suporte via WhatsApp",
            servicePackageDescription: "Tenha suporte via grupo de WhatsApp com nosso setor de suporte e um gestor dedicado.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Suporte via E-mail",
            servicePackageDescription: "Tire suas dúvidas com nossa equipe de especialistas via canal de e-mail.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Onboarding e gerente de conta",
            servicePackageDescription: "Gerente de contas dedicado para acompanhar, gerir e otimizar os resultados no seu projeto.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        }
    ];
    
    const table3 = [
        {
            servicePackageTitle: "Criação Logo Profissional",
            servicePackageDescription: "A identidade visual do seu projeto criada pela nossa equipe de Design.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Banners Personalizados",
            servicePackageDescription: "Atualizações visuais para seu projeto.",
            packageValue1: "2",
            packageValue2: "3",
        },
        {
            servicePackageTitle: "Layout Personalizado",
            servicePackageDescription: "Tenha o tema da sua loja exclusivo criado pela nossa equipe de especialistas.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        }
    ];
    
    const table4 = [
        {
            servicePackageTitle: "Facebook Shopping",
            servicePackageDescription: "Alcance seus clientes onde eles estão com as lojas do Facebook Shopping.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Instagram Shopping",
            servicePackageDescription: "Aumente a exposição e torne mais fácil para os clientes comprarem com a loja do Instagram.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Google Shopping",
            servicePackageDescription: "Exiba seus produtos direto nas buscas de Shopping do Google.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Bling para Marketplaces",
            servicePackageDescription: "Integração da Loja Virtual com o sistema de ERP Bling (Integração dos Marketplaces não inclusa).",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Venda em Marketplaces",
            servicePackageDescription: "Expanda as vendas participando dos maiores marketplaces do mundo.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        }
    ];
    
    const table5 = [
        {
            servicePackageTitle: "Campanha de Lançamento",
            servicePackageDescription: "Campanha de anúncios e materiais de lançamento criado por nossa equipe de Marketing.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Vales-presentes",
            servicePackageDescription: "Ofereça vales-presente em sua loja.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Cupons Promocionais",
            servicePackageDescription: "Defina códigos de desconto que os clientes poderão digitar na finalização da compra para abater no valor do pedido.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Remarketing com Google Analytics",
            servicePackageDescription: "Exiba anúncios para os visitantes da sua loja em outros sites, lembrando-os de retornarem e fazerem uma compra na sua loja.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Integração com o Mailchimp",
            servicePackageDescription: "Mantenha-se em contato com clientes existentes e potenciais através de e-mails e newsletters promocionais com o Mailchimp.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Visualize carrinhos abandonados",
            servicePackageDescription: "Monitore carrinhos abandonados na sua loja.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Recupere carrinhos abandonados",
            servicePackageDescription: "Envie e-mails de recuperação de carrinho abandonado aos visitantes.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Descontos por volume",
            servicePackageDescription: "Ofereça descontos automaticamente com base na quantidade da encomenda, grupo de clientes ou ambos.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        }
    ];
    
    const table6 = [
        {
            servicePackageTitle: "Indexação direta pelo Google",
            servicePackageDescription: "Deixe sua loja visível para ferramentas de busca.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Campos de SEO para produtos",
            servicePackageDescription: "Determine as palavras-chave e frases que melhor descrevem seus produtos.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        },
        {
            servicePackageTitle: "Esquema de produto incorporado automaticamente",
            servicePackageDescription: "Ofereça informações detalhadas sobre seus produtos em resultados avançados de pesquisa.",
            packageValue1: <RiCheckFill />,
            packageValue2: <RiCheckFill />,
        }
    ];

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <section className={styles.compareTableSection}>
            <h2 onClick={toggleDropdown} className={styles.compareTitle}>
                Compare os Pacotes
                <span>
                    <RiArrowDownSLine  className={`${styles.dropdownArrow} ${isDropdownOpen ? `${styles.open}` : ''}`}/>
                </span>

            </h2>

            {isDropdownOpen && 
                <section>
                    <div id="table1" className={styles.compareContainer}>
                        <div className={styles.tableSlice}>
                            <div className={`${styles.tableRow} ${styles.tableTitle}`}>
                                <div className={`${styles.rowContent} ${styles.itemDescriptionCompare}`}>
                                    <img src={TableIcon1} alt=""/>
                                    <p>Gestão da Loja</p>
                                </div>
                                <div className={`${styles.rowContent} ${styles.itemContains}`}>Start</div>
                                <div className={`${styles.rowContent} ${styles.itemContains}`}>Mega</div>
                            </div>
        
                            {table1.map((item, index) => (
                            <div className={styles.tableRow} key={index} id={`item-${item.id ? item.id : index}`}>
                                <div className={`${styles.rowContent} ${styles.itemDescriptionCompare}`}>
                                    <p>{item.servicePackageTitle}</p>
                                    <p>{item.servicePackageDescription}</p>
                                </div>
                                <div className={`${styles.rowContent} ${styles.itemContains}`}>
                                    {item.packageValue1}
                                </div>
                                <div className={`${styles.rowContent} ${styles.itemContains}`}>
                                    {item.packageValue2}
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
        
                    <div id="table2" className={styles.compareContainer}>
                        <div className={styles.tableSlice}>
                            <div className={`${styles.tableRow} ${styles.tableTitle}`}>
                                <div className={`${styles.rowContent} ${styles.itemDescriptionCompare}`}>
                                    <img src={TableIcon2} alt=""/>
                                    <p>Suporte e Equipe</p>
                                </div>
                            </div>
        
                            {table2.map((item, index) => (
                            <div className={styles.tableRow} key={index} id={`item-${item.id ? item.id : index}`}>
                                <div className={`${styles.rowContent} ${styles.itemDescriptionCompare}`}>
                                    <p>{item.servicePackageTitle}</p>
                                    <p>{item.servicePackageDescription}</p>
                                </div>
                                <div className={`${styles.rowContent} ${styles.itemContains}`}>
                                    {item.packageValue1}
                                </div>
                                <div className={`${styles.rowContent} ${styles.itemContains}`}>
                                    {item.packageValue2}
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
        
                    <div id="table3" className={styles.compareContainer}>
                        <div className={styles.tableSlice}>
                            <div className={`${styles.tableRow} ${styles.tableTitle}`}>
                                <div className={`${styles.rowContent} ${styles.itemDescriptionCompare}`}>
                                    <img src={TableIcon3} alt=""/>
                                    <p>Visual</p>
                                </div>
                            </div>
        
                            {table3.map((item, index) => (
                            <div className={styles.tableRow} key={index} id={`item-${item.id ? item.id : index}`}>
                                <div className={`${styles.rowContent} ${styles.itemDescriptionCompare}`}>
                                    <p>{item.servicePackageTitle}</p>
                                    <p>{item.servicePackageDescription}</p>
                                </div>
                                <div className={`${styles.rowContent} ${styles.itemContains}`}>
                                    {item.packageValue1}
                                </div>
                                <div className={`${styles.rowContent} ${styles.itemContains}`}>
                                    {item.packageValue2}
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
        
                    <div id="table4" className={styles.compareContainer}>
                        <div className={styles.tableSlice}>
                            <div className={`${styles.tableRow} ${styles.tableTitle}`}>
                                <div className={`${styles.rowContent} ${styles.itemDescriptionCompare}`}>
                                    <img src={TableIcon4} alt=""/>
                                    <p>Canais de Venda</p>
                                </div>
                            </div>
        
                            {table4.map((item, index) => (
                            <div className={styles.tableRow} key={index} id={`item-${item.id ? item.id : index}`}>
                                <div className={`${styles.rowContent} ${styles.itemDescriptionCompare}`}>
                                    <p>{item.servicePackageTitle}</p>
                                    <p>{item.servicePackageDescription}</p>
                                </div>
                                <div className={`${styles.rowContent} ${styles.itemContains}`}>
                                    {item.packageValue1}
                                </div>
                                <div className={`${styles.rowContent} ${styles.itemContains}`}>
                                    {item.packageValue2}
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
        
                    <div id="table5" className={styles.compareContainer}>
                        <div className={styles.tableSlice}>
                            <div className={`${styles.tableRow} ${styles.tableTitle}`}>
                                <div className={`${styles.rowContent} ${styles.itemDescriptionCompare}`}>
                                    <img src={TableIcon5} alt=""/>
                                    <p>Marketing</p>
                                </div>
                            </div>
        
                            {table5.map((item, index) => (
                            <div className={styles.tableRow} key={index} id={`item-${item.id ? item.id : index}`}>
                                <div className={`${styles.rowContent} ${styles.itemDescriptionCompare}`}>
                                    <p>{item.servicePackageTitle}</p>
                                    <p>{item.servicePackageDescription}</p>
                                </div>
                                <div className={`${styles.rowContent} ${styles.itemContains}`}>
                                    {item.packageValue1}
                                </div>
                                <div className={`${styles.rowContent} ${styles.itemContains}`}>
                                    {item.packageValue2}
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
        
                    <div id="table6" className={styles.compareContainer}>
                        <div className={styles.tableSlice}>
                            <div className={`${styles.tableRow} ${styles.tableTitle}`}>
                                <div className={`${styles.rowContent} ${styles.itemDescriptionCompare}`}>
                                    <img src={TableIcon6} alt=""/>
                                    <p>SEO</p>
                                </div>
                            </div>
        
                            {table6.map((item, index) => (
                            <div className={styles.tableRow} key={index} id={`item-${item.id ? item.id : index}`}>
                                <div className={`${styles.rowContent} ${styles.itemDescriptionCompare}`}>
                                    <p>{item.servicePackageTitle}</p>
                                    <p>{item.servicePackageDescription}</p>
                                </div>
                                <div className={`${styles.rowContent} ${styles.itemContains}`}>
                                    {item.packageValue1}
                                </div>
                                <div className={`${styles.rowContent} ${styles.itemContains}`}>
                                    {item.packageValue2}
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
        
                </section>
            }

            <PackagesIncluded titleIncludedPackage={props.titleIncluded} />
        </section>
    )
}

export default DropdownTableLoja;