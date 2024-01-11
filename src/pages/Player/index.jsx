import Banner from "@/components/Banner";
import Titulo from "@/components/Titulo";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NaoEncontrada from "../NaoEncontrada";
import styles from "./Player.module.scss";

export default function Player() {
  const [video, setVideo] = useState();
  const params = useParams();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/devcanovas/api-cinetag/videos?id=${params.id}`
    )
      .then((response) => response.json())
      .then((data) => setVideo(...data));
  }, []);

  if (!video) {
    return <NaoEncontrada />;
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
