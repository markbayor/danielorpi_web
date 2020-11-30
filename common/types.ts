/* SLIDES */

export interface SlideImageFormatDetails {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  size: number;
  width: number;
  height: number;
}

export interface SlideImageParams {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    large: SlideImageFormatDetails;
    small: SlideImageFormatDetails;
    medium: SlideImageFormatDetails;
    thumbnail: SlideImageFormatDetails;
  };
  hash: string;
  ext: string;
  mine: string;
  size: number;
  url: string;
  previewUrl: string | null;
  created_at: Date;
}

export interface SlideParams {
  id: number;
  title: string;
  link: string;
  isActive: boolean;
  image: SlideImageParams;
  created_at: Date;
  orderNum: number;
}


/* SONGS */
interface SongCoverFormatDetails {
  ext: string;
  hash: string;
  height: number;
  width: number;
  size: number;
  url: string;
}
export interface SongCoverDetails {
  id: number;
  created_at: string;
  ext: string;
  hash: string;
  height: number;
  width: number;
  mime: string;
  name: string;
  size: number;
  url: string;
  formats: {
    large: SongCoverFormatDetails;
    medium: SongCoverFormatDetails;
    small: SongCoverFormatDetails;
    thumbnail: SongCoverFormatDetails;
  };
}
export interface SongDetails {
  id: number;
  name: string;
  artist: string;
  created_at: Date;
  updated_at: Date;
  beatportUrl?: string;
  spotifyUrl?: string;
  spotifyEmbedUrl?: string;
  soundcloudUrl?: string;
  youtubeUrl?: string;
  deezerUrl?: string;
  appleMusicUrl?: string;
  amazonMusicUrl?: string;
  tidalUrl?: string;
  cover: SongCoverDetails;
  orderNum: number;
}


/* TOUR EVENTS */
export interface EventParams {
  location: string;
  date: Date;
  lineup: string;
  ticketLink: string;
  isActive: boolean;
}

export interface TourEventParams {
  location: string;
  ticketLink: string;
  isActive: boolean;
  city: string;
  country: string;
  name: string;
  startDate: Date;
  endDate?: Date;
}