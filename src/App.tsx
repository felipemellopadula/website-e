import { AboutUs } from "./components/AboutUs";
import { Header } from "./components/Header";
import { MainVideo } from "./components/MainVideo";
import { Portfolio } from "./components/Portfolio";
import "./styles/index.css";

function App() {
  return (
    <>
      <Header />
      <MainVideo />
      <AboutUs />
      <Portfolio />
    </>
  );
}

export default App;
