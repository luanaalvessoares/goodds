import React, { useState, useEffect } from 'react';
import styles from "./Contato.module.css";
import RiWhatsappLine from 'remixicon-react/WhatsappLineIcon';
import RiPhoneLine from 'remixicon-react/PhoneLineIcon';
import RiMailSendLine from 'remixicon-react/MailSendLineIcon';
import emailjs from '@emailjs/browser';
import Footer from '../../components/footer/Footer';
import Whatsapp from '../../components/whatsapp/Whatsapp';

function Contato() {
  const whatsappMessage = "https://api.whatsapp.com/send?phone=5511943600303&text=Estou%20na%20p%C3%A1gina%20de%20contato,%20gostaria%20de%20falar%20com%20um%20especialista";

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [message, setMessage] = useState('');
  
    const isFormValid = () => {
      return name.trim() !== '' && email.trim() !== '' && whatsapp.trim() !== '' && message.trim() !== '';
    };

    function sendEmail(e) {
      e.preventDefault();

      const templateParams = {
        from_name: name,
        email: email,
        whatsapp: whatsapp,
        message: message,
      };

      emailjs.send("service_milgu6r", "template_33aut19", templateParams, "hXcGtmPBfpBa4B1jl")
      .then((response) => {
        console.log('Email enviado', response.status, response.text);

        setName('')
        setEmail('')
        setWhatsapp('')
        setMessage('')

        alert('Já recebemos seu contato, em breve um de nossos especialistas entrará em contato. Obrigada!! :)')
      }, (err) => {
        console.log('Email não enviado', err)

        alert('Que pena... não conseguimos receber o seu email.\\n\\nPor favor, tente contato pelo WhatsApp, estamos sempre por lá!')
      })
    }
  
    // const handleEnviar = async () => {
    //   const formData = new FormData();
    //   formData.append("name", nome);
    //   formData.append("email", email);
    //   formData.append("phone", whatsapp);
    //   formData.append("message", mensagem);
    
    //   try {
    //     const response = await fetch("https://goodds.com.br/mail.php", {
    //       method: "POST",
    //       body: formData,
    //     });
    
    //     if (response.ok) {
    //       alert("E-mail enviado com sucesso.");
    //       console.log('Email Enviado');
          
    //     } else {
    //       //alert("Que pena... não conseguimos receber o seu email.\\n\\nPor favor, tente contato pelo WhatsApp, estamos sempre por lá!");
    //       console.log('Email não enviado');
    //     }
    //   } catch (error) {
    //      // alert("Que pena... não conseguimos receber o seu email.\\n\\nPor favor, tente contato pelo WhatsApp, estamos sempre por lá!");
    //       console.log(error, 'Erro ao tentar enviar email');
    //   }
    // };


    // // Função de manipulação do clique
    //   const handleClick = (e) => {

    //     // Chamar a função de rastreamento de conversão
    //     if (window.gtag_report_conversion) {
    //     window.gtag_report_conversion(whatsappMessage);
    //     } else {
    //     console.warn("gtag_report_conversion não está definido.");
    //     }

    //     // Redirecionar após um curto delay para garantir que o evento de conversão foi enviado
    //     setTimeout(() => {
    //     window.open(whatsappMessage, '_blank');
    //     }, 500); // Ajuste este delay conforme necessário
    // };  onClick={handleClick}

    return (

        <div>
            <div className={styles.contactPage}>
                <h1>Entre em contato conosco</h1>

                <form className={styles.contactModalForm} onSubmit={sendEmail}>
                    <div className={styles.contactModalInfo}>
                        <input
                        className={`${styles.contactModalInput} titleColor`}
                        placeholder="Nome completo ou empresa"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        />
                    </div>
                    <div className={styles.contactModalInfo}>
                        <input
                        className={`${styles.contactModalInput} titleColor`}
                        placeholder="Seu melhor email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                    </div>
                    <div className={styles.contactModalInfo}>
                        <input
                        className={`${styles.contactModalInput} titleColor`}
                        placeholder="WhatsApp ou seu número com código de área ou DDD"
                        type="number"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        required
                        />
                    </div>
                    <div className={styles.contactModalInfo}>
                        <textarea
                        className={`${styles.contactModalTextarea} titleColor`}
                        placeholder="Escreva sua mensagem"
                        value={message}
                        rows={6}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        />
                    </div>
                    <button className={`${styles.contactModalSubmit} ${!isFormValid() ? `${styles.buttonDisabled}` : '' }`} disabled={!isFormValid()}>Enviar</button>
                </form>

                <div className={styles.gridContacts}>
                    <p>
                        <span><RiPhoneLine /></span>
                        (11) 5225-8173
                    </p>
                    
                    <a href={whatsappMessage} rel="noreferrer" target="_blank">
                        <p>
                            <span><RiWhatsappLine /></span>
                            (11) 94360-0303
                        </p>
                    </a>
                        
                    <a href="mailto:contato@goodds.com.br">
                        <p>
                            <span><RiMailSendLine /></span>
                            contato@goodds.com.br
                        </p>
                    </a>
                </div>
            </div>

            <Whatsapp whatsappMessage={whatsappMessage} />
            <Footer />
        </div>
    )
}

export default Contato;