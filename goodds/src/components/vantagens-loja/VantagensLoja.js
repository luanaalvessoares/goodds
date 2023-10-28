import React from 'react';
import '../reusables-styles/ContainerTwoColumns.css';
import './VantagensLoja.css'

const VantagensLoja = (props) => {
    const {
        vantagemTitle,
        vantagemTitle1,
        vantagemSubtitle1,
        vantagemTitle2,
        vantagemSubtitle2,
        vantagemTitle3,
        vantagemSubtitle3,
        vantagemTitle4,
        vantagemSubtitle4,
    } = props.vantagemData;

    return (
        <section className="vantagensLojaContainer">
            <div className="containerTwoColumnsDefault">
                <div className="containerChildTwoColumnsDefault">
                    <img src={props.image} className="imageTwoColumnsDefault vantagensLojaImage" alt=""/>
                </div>

                <div className="containerChildTwoColumnsDefault">
                    <div className="vantagensContent">
                        <h2 className="vantagensTitle">{vantagemTitle ? vantagemTitle : 'Vantagens do nosso Dropshipping'}</h2>
                        <div className="vantagensDescription">
                            <div>
                                <h3>{vantagemTitle1 ? vantagemTitle1 : 'Loja de alta conversão'}</h3>
                                <p>{vantagemSubtitle1 ? vantagemSubtitle1 : 'Criamos o layout, os banners e o logo. Integramos a loja com os meios de pagamentos, redes sociais e fornecedores.'}</p>
                            </div>
                            
                            <div>
                                <h3>{vantagemTitle2 ? vantagemTitle2 : 'Campanhas Patrocinadas'}</h3>
                                <p>{vantagemSubtitle2 ? vantagemSubtitle2 : 'Disponibilizamos uma equipe especializada em conversão para criar e gerenciar as campanhas para sua loja.'}</p>
                            </div>
                            
                            <div>
                                <h3>{vantagemTitle3 ? vantagemTitle3 : 'Desenvolvimento da logomarca'}</h3>
                                <p>{vantagemSubtitle3 ? vantagemSubtitle3 : 'Ainda não tem marca? Nossa equipe de design te auxilia na escolha do nome e também faz a criação artística da sua logo.'}</p>
                            </div>
                            
                            <div>
                                <h3>{vantagemTitle4 ? vantagemTitle4 : 'Melhores Fornecedores'}</h3>
                                <p>{vantagemSubtitle4 ? vantagemSubtitle4 : 'Todas as lojas são entregues já integradas com milhares de fornecedores de dentro e de fora do país.'}</p>
                            </div>

                            {vantagemTitle1 ? null : (
                            <div>
                                <h3>Variedades de nichos</h3>
                                <p>Os fornecedores disponibilizam milhares de produtos. A loja é ilimitada e você pode oferecer aos seus clientes, quantos produtos quiser.</p>
                            </div>                                
                            )}

                            {vantagemTitle1 ? null : (
                            <div>
                                <h3>Mineração de produtos</h3>
                                <p>Possuímos um pacote completo que inclui a mineração e o cadastro de produtos, selecionamos cada um manualmente para garantir a qualidade dos produtos e um serviço exclusivo.</p>
                            </div>                                
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VantagensLoja;