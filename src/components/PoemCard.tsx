import type { Poem } from '../types'

interface PoemCardProps {
  poem: Poem
}

// Pega só os versos do gancho dentro do poema.
function versosDoGancho(poem: Poem): string[] {
  const estrofe = poem.estrofes[poem.gancho.estrofe] ?? []
  return poem.gancho.versos.map((i) => estrofe[i]).filter(Boolean)
}

// Uma tela do feed: gancho grande no centro, autor e ano pequenos embaixo.
export function PoemCard({ poem }: PoemCardProps) {
  const clima = poem.climas[0] ?? 'padrao'

  return (
    <section className="poem-card" data-clima={clima} aria-label={`${poem.titulo}, de ${poem.autor}`}>
      <blockquote className="gancho">
        {versosDoGancho(poem).map((verso, i) => (
          <p key={i}>{verso}</p>
        ))}
      </blockquote>
      <footer className="assinatura">
        <span className="autor">{poem.autor}</span>
        {poem.ano && <span className="ano">{poem.ano}</span>}
      </footer>
    </section>
  )
}
