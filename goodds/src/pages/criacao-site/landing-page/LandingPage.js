import React from "react";
import './LandingPage.css'
import Whatsapp from "../../../components/whatsapp/Whatsapp";

function LandingPage() {
    return (
        <Whatsapp whatsappMessage="https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista%20em%20Landing%20Page"/>
    )
}

export default LandingPage;