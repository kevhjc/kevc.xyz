import { useLastFM } from 'use-last-fm'

export default function CurrentlyPlaying() {
  const lastFM = useLastFM('kevhjc', process.env.NEXT_PUBLIC_LASTFM_API_KEY)

  if (lastFM.status !== 'playing') {
    return <p>nothing</p>
  }

  return (
    <p>
      <b>{lastFM.song.name}</b> by <b>{lastFM.song.artist}</b>
    </p>
  )
}
