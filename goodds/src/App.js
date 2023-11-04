import React, { useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/header/Header';
import RoutesGoodds from './RoutesGoodds';
import 'normalize.css';
import './App.css';
import { useBeforeRender } from './useBeforeRender';

function App() {
  return (
    <Router>
      <Header />
      <RoutesGoodds />
    </Router>
  );
}

export default App;
