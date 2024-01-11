import { Link } from "react-router-dom";
import useFavoritosContext from "../../hooks/useFavoritosContext";
import styles from "./Card.module.scss";
import iconeFavoritar from "/imagens/favorite-outline.png";
import iconeDesfavoritar from "/imagens/favorite.png";

export default function Card({ id, titulo, capa }) {
  const { favorito, adicionarFavorito } = useFavoritosContext();
  const ehFavorito = favorito.some((fav) => fav.id === id);
  const icone = ehFavorito ? iconeDesfavoritar : iconeFavoritar;
  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt={titulo} />
        <h2>{titulo}</h2>
      </Link>

      <img
        src={icone}
        alt="Favoritar filme"
        className={styles.favoritar}
        onClick={() => {
          adicionarFavorito({ id, titulo, capa });
        }}
      />
    </div>
  );
}
