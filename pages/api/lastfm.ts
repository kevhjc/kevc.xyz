import { NextApiRequest, NextApiResponse } from 'next';

const LASTFM_API = 'https://ws.audioscrobbler.com/2.0/';
const LASTFM_USERNAME = 'kevhjc';
const LASTFM_ENDPOINT = `${LASTFM_API}?method=user.getRecentTracks&user=${LASTFM_USERNAME}&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}&format=json&limit=1`;

export const STALE_DURATION = 60;
export const FRESH_DURATION = STALE_DURATION / 2;

type Boolean = '0' | '1';

interface Text<T = string> {
  '#text': T;
}

interface MusicBrainzID extends Text {
  mbid: string;
}

interface Image extends Text {
  size: 'extralarge' | 'large' | 'medium' | 'small';
}

interface TrackDate extends Text {
  uts: string;
}

interface RecentTrackAttributes {
  nowplaying: string;
}

interface RecentTrack {
  '@attr'?: RecentTrackAttributes;
  album: MusicBrainzID;
  artist: MusicBrainzID;
  date?: TrackDate;
  image: Image[];
  mbid: string;
  name: string;
  streamable: Boolean;
  url: string;
}

interface RecentTracksAttributes {
  page: string;
  perPage: string;
  total: string;
  totalPages: string;
}

interface RecentTracks {
  '@attr': RecentTracksAttributes;
  track: RecentTrack[];
}

interface LastFmResponse {
  recenttracks: RecentTracks;
}

interface MusicBrainzResponse {
  date?: string;
}

export interface Response {
  artist: string;
  album: string;
  cover: string;
  date?: number;
  playing: boolean;
  title: string;
  url: string;
}

export async function getLatestSong(): Promise<Response | undefined> {
  try {
    const response: LastFmResponse = await fetch(LASTFM_ENDPOINT).then(
      (response) => {
        if (!response.ok) throw new Error();

        return response.json();
      }
    );

    const song = response.recenttracks?.track?.[0];
    const date = response.recenttracks?.track?.[1].date?.uts
      ? Number(song.date?.uts)
      : undefined;

    return {
      title: song.name,
      artist: song.artist['#text'],
      album: song.album['#text'],
      date,
      url: song.url,
      cover: song.image.find((image) => image.size === 'extralarge')?.[
        '#text'
      ] as string,
      playing: Boolean(song['@attr']?.nowplaying) ?? !date,
    };
  } catch {
    return;
  }
}

export default async function route(req: NextApiRequest, res: NextApiResponse) {
  const song = await getLatestSong();

  if (song) {
    res.setHeader(
      'Cache-Control',
      `public, s-maxage=${FRESH_DURATION}, max-age=${FRESH_DURATION}, stale-while-revalidate=${STALE_DURATION}`
    );
    res.status(200).json(song);
  } else {
    res.status(500).send(undefined);
  }
}
