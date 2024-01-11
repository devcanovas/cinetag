import { useContext } from "react";
import { FavoritosContext } from "@/contexts/Favoritos";

export default function useFavoritosContext() {
  const { favorito, setFavorito } = useContext(FavoritosContext);

  function adicionarFavorito(novoFavorito) {
    const listaFavoritos = [...favorito];
    const favoritoJaExiste = favorito.some(
      (item) => item.id === novoFavorito.id
    );

    if (!favoritoJaExiste) {
      return pushNovoFavorito(listaFavoritos, novoFavorito);
    }

    const novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
    return setFavorito(novaLista);
  }

  function pushNovoFavorito(listaFavoritos, novoFavorito) {
    listaFavoritos.push(novoFavorito);
    return setFavorito(listaFavoritos);
  }

  return {
    favorito,
    adicionarFavorito,
  };
}
