import Agencia from "./components/Agencia";
import { Header } from "./components/Header";
import { MainVideo } from "./components/MainVideo";
import { Portfolio } from "./components/Portfolio";
import { Servicos } from "./components/Servicos";
import "./styles/index.css";

function App() {
  return (
    <>
      <Header />
      <MainVideo />
      <Servicos />
      <Portfolio />
      <Agencia />
    </>
  );
}

export default App;
