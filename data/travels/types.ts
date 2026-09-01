export interface Travel {
  slug: string;

  name: string;

  subtitle: string;

  description: string;

  cover: string;

  gallery: string[];

  galleryTitle?: string;

  downloadableGallery?: boolean;

  address: string;

  openingHours: string;

  ticket: string;

  transportation: string;

  phone?: string;

  map: string;

  embed: string;
}
