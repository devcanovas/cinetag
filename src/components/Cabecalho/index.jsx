import { Link } from "react-router-dom";
import styles from "./Cabecalho.module.scss"
import CabecalhoLink from "./CabecalhoLink";

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="/">
                <img src="/imagens/Logo-cinetag-branco1.png"/>
            </Link>
            <nav>
                <CabecalhoLink urlTo="/">
                    Home
                </CabecalhoLink>
                <CabecalhoLink urlTo="/favoritos">
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>
    )
}