import { useEffect, useRef, useState } from 'react'
import type { Poem } from '../types'
import { HeartIcon } from './HeartIcon'
import { PoemText } from './PoemText'

interface PoemCardProps {
  poem: Poem
  favorito: boolean
  onFavoritar: () => void
  onAlternarFavorito: () => void
}

// Dois toques dentro deste tempo contam como toque duplo.
const TOQUE_DUPLO_MS = 250

// Pega só os versos do gancho dentro do poema.
function versosDoGancho(poem: Poem): string[] {
  const estrofe = poem.estrofes[poem.gancho.estrofe] ?? []
  return poem.gancho.versos.map((i) => estrofe[i]).filter(Boolean)
}

// Uma tela do feed. Toque simples abre/fecha o poema; toque duplo favorita.
export function PoemCard({ poem, favorito, onFavoritar, onAlternarFavorito }: PoemCardProps) {
  const [aberto, setAberto] = useState(false)
  const [coracao, setCoracao] = useState(0) // muda a cada toque duplo para reiniciar a animação
  const timer = useRef<number | null>(null)
  const ref = useRef<HTMLElement>(null)
  const clima = poem.climas[0] ?? 'padrao'

  // Quando o poema sai da tela, ele volta a mostrar só o gancho.
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) setAberto(false)
      },
      { threshold: 0 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current)
  }, [])

  function aoTocar() {
    if (timer.current) {
      // segundo toque chegou a tempo: é um toque duplo
      clearTimeout(timer.current)
      timer.current = null
      onFavoritar()
      setCoracao((n) => n + 1)
      return
    }
    // espera um pouco para ver se vem um segundo toque
    timer.current = window.setTimeout(() => {
      timer.current = null
      setAberto((a) => !a)
    }, TOQUE_DUPLO_MS)
  }

  return (
    <section
      ref={ref}
      className={aberto ? 'poem-card aberto' : 'poem-card'}
      data-clima={clima}
      aria-label={`${poem.titulo}, de ${poem.autor}`}
      onClick={aoTocar}
    >
      <div className="conteudo">
        {aberto ? (
          <PoemText poem={poem} />
        ) : (
          <blockquote className="gancho">
            {versosDoGancho(poem).map((verso, i) => (
              <p key={i}>{verso}</p>
            ))}
          </blockquote>
        )}
        <footer className="assinatura">
          <span className="autor">{poem.autor}</span>
          {poem.ano && <span className="ano">{poem.ano}</span>}
        </footer>
      </div>

      <button
        type="button"
        className={favorito ? 'botao-favorito ativo' : 'botao-favorito'}
        aria-label={favorito ? 'Remover dos favoritos' : 'Favoritar'}
        aria-pressed={favorito}
        onClick={(e) => {
          e.stopPropagation() // não conta como toque no poema
          onAlternarFavorito()
        }}
      >
        <HeartIcon cheio={favorito} />
      </button>

      {coracao > 0 && (
        <div key={coracao} className="coracao-animado" aria-hidden="true">
          <HeartIcon cheio />
        </div>
      )}
    </section>
  )
}
