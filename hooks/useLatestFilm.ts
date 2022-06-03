import useSWR from 'swr/immutable';
import { Response } from '../pages/api/letterboxd';

export function useLatestFilm(): Partial<Response> {
  const { data } = useSWR<Response>('/api/letterboxd', {
    revalidateIfStale: true,
  });

  return data ?? {};
}
