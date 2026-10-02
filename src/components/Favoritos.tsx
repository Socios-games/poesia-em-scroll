import { useMemo, useState } from 'react'
import type { FavoritosApi } from '../hooks/useFavoritos'
import { normalizar } from '../text'
import type { Poem } from '../types'
import { HeartIcon } from './HeartIcon'
import { PoemText } from './PoemText'

interface FavoritosProps {
  poems: Poem[]
  favoritos: FavoritosApi
  onFechar: () => void
}

// Tela de favoritos: do mais recente ao mais antigo, com busca por autor.
export function Favoritos({ poems, favoritos, onFechar }: FavoritosProps) {
  const [busca, setBusca] = useState('')
  const [abertoId, setAbertoId] = useState<string | null>(null)

  const lista = useMemo(() => {
    const porId = new Map(poems.map((p) => [p.id, p]))
    const termo = normalizar(busca.trim())
    return [...favoritos.favoritos]
      .sort((a, b) => b.savedAt - a.savedAt)
      .map((f) => porId.get(f.id))
      .filter((p): p is Poem => !!p && normalizar(p.autor).includes(termo))
  }, [poems, favoritos.favoritos, busca])

  return (
    <div className="tela-favoritos" role="dialog" aria-label="Favoritos">
      <header className="tela-topo">
        <h1>Favoritos</h1>
        <button type="button" className="botao-texto" onClick={onFechar}>
          Fechar
        </button>
      </header>

      <input
        className="busca"
        type="search"
        placeholder="Buscar por autor"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      {favoritos.favoritos.length === 0 ? (
        <p className="vazio">Toque duas vezes num poema para guardá-lo aqui.</p>
      ) : lista.length === 0 ? (
        <p className="vazio">Nenhum favorito desse autor.</p>
      ) : (
        <ul className="lista-favoritos">
          {lista.map((poem) => (
            <li key={poem.id}>
              <div className="item-favorito">
                <button
                  type="button"
                  className="item-abrir"
                  aria-expanded={abertoId === poem.id}
                  onClick={() => setAbertoId(abertoId === poem.id ? null : poem.id)}
                >
                  <span className="item-titulo">{poem.titulo}</span>
                  <span className="item-autor">{poem.autor}</span>
                </button>
                <button
                  type="button"
                  className="botao-favorito ativo"
                  aria-label="Remover dos favoritos"
                  onClick={() => favoritos.alternar(poem.id)}
                >
                  <HeartIcon cheio />
                </button>
              </div>
              {abertoId === poem.id && <PoemText poem={poem} />}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
