import { useEffect, useState } from 'react'
import { Favoritos } from './components/Favoritos'
import { Feed } from './components/Feed'
import { Menu } from './components/Menu'
import poemsData from './data/poems.json'
import { useFavoritos } from './hooks/useFavoritos'
import { useMusica } from './hooks/useMusica'
import type { Poem } from './types'

const poems = poemsData as Poem[]

export default function App() {
  const favoritos = useFavoritos()
  const musica = useMusica()
  const [verFavoritos, setVerFavoritos] = useState(false)

  // O botão "voltar" do Android fecha a tela de favoritos em vez de sair do site.
  useEffect(() => {
    const aoVoltar = () => setVerFavoritos(false)
    window.addEventListener('popstate', aoVoltar)
    return () => window.removeEventListener('popstate', aoVoltar)
  }, [])

  function abrirFavoritos() {
    history.pushState({ tela: 'favoritos' }, '')
    setVerFavoritos(true)
  }

  function fecharFavoritos() {
    history.back() // dispara o popstate acima
  }

  return (
    <>
      {/* O feed continua montado por baixo, então a posição do scroll não se perde. */}
      <Feed poems={poems} favoritos={favoritos} />
      <Menu onAbrirFavoritos={abrirFavoritos} musica={musica} />
      {verFavoritos && <Favoritos poems={poems} favoritos={favoritos} onFechar={fecharFavoritos} />}
    </>
  )
}
