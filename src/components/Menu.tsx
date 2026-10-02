import { useState } from 'react'
import type { MusicaApi } from '../hooks/useMusica'

interface MenuProps {
  onAbrirFavoritos: () => void
  musica: MusicaApi
}

// O menu discreto no canto: favoritos e música.
export function Menu({ onAbrirFavoritos, musica }: MenuProps) {
  const [aberto, setAberto] = useState(false)

  return (
    <div className="menu">
      <button
        type="button"
        className="botao-menu"
        aria-label="Menu"
        aria-expanded={aberto}
        onClick={() => setAberto((a) => !a)}
      >
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>
      {aberto && (
        <nav className="menu-itens">
          <button
            type="button"
            onClick={() => {
              setAberto(false)
              onAbrirFavoritos()
            }}
          >
            Favoritos
          </button>
          {musica.disponivel && (
            <button type="button" className="item-secundario" aria-pressed={musica.ligada} onClick={musica.alternar}>
              {musica.ligada ? 'Música: ligada' : 'Música: desligada'}
            </button>
          )}
        </nav>
      )}
    </div>
  )
}
