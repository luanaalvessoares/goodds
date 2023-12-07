import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styles from './ContactModal.module.css';
import RiCloseLine from 'remixicon-react/CloseLineIcon';
import RiWhatsappLine from 'remixicon-react/WhatsappLineIcon';
import Swal from 'sweetalert2';
import { motion } from "framer-motion";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
  },
};

Modal.setAppElement('#root');

function ContactModal({ isOpen, onRequestClose }) {
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
      const response = await fetch("https://shopifygoodds.com.br/sendmail.php", {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        Swal.fire({
          title: 'Recebemos seu email!',
          text: 'Logo nossa equipe entrará em contato.',
          showConfirmButton: true,
          confirmButtonColor: '#298C7D',
        }).then((result) => {
          if (result.isConfirmed) {
            onRequestClose();
          }
        });
        console.log("E-mail enviado com sucesso.");
      } else {
        Swal.fire({
          title: 'Que pena... não conseguimos receber o seu email.',
          text: 'Por favor, tente contato pelo WhatsApp, estamos sempre por lá!',
          showConfirmButton: true,
          confirmButtonColor: '#298C7D',
        }).then((result) => {
          if (result.isConfirmed) {
            onRequestClose();
          }
        });
        console.error("Erro ao enviar o e-mail.");
      }
    } catch (error) {
      Swal.fire({
        title: 'Que pena... não conseguimos receber o seu email.',
        text: 'Por favor, tente contato pelo WhatsApp, estamos sempre por lá!',
        showConfirmButton: true,
        confirmButtonColor: '#298C7D',
      }).then((result) => {
        if (result.isConfirmed) {
          onRequestClose();
        }
      });
      console.error("Erro na requisição:", error);
    }
  };
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >

      <motion.div 
        className={styles.contactModalContainer}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >

        <button className={styles.contactModalClose} onClick={onRequestClose}><RiCloseLine/></button>

        <h2>Fale com um especialista</h2>

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

        <div className={styles.contactModalWhatsapp}>
          <a href="https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista" target="_blank" rel="noreferrer">
            <span><RiWhatsappLine /></span> Se preferir, clique aqui para falar no WhatsApp
          </a>
        </div>
      </motion.div>

    </Modal>
  );
}

export default ContactModal;
