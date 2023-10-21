import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesGoodds from './RoutesGoodds';
import 'normalize.css';
import './App.css'

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
          <RoutesGoodds />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
