import { notFound } from "next/navigation";
import { articles } from "@/data/articles";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticleDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const article = articles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-emerald-600 font-semibold">
        {article.category}
      </p>

      <h1 className="mt-4 text-5xl font-bold">
        {article.title}
      </h1>

      <img
        src={article.image}
        alt={article.title}
        className="mt-10 w-full rounded-3xl object-cover"
      />

      <div className="prose mt-12 max-w-none">
        文章內容（第二階段再完成）
      </div>
    </main>
  );
}