import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "@/pages/Inicio";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}
