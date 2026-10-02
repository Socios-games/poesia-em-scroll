import type { Poem } from '../types'

interface PoemTextProps {
  poem: Poem
}

// O poema inteiro, estrofe por estrofe, com os versos do gancho destacados.
export function PoemText({ poem }: PoemTextProps) {
  return (
    <div className="poema-inteiro">
      <h2 className="titulo">{poem.titulo}</h2>
      {poem.estrofes.map((estrofe, e) => (
        <p className="estrofe" key={e}>
          {estrofe.map((verso, v) => {
            const ehGancho = e === poem.gancho.estrofe && poem.gancho.versos.includes(v)
            return (
              <span key={v} className={ehGancho ? 'verso destaque' : 'verso'}>
                {verso}
              </span>
            )
          })}
        </p>
      ))}
    </div>
  )
}
