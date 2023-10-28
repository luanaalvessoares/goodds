import React from "react";
import ImageBackground from "../../components/image-background/ImageBackground";
import Footer from '../../components/footer/Footer';
import Whatsapp from "../../components/whatsapp/Whatsapp";

function Home() {
    return (
        <div id="home">
            <ImageBackground isVideo="true" title="Criamos seu E-commerce" description="Somos a Primeira Agência Especializada em Dropshipping do Brasil"/>
            <Footer />
            <Whatsapp whatsappMessage="https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista%20em%20E-commerce"/>
        </div>
    )
}

export default Home;