import { useLastFM } from 'use-last-fm'

export default function CurrentlyPlaying() {
  const lastFM = useLastFM('kevhjc', process.env.NEXT_PUBLIC_LASTFM_API_KEY)

  if (lastFM.status !== 'playing') {
    return <p>Not listening to anything</p>
  }

  return (
    <p>
      Listening to {lastFM.song.name} by {lastFM.song.artist}
    </p>
  )
}
