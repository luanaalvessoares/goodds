import React, { useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/header/Header';
import RoutesGoodds from './RoutesGoodds';
import 'normalize.css';
import './App.css';
import { useBeforeRender } from './useBeforeRender';

function App() {
  useBeforeRender(() => {
    window.addEventListener("error", (e) => {
      if (e) {
        const resizeObserverErrDiv = document.getElementById(
          "webpack-dev-server-client-overlay-div",
        );
        const resizeObserverErr = document.getElementById(
          "webpack-dev-server-client-overlay",
        );
        if (resizeObserverErr)
          resizeObserverErr.className = "hide-resize-observer";
        if (resizeObserverErrDiv)
          resizeObserverErrDiv.className = "hide-resize-observer";
      }
    });
  }, []);

  return (
    <Router>
      <Header />
      <RoutesGoodds />
    </Router>
  );
}

export default App;
