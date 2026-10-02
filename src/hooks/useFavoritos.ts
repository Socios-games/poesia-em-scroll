import { useCallback, useEffect, useState } from 'react'
import { carregarFavoritos, salvarFavoritos, type Favorito } from '../storage'

export interface FavoritosApi {
  favoritos: Favorito[]
  isFavorito: (id: string) => boolean
  favoritar: (id: string) => void
  alternar: (id: string) => void
}

// Guarda a lista de favoritos na memória e espelha cada mudança no IndexedDB.
export function useFavoritos(): FavoritosApi {
  const [favoritos, setFavoritos] = useState<Favorito[]>([])

  useEffect(() => {
    carregarFavoritos().then(setFavoritos)
  }, [])

  const atualizar = useCallback((mudar: (atual: Favorito[]) => Favorito[]) => {
    setFavoritos((atual) => {
      const nova = mudar(atual)
      if (nova !== atual) salvarFavoritos(nova)
      return nova
    })
  }, [])

  const isFavorito = useCallback((id: string) => favoritos.some((f) => f.id === id), [favoritos])

  // Toque duplo: só adiciona, nunca remove (como curtir numa rede social).
  const favoritar = useCallback(
    (id: string) =>
      atualizar((atual) => (atual.some((f) => f.id === id) ? atual : [...atual, { id, savedAt: Date.now() }])),
    [atualizar],
  )

  // Botão de coração: liga e desliga.
  const alternar = useCallback(
    (id: string) =>
      atualizar((atual) =>
        atual.some((f) => f.id === id) ? atual.filter((f) => f.id !== id) : [...atual, { id, savedAt: Date.now() }],
      ),
    [atualizar],
  )

  return { favoritos, isFavorito, favoritar, alternar }
}
