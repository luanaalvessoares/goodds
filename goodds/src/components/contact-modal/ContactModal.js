import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // ou o seletor que representa o elemento raiz do seu aplicativo

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ContactModal = ({ isOpen, onRequestClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullMessage = `Nome/Empresa: ${name}\nEmail: ${email}\nWhatsApp: ${whatsapp}\nMensagem: ${message}`;
    // Aqui você pode adicionar a lógica para enviar um email para 'contato@goodds.com.br' com os detalhes preenchidos.
    console.log(fullMessage);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2>Fale com um especialista</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome/Empresa:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>WhatsApp:</label>
          <input
            type="text"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
        </div>
        <div>
          <label>Sua mensagem:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      <p>
        Se preferir, pode falar por WhatsApp:{' '}
        <a
          href="https://api.whatsapp.com/send?phone=5511943600303"
          target="_blank"
          rel="noopener noreferrer"
        >
          5511943600303
        </a>
      </p>
    </Modal>
  );
};

export default ContactModal;
