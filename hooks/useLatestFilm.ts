import useSWR from 'swr/immutable';
import { FilmResponse } from 'lib/interfaces';

export function useLatestFilm(): Partial<FilmResponse> {
  const { data } = useSWR<FilmResponse>('/api/letterboxd', {
    revalidateIfStale: true,
  });

  return data ?? {};
}
