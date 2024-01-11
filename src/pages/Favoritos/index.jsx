import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Titulo from "@/components/Titulo";
import { FavoritosContext } from "@/contexts/Favoritos";
import { useContext } from "react";
import styles from "./Favoritos.module.scss";

export default function Favoritos() {
  const { favorito } = useContext(FavoritosContext);

  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => (
          <Card {...fav} key={fav.id} />
        ))}
      </section>
    </>
  );
}
