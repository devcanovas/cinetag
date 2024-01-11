import Banner from "@/components/Banner";
import Titulo from "@/components/Titulo";
import styles from "./Player.module.scss";
import { useParams } from "react-router-dom";
import videos from "@/mocks/db.json";
import NaoEncontrada from "../NaoEncontrada";

export default function Player() {
  const params = useParams();
  const video = videos.find((video) => video.id === Number(params.id));

  if(!video) {
    return <NaoEncontrada />
  }

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          src={video.link}
          title={video.titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </section>
    </>
  );
}
