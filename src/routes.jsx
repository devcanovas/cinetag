import Favoritos from "@/pages/Favoritos";
import Inicio from "@/pages/Inicio";
import Player from "@/pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NaoEncontrada from "./pages/NaoEncontrada";
import PaginaPadrao from "./pages/PaginaPadrao";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path=":id" element={<Player />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
