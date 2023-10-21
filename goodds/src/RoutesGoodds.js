import React from 'react';
import { Route, Routes } from 'react-router-dom';
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

const RoutesGoodds = () => (
    <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/loja-virtual" element={<LojaVirtual />}></Route>
        <Route path="/dropshipping" element={<DropshippingTradicional />}></Route>
        <Route path="/dropshipping-global" element={<DropshippingGlobal />}></Route>
        <Route path="/dropshipping-latam" element={<DropshippingLatam />}></Route>
        <Route path="/dropshipping-print-on-demand" element={<DropshippingPrintOnDemand />}></Route>
        <Route path="/website-institucional" element={<WebsiteInstitucional />}></Route>
        <Route path="/landing-page" element={<LandingPage />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/marketing-loja-virtual" element={<MarketingLojaVirtual />}></Route>
        <Route path="/marketing-loja-dropshipping" element={<MarketingLojaDropshipping />}></Route>
        <Route path="/pacote-lancamento-loja" element={<PacoteLancamentoLoja />}></Route>
        <Route path="/mineracao-produtos-dropshipping" element={<MineracaoProdutosDropshipping />}></Route>
        <Route path="/consultorias" element={<Consultorias />}></Route>
        <Route path="/posts-instagram" element={<PostsInstagram />}></Route>
        <Route path="/criacao-logo" element={<CriacaoLogo />}></Route>
        <Route path="/banners-loja" element={<BannersLoja />}></Route>
        <Route path="/artes-anuncios" element={<ArtesAnuncios />}></Route>
        <Route path="/videos-curtos-reels" element={<VideosCurtosReels />}></Route>
    </Routes>
)

export default RoutesGoodds;