import { articleCatalog } from "./article-catalog";

export const latestPosts = articleCatalog.filter((item) => item.date).slice(0, 3);
