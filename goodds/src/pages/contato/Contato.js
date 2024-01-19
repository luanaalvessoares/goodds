import React, { useState, useEffect } from 'react';
import styles from "./Contato.module.css";
import RiWhatsappLine from 'remixicon-react/WhatsappLineIcon';
import RiPhoneLine from 'remixicon-react/PhoneLineIcon';
import RiMailSendLine from 'remixicon-react/MailSendLineIcon';
import Swal from 'sweetalert2';
import Footer from '../../components/footer/Footer';
import Whatsapp from '../../components/whatsapp/Whatsapp';

function Contato() {
  const whatsappMessage = "https://api.whatsapp.com/send?phone=5511943600303&text=Estou%20na%20p%C3%A1gina%20de%20contato,%20gostaria%20de%20falar%20com%20um%20especialista";

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [mensagem, setMensagem] = useState('');
  
    const isFormValid = () => {
      return nome.trim() !== '' && email.trim() !== '' && whatsapp.trim() !== '' && mensagem.trim() !== '';
    };
  
    const handleNomeChange = (e) => {
      setNome(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleWhatsappChange = (e) => {
      setWhatsapp(e.target.value);
    };
  
    const handleMensagemChange = (e) => {
      setMensagem(e.target.value);
    };
  
    const handleEnviar = async () => {
      const formData = new FormData();
      formData.append("name", nome);
      formData.append("email", email);
      formData.append("phone", whatsapp);
      formData.append("message", mensagem);
    
      try {
        const response = await fetch("https://goodds.com.br/mail.php", {
          method: "POST",
          body: formData,
        });
    
        if (response.ok) {
          Swal.fire({
            title: 'Recebemos seu email!',
            text: 'Logo nossa equipe entrará em contato.',
            showConfirmButton: true,
            confirmButtonColor: '#298C7D',
          }).then(
            alert("E-mail enviado com sucesso.")
          );
          
        } else {
          Swal.fire({
            title: 'Que pena... não conseguimos receber o seu email.',
            text: 'Por favor, tente contato pelo WhatsApp, estamos sempre por lá!',
            showConfirmButton: true,
            confirmButtonColor: '#298C7D',
          }).then(
            alert("Que pena... não conseguimos receber o seu email.\\n\\nPor favor, tente contato pelo WhatsApp, estamos sempre por lá!")
          );
        }
      } catch (error) {
        Swal.fire({
          title: 'Que pena... não conseguimos receber o seu email.',
          text: 'Por favor, tente contato pelo WhatsApp, estamos sempre por lá!',
          showConfirmButton: true,
          confirmButtonColor: '#298C7D',
        }).then(
            alert("Que pena... não conseguimos receber o seu email.\\n\\nPor favor, tente contato pelo WhatsApp, estamos sempre por lá!")
        );
      }
    };


    return (

        <div>
            <div className={styles.contactPage}>
                <h2>Entre em contato conosco</h2>

                <form className={styles.contactModalForm}>
                    <div className={styles.contactModalInfo}>
                        <input
                        className={`${styles.contactModalInput} titleColor`}
                        placeholder="Nome completo ou empresa"
                        type="text"
                        value={nome}
                        onChange={handleNomeChange}
                        required
                        />
                    </div>
                    <div className={styles.contactModalInfo}>
                        <input
                        className={`${styles.contactModalInput} titleColor`}
                        placeholder="Seu melhor email"
                        type="text"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        />
                    </div>
                    <div className={styles.contactModalInfo}>
                        <input
                        className={`${styles.contactModalInput} titleColor`}
                        placeholder="WhatsApp ou seu número com código de área ou DDD"
                        type="number"
                        value={whatsapp}
                        onChange={handleWhatsappChange}
                        required
                        />
                    </div>
                    <div className={styles.contactModalInfo}>
                        <textarea
                        className={`${styles.contactModalTextarea} titleColor`}
                        placeholder="Escreva sua mensagem"
                        value={mensagem}
                        rows={6}
                        onChange={handleMensagemChange}
                        required
                        />
                    </div>
                    <button className={`${styles.contactModalSubmit} ${!isFormValid() ? `${styles.buttonDisabled}` : '' }`} disabled={!isFormValid()} onClick={handleEnviar}>Enviar</button>
                </form>

                <div className={styles.gridContacts}>
                    <p>
                        <span><RiPhoneLine /></span>
                        (11) 5225-8173
                    </p>
                    
                    <a href="https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista" target="_blank">
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