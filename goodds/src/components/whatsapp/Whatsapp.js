import React from 'react';

function Whatsapp({whatsappMessage}) {
    return (
        <div>
            <link rel="stylesheet" href="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-button.css" />
            <a id="robbu-whatsapp-button" target="_blank" rel="noreferrer" href={whatsappMessage}>
                <img src="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-icon.svg" alt="" />
            </a>            
        </div>
    )
}

export default Whatsapp;