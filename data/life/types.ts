export interface Life {
  slug: string;

  title: string;
  subtitle: string;
  summary: string;
description: string;

  category: string;

  cover: string;
  gallery: string[];
  sections?: { text: string; image: string; alt: string }[];

  date: string;

  tags: string[];
}
