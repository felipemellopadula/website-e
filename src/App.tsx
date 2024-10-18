// App.tsx
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // Usando HashRouter para rolagem suave
import { Header } from "./components/Header";
import { MainVideo } from "./components/MainVideo";
import { Servicos } from "./components/Servicos";
import { Portfolio } from "./components/Portfolio";
import { Agencia } from "./components/Agencia";
import { Contato } from "./components/Contato";
import { Footer } from "./components/Footer";
import { PortfolioItemPage } from "./components/PortfolioItemPage"; // Importando a página do item do portfólio

import "./styles/index.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainVideo />
              <div id="servicos">
                <Servicos />
              </div>
              <div id="portfolio">
                <Portfolio />
              </div>
              <div id="agencia">
                <Agencia />
              </div>
              <div id="contato">
                <Contato />
              </div>
            </>
          }
        />

        {/* Rota para PortfolioItemPage, apenas renderizando Header, PortfolioItemPage e Footer */}
        <Route
          path="/portfolio/:itemId"
          element={
            <>
              <Header />
              <PortfolioItemPage />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
