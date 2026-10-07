import type { Metadata } from "next";
import ArticleDirectory from "@/components/ArticleDirectory";
import { articleCatalog } from "@/data/article-catalog";

export const metadata: Metadata = {
  title: "文章總覽｜台客在清邁", description: "搜尋清邁房產、美食、旅遊與在地生活文章。",
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  return <main className="mx-auto max-w-7xl px-6 py-12 sm:py-20">
    <p className="text-sm font-semibold tracking-widest text-emerald-700">EXPLORE CHIANG MAI</p>
    <h1 className="mt-3 text-3xl font-bold sm:text-5xl">文章總覽</h1>
    <p className="mt-4 leading-7 text-gray-600">從找房到日常生活，找到你現在需要的清邁資訊。</p>
    <ArticleDirectory articles={articleCatalog} />
  </main>;
}
