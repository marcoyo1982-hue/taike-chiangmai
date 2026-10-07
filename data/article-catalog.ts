import { foods } from "./foods";
import { life } from "./life";
import { travels } from "./travels";
import { properties } from "./properties";

export type CatalogArticle = { title: string; description: string; category: string; image: string; href: string; date: string };

export const articleCatalog: CatalogArticle[] = [
  ...life.map((item) => ({ title: item.title, description: item.summary, category: "生活", image: `/images/life/${item.slug}/${item.cover}`, href: `/life/${item.slug}`, date: item.date })),
  ...foods.map((item) => ({ title: item.name, description: item.summary, category: "美食", image: `/images/foods/${item.slug}/${item.cover}`, href: `/food/${item.slug}`, date: item.date })),
  ...travels.map((item) => ({ title: item.name, description: item.subtitle, category: "旅遊", image: `/travels/${item.slug}/${item.cover}`, href: `/travels/${item.slug}`, date: "" })),
  ...properties.map((item) => ({ title: item.name, description: item.summary, category: "房產", image: `/properties/${item.slug}/${item.cover}`, href: `/property/${item.slug}`, date: item.date })),
].sort((a, b) => b.date.localeCompare(a.date));
