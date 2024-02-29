import React from 'react';

function Whatsapp({whatsappMessage}) {
    // Função de manipulação do clique
    const handleClick = (e) => {

        // Chamar a função de rastreamento de conversão
        if (window.gtag_report_conversion) {
        window.gtag_report_conversion(whatsappMessage);
        } else {
        console.warn("gtag_report_conversion não está definido.");
        }

        // Redirecionar após um curto delay para garantir que o evento de conversão foi enviado
        setTimeout(() => {
        window.open(whatsappMessage, '_blank');
        }, 500); // Ajuste este delay conforme necessário
    };

    

    return (
        <div>
            <link rel="stylesheet" href="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-button.css" />
            <a id="robbu-whatsapp-button" target="_blank" rel="noreferrer" href={whatsappMessage} onClick={handleClick}>
                <img src="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-icon.svg" alt="" />
            </a>            
        </div>
    )
}

export default Whatsapp;