import { useCallback, useEffect, useRef, useState } from 'react'

// Música de fundo opcional. Coloque o arquivo em public/musica/fundo.mp3.
const ARQUIVO = '/musica/fundo.mp3'
const VOLUME = 0.25 // bem baixinho (o iPhone ignora isso e usa o volume do aparelho)
const CHAVE = 'musica-ligada'

function lerPreferencia(): boolean {
  try {
    return localStorage.getItem(CHAVE) === '1'
  } catch {
    return false
  }
}

function salvarPreferencia(ligada: boolean) {
  try {
    localStorage.setItem(CHAVE, ligada ? '1' : '0')
  } catch {
    // sem armazenamento: a escolha vale só nesta visita
  }
}

export interface MusicaApi {
  /** existe um arquivo de música no projeto? */
  disponivel: boolean
  ligada: boolean
  alternar: () => void
}

export function useMusica(): MusicaApi {
  const audio = useRef<HTMLAudioElement | null>(null)
  const [disponivel, setDisponivel] = useState(false)
  const [ligada, setLigada] = useState(lerPreferencia)

  // Só mostra a opção se o arquivo existir de verdade.
  useEffect(() => {
    fetch(ARQUIVO, { method: 'HEAD' })
      .then((r) => {
        if (r.ok && r.headers.get('content-type')?.startsWith('audio')) setDisponivel(true)
      })
      .catch(() => {})
  }, [])

  const tocar = useCallback(() => {
    if (!audio.current) {
      audio.current = new Audio(ARQUIVO)
      audio.current.loop = true
    }
    const el = audio.current
    el.volume = 0
    el.play()
      .then(() => {
        // entra devagarinho, em uns 3 segundos
        const passo = window.setInterval(() => {
          el.volume = Math.min(VOLUME, el.volume + VOLUME / 30)
          if (el.volume >= VOLUME) clearInterval(passo)
        }, 100)
      })
      .catch(() => {
        // o navegador só deixa tocar som depois de um toque na tela
      })
  }, [])

  const parar = useCallback(() => audio.current?.pause(), [])

  // Se a música estava ligada da última vez, volta a tocar no primeiro toque.
  useEffect(() => {
    if (!disponivel || !ligada) return
    const aoPrimeiroToque = () => tocar()
    window.addEventListener('pointerdown', aoPrimeiroToque, { once: true })
    return () => window.removeEventListener('pointerdown', aoPrimeiroToque)
  }, [disponivel, ligada, tocar])

  // Pausa quando o app vai para segundo plano e retoma ao voltar.
  useEffect(() => {
    if (!ligada) return
    const aoMudarVisibilidade = () => (document.hidden ? parar() : tocar())
    document.addEventListener('visibilitychange', aoMudarVisibilidade)
    return () => document.removeEventListener('visibilitychange', aoMudarVisibilidade)
  }, [ligada, tocar, parar])

  const alternar = useCallback(() => {
    const nova = !ligada
    setLigada(nova)
    salvarPreferencia(nova)
    if (nova) tocar()
    else parar()
  }, [ligada, tocar, parar])

  return { disponivel, ligada, alternar }
}
