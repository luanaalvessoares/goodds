import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/home/Home'
import LojaVirtual from './pages/criacao-loja-virtual/loja-virtual/LojaVirtual'
import DropshippingTradicional from './pages/criacao-loja-virtual/dropshipping-tradicional/DropshippingTradicional'
import DropshippingGlobal from './pages/criacao-loja-virtual/dropshipping-global/DropshippingGlobal';
import DropshippingLatam from './pages/criacao-loja-virtual/dropshipping-latam/DropshippingLatam';
import DropshippingPrintOnDemand from './pages/criacao-loja-virtual/dropshipping-print-on-demand/DropshippingPrintOnDemand';
import WebsiteInstitucional from './pages/criacao-site/website-institucional/WebsiteInstitucional'
import LandingPage from './pages/criacao-site/landing-page/LandingPage'
import Blog from './pages/criacao-site/blog/Blog'
import MarketingLojaVirtual from './pages/marketing/marketing-loja-virtual/MarketingLojaVirtual'
import MarketingLojaDropshipping from './pages/marketing/marketing-loja-dropshipping/MarketingLojaDropshipping'
import PacoteLancamentoLoja from './pages/servicos-extras/pacote-lancamento-loja/PacoteLancamentoLoja'
import MineracaoProdutosDropshipping from './pages/servicos-extras/mineracao-produtos-dropshipping/MineracaoProdutosDropshipping'
import Consultorias from './pages/servicos-extras/consultorias/Consultorias'
import PostsInstagram from './pages/servicos-extras/posts-instagram/PostsInstagram'
import CriacaoLogo from './pages/servicos-extras/criacao-logo/CriacaoLogo'
import BannersLoja from './pages/servicos-extras/banners-loja/BannersLoja'
import ArtesAnuncios from './pages/servicos-extras/artes-anuncios/ArtesAnuncios'
import VideosCurtosReels from './pages/servicos-extras/videos-curtos-reels/VideosCurtosReels'
import VendaTodosOsDias from './pages/venda-todos-os-dias/VendaTodosOsDias'

const RoutesGoodds = () => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
    
    return (
        <AnimatePresence mode="out-in">
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}><Home /></motion.div>}></Route>
                <Route path="/loja-virtual" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}><LojaVirtual /></motion.div>}></Route>
                <Route path="/dropshipping" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}><DropshippingTradicional /></motion.div>}></Route>
                <Route path="/dropshipping-global" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}><DropshippingGlobal /></motion.div>}></Route>
                <Route path="/dropshipping-latam" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}><DropshippingLatam /></motion.div>}></Route>
                <Route path="/dropshipping-print-on-demand" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}><DropshippingPrintOnDemand /></motion.div>}></Route>
                <Route path="/website-institucional" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}><WebsiteInstitucional /></motion.div>}></Route>
                <Route path="/landing-page" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}><LandingPage /></motion.div>}></Route>
                <Route path="/blog" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}><Blog /></motion.div>}></Route>
                <Route path="/marketing-loja-virtual" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}><MarketingLojaVirtual /></motion.div>}></Route>
                <Route path="/marketing-loja-dropshipping" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}><MarketingLojaDropshipping /></motion.div>}></Route>
                <Route path="/pacote-lancamento-loja" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}><PacoteLancamentoLoja /></motion.div>}></Route>
                <Route path="/mineracao-produtos-dropshipping" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}><MineracaoProdutosDropshipping /></motion.div>}></Route>
                <Route path="/consultorias" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}><Consultorias /></motion.div>}></Route>
                <Route path="/posts-instagram" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}><PostsInstagram /></motion.div>}></Route>
                <Route path="/criacao-logo" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}><CriacaoLogo /></motion.div>}></Route>
                <Route path="/banners-loja" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}><BannersLoja /></motion.div>}></Route>
                <Route path="/artes-anuncios" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}><ArtesAnuncios /></motion.div>}></Route>
                <Route path="/videos-curtos-reels" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}><VideosCurtosReels /></motion.div>}></Route>
                <Route path="/venda-todos-os-dias" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}><VendaTodosOsDias /></motion.div>}></Route>
            </Routes>
        </AnimatePresence>

    )

}

export default RoutesGoodds;