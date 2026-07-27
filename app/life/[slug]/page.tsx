import { notFound } from "next/navigation";
import { life } from "@/data/life";

export default async function LifeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = life.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-5xl font-bold">
        {article.title}
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        {article.subtitle}
      </p>

      <img
  src={`/images/life/${article.slug}/${article.cover}`}
  alt={article.title}
  className="mt-10 h-[500px] w-full rounded-3xl object-cover"
/>

      <section className="mt-16">
        <h2 className="text-3xl font-bold">
          文章內容
        </h2>

        <p className="mt-6 whitespace-pre-line leading-8 text-gray-700">
          {article.description}
        </p>
      </section>
    </main>
  );
}