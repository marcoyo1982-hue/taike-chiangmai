import Link from "next/link";
import { articles } from "@/data/articles";

export default function ArticlesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-5xl font-bold">最新文章</h1>

      <p className="mt-4 text-gray-600">
        台客在清邁分享的旅遊、美食、生活與房產資訊。
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="overflow-hidden rounded-3xl border bg-white shadow-sm"
          >
            <img
              src={article.image}
              alt={article.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <p className="text-sm text-emerald-600">
                {article.category}
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                {article.title}
              </h2>

              <p className="mt-6 font-semibold text-emerald-600">
                閱讀文章 →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}