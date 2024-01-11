import { useContext } from "react";
import { FavoritosContext } from "../contexts/Favoritos";

export default function useFavoritosContext() {
  const { favorito, setFavorito } = useContext(FavoritosContext);

  function adicionarFavorito(novoFavorito) {
    const favoritoJaExiste = favorito.some(
      (item) => item.id === novoFavorito.id
    );

    const listaFavoritos = [...favorito];

    if (!favoritoJaExiste) {
      listaFavoritos.push(novoFavorito);
      return setFavorito(listaFavoritos);
    }

    novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
    return setFavorito(listaFavoritos);
  }

  return {
    favorito, 
    adicionarFavorito
  }
}
