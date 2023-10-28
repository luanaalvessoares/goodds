import React from 'react';
import './BaseSupport.css'
import baseicon from '../../assets/images/baseicon.webp';
import supporticon from '../../assets/images/supporticon.webp';
import ArrowTransition from '../elements/arrow-transition/ArrowTransition';

function BaseSupport() {
    return (
        <div className="baseSupport">
            <section className="containerTwoColumns">
                <div className="containerChild baseSupportContent">
                    <div className="baseSupportIcon">
                        <img src={supporticon} alt=""/>
                    </div>
                    <div className="baseSupportTitle">
                        <h5>Suporte com Especialistas</h5>
                    </div>
                    <div className="baseSupportText">
                        <p>Tem alguma dúvida? Não se preocupe. Conte sempre com nossa equipe de especialistas em nossos canais de atendimento. Estamos prontos para te atender.</p>
                    </div>
                    <div className="baseSupportLink">
                        <ArrowTransition href="https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista" text="Central de Ajuda"/>
                    </div>
                </div>

                <span className="baseSupportSeparator"></span>
                
                <div className="containerChild baseSupportContent">                    
                    <div className="baseSupportIcon">
                        <img src={baseicon} alt=""/>
                    </div>
                    <div className="baseSupportTitle">
                        <h5>Base de Conhecimento</h5>
                    </div>
                    <div className="baseSupportText">
                        <p>O cenário promete um mercado cada vez mais concorrido. Investir no seu conhecimento é essencial para se manter relevante e garantir a competitividade da sua empresa.</p>
                    </div>
                    <div className="baseSupportLink">
                        <ArrowTransition href="https://www.youtube.com/@Goodds" text="Obter Conhecimento"/>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default BaseSupport;