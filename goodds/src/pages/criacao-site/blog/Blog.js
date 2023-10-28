import React from "react";
import './Blog.css'
import Whatsapp from "../../../components/whatsapp/Whatsapp";

function Blog() {
    return (
        <Whatsapp whatsappMessage="https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista%20em%20Blog"/>
    )
}

export default Blog;