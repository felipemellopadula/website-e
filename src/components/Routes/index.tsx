// Routes.tsx
import { Route, Routes } from "react-router-dom";
import { MainVideo } from "../MainVideo";
import { Servicos } from "../Servicos";
import { Portfolio } from "../Portfolio";
import { Agencia } from "../Agencia";
import { Contato } from "../Contato";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainVideo />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/trabalhos" element={<Portfolio />} />
      <Route path="/agencia" element={<Agencia />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
};

export default AppRoutes;
