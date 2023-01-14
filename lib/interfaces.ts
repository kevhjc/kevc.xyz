// Components

export interface ContainerProps {
  children: JSX.Element[] | JSX.Element;
}

export interface ExternalLinkProps {
  name: string;
  href: string;
  src?: string;
}

// Last.fm

export interface Text<T = string> {
  '#text': T;
}

export interface MusicBrainzID extends Text {
  mbid: string;
}

export interface Image extends Text {
  size: 'extralarge' | 'large' | 'medium' | 'small';
}

export interface TrackDate extends Text {
  uts: string;
}

export interface RecentTrackAttributes {
  nowplaying: string;
}

export interface RecentTrack {
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

export interface RecentTracksAttributes {
  page: string;
  perPage: string;
  total: string;
  totalPages: string;
}

export interface RecentTracks {
  '@attr': RecentTracksAttributes;
  track: RecentTrack[];
}

export interface LastFmResponse {
  recenttracks: RecentTracks;
}

export interface MusicBrainzResponse {
  date?: string;
}

export interface SongResponse {
  title: string;
  artist: string;
  album: string;
  date?: number;
  cover: string;
  url: string;
  playing: boolean;
}
