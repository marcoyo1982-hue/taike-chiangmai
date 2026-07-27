import helmet from "./life/helmet";
import chiangmaiChange from "./life/chiangmai-change";
import chiangmaiRedTruck from "./life/chiangmai-red-truck";

export const latestPosts = [
  {
    title: helmet.title,
    description: helmet.summary,
    category: helmet.category,
    image: `/images/life/${helmet.slug}/${helmet.cover}`,
    href: `/life/${helmet.slug}`,
    date: helmet.date,
  },
  {
    title: chiangmaiChange.title,
    description: chiangmaiChange.summary,
    category: chiangmaiChange.category,
    image: `/images/life/${chiangmaiChange.slug}/${chiangmaiChange.cover}`,
    href: `/life/${chiangmaiChange.slug}`,
    date: chiangmaiChange.date,
  },
  {
    title: chiangmaiRedTruck.title,
    description: chiangmaiRedTruck.summary,
    category: chiangmaiRedTruck.category,
    image: `/images/life/${chiangmaiRedTruck.slug}/${chiangmaiRedTruck.cover}`,
    href: `/life/${chiangmaiRedTruck.slug}`,
    date: chiangmaiRedTruck.date,
  },
].sort((a, b) => b.date.localeCompare(a.date));