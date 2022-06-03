import { XMLParser } from 'fast-xml-parser';
import { decode } from 'html-entities';
import { NextApiRequest, NextApiResponse } from 'next';

const LETTERBOXD_USERNAME = 'kevhjc';
const LETTERBOXD_URL = 'https://letterboxd.com';
const LETTERBOXD_FEED = `${LETTERBOXD_URL}/${LETTERBOXD_USERNAME}/rss/`;
const LETTERBOXD_FILM_URL = (film: string) => `${LETTERBOXD_URL}/film/${film}/`;
export const STALE_DURATION = 3600;
export const FRESH_DURATION = STALE_DURATION / 2;

interface XMLParserDocument<T> {
  rss: T;
}

interface FilmEntry {
  description: string;
  guid: string;
  'letterboxd:filmTitle': string;
  'letterboxd:filmYear': number;
  'letterboxd:memberRating': number;
  'letterboxd:rewatch': 'No' | 'Yes';
  'letterboxd:watchedDate': string;
  link: string;
  title: string;
}

interface LetterboxdResponse {
  channel: {
    description: string;
    item: FilmEntry[];
    link: string;
    title: string;
  };
}

export interface Response {
  date: string;
  poster: string;
  rating?: number;
  title: string;
  url: string;
  year: number;
}

export async function getLatestFilm(): Promise<Response | undefined> {
  try {
    const response = await fetch(LETTERBOXD_FEED).then((response) => {
      if (!response.ok) throw new Error();

      return response.text();
    });

    const parser = new XMLParser();
    const { rss }: XMLParserDocument<LetterboxdResponse> =
      parser.parse(response);

    const [film] = rss.channel.item.sort((a, b) =>
      b['letterboxd:watchedDate'].localeCompare(a['letterboxd:watchedDate'])
    );
    const [poster] =
      film.description.match(/(http(s?):)([\s\w./|-])*\.jpg/) ?? [];
    const [, slug] = film.link.match(/film\/([^/]*)\/?/) ?? [];

    return {
      title: decode(film['letterboxd:filmTitle']),
      year: film['letterboxd:filmYear'],
      rating: film['letterboxd:memberRating'],
      date: film['letterboxd:watchedDate'],
      poster,
      url: LETTERBOXD_FILM_URL(slug),
    };
  } catch {
    return;
  }
}

export default async function route(req: NextApiRequest, res: NextApiResponse) {
  const film = await getLatestFilm();

  if (film) {
    res.setHeader(
      'Cache-Control',
      `public, s-maxage=${FRESH_DURATION}, max-age=${FRESH_DURATION}, stale-while-revalidate=${STALE_DURATION}`
    );
    res.status(200).json(film);
  } else {
    res.status(500).send(undefined);
  }
}
