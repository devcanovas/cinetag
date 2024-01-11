import styles from "./Card.module.scss";
import iconeFavoritar from "/imagens/favorite-outline.png"

export default function Card({ id, titulo, capa }) {
  return (
    <div className={styles.container}>
      <img src={capa} alt={titulo} />
      <h2>{titulo}</h2>
      <img
        src={iconeFavoritar}
        alt="Favoritar filme"
        className={styles.favoritar}
      />
    </div>
  );
}
