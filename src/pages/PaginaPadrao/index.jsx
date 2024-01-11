import styles from "./PaginaPadrao.module.scss";
import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";
import Container from "@/components/Container";
import FavoritosProvider from "@/contexts/Favoritos";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao() {
  return (
    <main>
      <Cabecalho />
      <FavoritosProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritosProvider>
      <Rodape />
    </main>
  );
}
