import useSWR from 'swr';
import { FRESH_DURATION, Response } from '../pages/api/lastfm';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useLatestSong(): Partial<Response> {
  const { data } = useSWR<Response>('/api/lastfm', fetcher, {
    refreshInterval: FRESH_DURATION * 1000,
  });

  return data ?? {};
}
