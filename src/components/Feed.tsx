import type { FavoritosApi } from '../hooks/useFavoritos'
import type { Poem } from '../types'
import { PoemCard } from './PoemCard'

interface FeedProps {
  poems: Poem[]
  favoritos: FavoritosApi
}

// A lista vertical. O "encaixe" ao deslizar vem do CSS (scroll-snap em .feed).
export function Feed({ poems, favoritos }: FeedProps) {
  return (
    <main className="feed">
      {poems.map((poem) => (
        <PoemCard
          key={poem.id}
          poem={poem}
          favorito={favoritos.isFavorito(poem.id)}
          onFavoritar={() => favoritos.favoritar(poem.id)}
          onAlternarFavorito={() => favoritos.alternar(poem.id)}
        />
      ))}
    </main>
  )
}
