import { notFound } from "next/navigation";
import { life } from "@/data/life";
import LineCTA from "@/components/LineCTA";
import RelatedArticleLinks from "@/components/RelatedArticleLinks";
import { site } from "@/data/site";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleBody from "@/components/ArticleBody";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = life.find((item) => item.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title}｜台客在清邁`, description: article.summary,
    alternates: { canonical: `/life/${slug}` },
    openGraph: { title: article.title, description: article.summary, type: "article", url: `/life/${slug}`, images: [`/images/life/${slug}/${article.cover}`] },
  };
}

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
      <Breadcrumb title={article.title} category={{ name: "生活", href: "/life" }} />
      <h1 className="text-3xl leading-snug font-bold sm:text-5xl">
        {article.title}
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        {article.subtitle}
      </p>
      <p className="mt-4 text-sm text-gray-500">發布日期：<time dateTime={article.date}>{article.date}</time></p>

      <img
  src={`/images/life/${article.slug}/${article.cover}`}
  alt={article.title}
  className="mt-10 max-h-[500px] w-full rounded-3xl object-cover"
/>

      <section className="mt-16">
        <h2 className="text-3xl font-bold">
          文章內容
        </h2>

        <ArticleBody text={article.description} />
      </section>

      <RelatedArticleLinks
        currentSlug={article.slug}
        articles={life.map((item) => ({ slug: item.slug, title: item.title }))}
        basePath="/life"
        title="更多清邁生活文章"
      />

      <LineCTA line={site.lineCommunity} />
    </main>
  );
}
