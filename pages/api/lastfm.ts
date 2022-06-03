import type { NextApiRequest, NextApiResponse } from 'next';

const LASTFM_API = 'https://ws.audioscrobbler.com/2.0/';
const MUSICBRAINZ_API = 'https://musicbrainz.org/ws/2/';
const LASTFM_USERNAME = 'kevhjc';
const LASTFM_ENDPOINT = `${LASTFM_API}?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}&format=json&limit=1`;
const MUSICBRAINZ_ENDPOINT = (mbid: string) => {
  return `${MUSICBRAINZ_API}/release/${mbid}?fmt=json`;
};

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
  title: string;
  artist: string;
  album: string;
  date?: number;
  year?: number;
  cover: string;
  playing: boolean;
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
    const mbid = song.album.mbid;
    let year: number | undefined;

    if (mbid) {
      const release: MusicBrainzResponse = await fetch(
        MUSICBRAINZ_ENDPOINT(mbid)
      ).then((response) => {
        if (!response.ok) return {};

        return response.json();
      });

      if (release.date) {
        const date = new Date(release.date);

        year = date.getFullYear();
      }
    }

    return {
      title: song.name,
      artist: song.artist['#text'],
      album: song.album['#text'],
      date,
      year,
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
      res.status(500).json({ error: 'Error fetching latest song' });
    }
  }
}
