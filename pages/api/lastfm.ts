import type { NextApiRequest, NextApiResponse } from 'next';
import { LastFmResponse, SongResponse } from '../../lib/interfaces';

const LASTFM_API = 'https://ws.audioscrobbler.com/2.0/';
const LASTFM_USERNAME = 'kevhjc';
const LASTFM_ENDPOINT = `${LASTFM_API}?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}&format=json&limit=1`;

export const STALE_DURATION = 60;
export const FRESH_DURATION = STALE_DURATION / 2;

export async function getLatestSong(): Promise<SongResponse | undefined> {
  try {
    const response: LastFmResponse = await fetch(LASTFM_ENDPOINT).then(
      (response) => {
        if (!response.ok) throw new Error();

        return response.json();
      }
    );

    const song = response.recenttracks?.track?.[0];
    const date = song.date?.uts ? Number(song.date?.uts) : undefined;

    return {
      title: song.name,
      artist: song.artist['#text'],
      album: song.album['#text'],
      date,
      cover: song.image.find((image) => image.size === 'extralarge')?.[
        '#text'
      ] as string,
      url: song.url,
      playing: Boolean(song['@attr']?.nowplaying) ?? !date,
    };
  } catch {
    return;
  }
}

export default async function route(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === 'GET') {
    try {
      const song = await getLatestSong();
      res.setHeader(
        'Cache-Control',
        `public, s-maxage=${FRESH_DURATION}, max-age=${FRESH_DURATION}, stale-while-revalidate=${STALE_DURATION}`
      );
      res.status(200).json(song);
    } catch (e) {
      console.error('Request error', e);
      res.status(500).send(undefined);
    }
  }
}
