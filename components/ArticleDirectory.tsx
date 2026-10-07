"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { CatalogArticle } from "@/data/article-catalog";

export default function ArticleDirectory({ articles }: { articles: CatalogArticle[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("全部");
  const filtered = articles.filter((item) => (category === "全部" || item.category === category) && `${item.title} ${item.description}`.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()));
  return <>
    <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-5">
      <label htmlFor="article-search" className="font-semibold">搜尋文章</label>
      <input id="article-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="輸入店名、建案或生活主題" className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3" />
      <div className="mt-4 flex flex-wrap gap-2" aria-label="文章分類">
        {["全部", "房產", "美食", "旅遊", "生活"].map((name) => <button key={name} type="button" aria-pressed={category === name} onClick={() => setCategory(name)} className={`min-h-11 rounded-full px-5 py-2 font-medium ${category === name ? "bg-emerald-800 text-white" : "bg-stone-100 text-gray-700 hover:bg-emerald-50"}`}>{name}</button>)}
      </div>
    </div>
    <p role="status" className="mt-6 text-sm text-gray-600">找到 {filtered.length} 篇文章</p>
    {filtered.length === 0 && <div className="py-12 text-center"><p>沒有符合的文章，試試其他關鍵字或分類。</p><button type="button" onClick={() => { setQuery(""); setCategory("全部"); }} className="mt-4 rounded-full border px-5 py-3">清除搜尋條件</button></div>}
    <div className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {filtered.map((item) => <Link key={item.href} href={item.href} className="overflow-hidden rounded-3xl border border-stone-200 bg-white transition hover:shadow-lg">
        <div className="relative aspect-[16/10]"><Image src={item.image} alt={item.title} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover" /></div>
        <div className="p-6"><p className="text-sm text-emerald-800">{item.category}{item.date && <> · <time dateTime={item.date}>{item.date}</time></>}</p><h2 className="mt-3 text-xl font-bold leading-8">{item.title}</h2><p className="mt-3 line-clamp-3 leading-7 text-gray-600">{item.description}</p><p className="mt-5 font-semibold text-emerald-800">閱讀文章 →</p></div>
      </Link>)}
    </div>
  </>;
}
