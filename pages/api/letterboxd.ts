import { XMLParser } from 'fast-xml-parser';
import { decode } from 'html-entities';
import { NextApiRequest, NextApiResponse } from 'next';

import {
  XMLParserDocument,
  LetterboxdResponse,
  FilmResponse,
} from '../../lib/interfaces';

const LETTERBOXD_USERNAME = 'kevhjc';
const LETTERBOXD_URL = 'https://letterboxd.com';
const LETTERBOXD_FEED = `${LETTERBOXD_URL}/${LETTERBOXD_USERNAME}/rss/`;
const LETTERBOXD_FILM_URL = (film: string) => `${LETTERBOXD_URL}/film/${film}/`;
export const STALE_DURATION = 3600;
export const FRESH_DURATION = STALE_DURATION / 2;

export async function getLatestFilm(): Promise<FilmResponse | undefined> {
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
