import { get, set } from 'idb-keyval'

// Tudo que o app guarda fica no próprio aparelho (IndexedDB), sem servidor.
// Em janela anônima o IndexedDB pode falhar; nesse caso o app segue sem salvar.

export interface Favorito {
  id: string
  /** quando foi salvo (Date.now()) */
  savedAt: number
}

const CHAVE_FAVORITOS = 'favoritos'

export async function carregarFavoritos(): Promise<Favorito[]> {
  try {
    return (await get<Favorito[]>(CHAVE_FAVORITOS)) ?? []
  } catch {
    return []
  }
}

export async function salvarFavoritos(favoritos: Favorito[]): Promise<void> {
  try {
    await set(CHAVE_FAVORITOS, favoritos)
  } catch {
    // sem armazenamento disponível: os favoritos valem só nesta visita
  }
}
