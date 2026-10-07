import Link from "next/link";

import { life as articles } from "@/data/life";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "清邁在地生活｜台客在清邁", description: "台灣人在清邁的生活觀察、交通文化與日常經驗。", alternates: { canonical: "/life" }, openGraph: { title: "清邁在地生活｜台客在清邁", description: "閱讀台客在清邁的日常生活觀察。", images: ["/images/hero/hero-v1.jpg"] } };

export default function LifePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-5xl font-bold">在地生活</h1>

      <p className="mt-4 text-gray-600">
        台灣人在清邁生活最常遇到的大小事。
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/life/${article.slug}`}
            className="overflow-hidden rounded-3xl border bg-white shadow-sm hover:shadow-lg"
          >
            <img
              src={`/images/life/${article.slug}/${article.cover}`}
              alt={article.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <p className="text-sm text-emerald-600">
                {article.category}
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                {article.title}
              </h2>

              <p className="mt-6 font-semibold text-emerald-600">
                查看文章 →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
