import { Feed } from './components/Feed'
import poemsData from './data/poems.json'
import type { Poem } from './types'

const poems = poemsData as Poem[]

export default function App() {
  return <Feed poems={poems} />
}
