// App.tsx
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { PortfolioItemPage } from "./components/PortfolioItemPage";
import Home from "./components/Home"; // Importando o componente Home

import "./styles/index.css";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />{" "}
        {/* Rota para a página principal */}
        <Route path="/portfolio/:itemId" element={<PortfolioItemPage />} />{" "}
        {/* Rota para itens do portfólio */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
