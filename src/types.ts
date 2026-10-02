// Modelo de dados de um poema, igual ao da SPEC.md.

export type Clima =
  | 'melancolia'
  | 'amor'
  | 'saudade'
  | 'morte e finitude'
  | 'natureza'
  | 'ironia'
  | 'inquietação'

export type Tamanho = 'curto' | 'medio' | 'longo'

export interface Gancho {
  /** índice da estrofe onde está o gancho */
  estrofe: number
  /** índices dos versos (um ou dois) dentro dessa estrofe */
  versos: number[]
}

export interface Poem {
  id: string
  titulo: string
  autor: string
  anoMorteAutor: number
  /** ano de publicação; null quando não se sabe */
  ano: number | null
  /** cada estrofe é uma lista de versos */
  estrofes: string[][]
  gancho: Gancho
  climas: Clima[]
  temas: string[]
  tamanho: Tamanho
  fonte: string
  revisado: boolean
}
