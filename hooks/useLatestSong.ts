import useSWR from 'swr';
import { FRESH_DURATION, Response } from '../pages/api/lastfm';

export function useLatestSong(): Partial<Response> {
  const { data } = useSWR<Response>('/api/lastfm', {
    refreshInterval: FRESH_DURATION * 1000,
  });

  return data ?? {};
}
