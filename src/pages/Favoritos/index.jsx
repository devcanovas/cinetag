import styles from "./Favoritos.module.scss";
import Banner from "@/components/Banner";
import Titulo from "@/components/Titulo";
import Card from "@/components/Card"

export default function Favoritos() {

  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        <Card id={'3'} titulo={'O poderoso JavaScript'} capa={'https://caelum-online-public.s3.amazonaws.com/2802-react-praticando/img4.png'}/>
      </section>
    </>
  );
}
