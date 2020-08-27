export interface ImageFormatDetails {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  size: number;
  width: number;
  height: number;
}

export interface ImageDetails {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    large: ImageFormatDetails;
    small: ImageFormatDetails;
    medium: ImageFormatDetails;
    thumbnail: ImageFormatDetails;
  }
  hash: string;
  ext: string;
  mine: string;
  size: number;
  url: string;
  previewUrl: string | null;
  created_at: Date;
}

export interface ImageParams {
  id: number;
  name: string;
  created_at: Date;
  type: string;
  redirectUrl: string;
  description: string;
  isActive: boolean;
  image: ImageDetails;
}