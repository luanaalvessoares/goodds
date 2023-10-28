import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/header/Header';
import RoutesGoodds from './RoutesGoodds';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import 'normalize.css';
import './App.css';

function App() {
  return (
    <Router>
      <TransitionGroup>
        <CSSTransition
          key={window.location.key}
          classNames="fade"
          timeout={300}>
            <Header />
            <RoutesGoodds />
          </CSSTransition>
        </TransitionGroup>
    </Router>
  );
}

export default App;
