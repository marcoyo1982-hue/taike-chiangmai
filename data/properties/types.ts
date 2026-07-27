export interface Property {
  slug: string;

  name: string;

  subtitle: string;

  summary: string;

  description: string;

  cover: string;

  date: string;

  category: string;

  videos: string[];

  map: string;

  embed: string;

  personalLine: string;

  lineCommunity: string;

  pdf: string;

  gallery: string[];

  info: {
    location: string;
    developer: string;
    ownership: string;
    completion: string;
    floors: string;
    units: string;
    roomTypes: string[];
    size: string;
    price: string;
  };

  landmarks: {
    icon: string;
    title: string;
    time: string;
  }[];

  faqs: {
    question: string;
    answer: string;
  }[];
}