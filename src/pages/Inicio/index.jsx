import Banner from "@/components/Banner";
import Titulo from "@/components/Titulo";
import Card from "@/components/Card";
import styles from "./Inicio.module.scss";
import { useEffect, useState } from "react";

export default function Inicio() {
  const [videos, setVideos] = useState([]);

  // Realizar alguma ação após o carregamento dos componentes na página
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/devcanovas/api-cinetag/videos")
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  //[] define para o useEffect realiza essa ação somente uma vez, se deixa-lo sem o [], ficará executando a ação em looping

  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => (
          <Card {...video} key={video.id} />
        ))}
      </section>
    </>
  );
}
