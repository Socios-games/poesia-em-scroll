import type { Poem } from '../types'
import { PoemCard } from './PoemCard'

interface FeedProps {
  poems: Poem[]
}

// A lista vertical. O "encaixe" ao deslizar vem do CSS (scroll-snap em .feed).
export function Feed({ poems }: FeedProps) {
  return (
    <main className="feed">
      {poems.map((poem) => (
        <PoemCard key={poem.id} poem={poem} />
      ))}
    </main>
  )
}
