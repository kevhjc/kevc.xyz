import useSWR from 'swr';
import { FRESH_DURATION } from 'pages/api/lastfm';
import { SongResponse } from 'lib/interfaces';

export function useLatestSong(): Partial<SongResponse> {
  const { data } = useSWR<SongResponse>('/api/lastfm', {
    refreshInterval: FRESH_DURATION * 1000,
  });

  return data ?? {};
}
