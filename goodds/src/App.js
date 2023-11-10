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

  return (
    <div>
      {location.pathname !== '/venda-todos-os-dias' && <Header />}
      <RoutesGoodds />
    </div>
  );
}

export default App;
