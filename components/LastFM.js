import { useLastFM } from 'use-last-fm'

export default function CurrentlyPlaying() {
  const lastFM = useLastFM('kevhjc', process.env.LASTFM_API_KEY)

  console.log(lastFM)

  if (lastFM.status !== 'playing') {
    return <p>Not listening to anything</p>
  }

  return (
    <p>
      Listening to <b>{lastFM.song.name}</b> by <b>{lastFM.song.artist}</b>
    </p>
  )
}
