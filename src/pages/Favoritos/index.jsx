import styles from "./Favoritos.module.scss";
import Banner from "@/components/Banner";
import Titulo from "@/components/Titulo";
import Card from "@/components/Card"
import gatoBonifacio from '@/mocks/gatoBonifacio.json'

export default function Favoritos() {
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        <Card {...gatoBonifacio} />
      </section>
    </>
  );
}
