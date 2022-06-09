// Components

export interface ContainerProps {
  children: JSX.Element[] | JSX.Element;
}

export interface ProjectProps {
  name: string;
  href: string;
  src: string;
}

export interface ElsewhereProps {
  name: string;
  href: string;
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
  playing: boolean;
}

// Letterboxd

export interface XMLParserDocument<T> {
  rss: T;
}

export interface FilmEntry {
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

export interface LetterboxdResponse {
  channel: {
    description: string;
    item: FilmEntry[];
    link: string;
    title: string;
  };
}

export interface FilmResponse {
  date: string;
  poster: string;
  rating?: number;
  title: string;
  url: string;
  year: number;
}
