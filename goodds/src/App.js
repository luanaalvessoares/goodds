import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Header from './components/header/Header';
import RoutesGoodds from './RoutesGoodds';
import 'normalize.css';
import './App.css';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  let location = useLocation();

  useEffect(() => {
    const handlePopState = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [location.pathname]);


  return (
    <div>
      {(location.pathname !== '/venda-todos-os-dias' && location.pathname !== '/gratuito') && <Header />}
      <RoutesGoodds />
    </div>
  );
}

export default App;
