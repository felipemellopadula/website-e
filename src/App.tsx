import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import { MainVideo } from "./components/MainVideo";
import { Servicos } from "./components/Servicos";
import { Portfolio } from "./components/Portfolio";
import { Agencia } from "./components/Agencia";
import { Contato } from "./components/Contato";
import "./styles/index.css";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <MainVideo />
      <Servicos />
      <Portfolio />
      <Agencia />
      <Contato />
      <Footer />
    </Router>
  );
}

export default App;
