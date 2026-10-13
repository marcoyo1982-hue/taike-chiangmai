import { notFound } from "next/navigation";
import { life } from "@/data/life";
import LineCTA from "@/components/LineCTA";
import RelatedArticleLinks from "@/components/RelatedArticleLinks";
import { site } from "@/data/site";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleBody from "@/components/ArticleBody";
import Image from "next/image";

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

      {article.sections ? <Image
        src={`/images/life/${article.slug}/${article.cover}`}
        alt={article.title}
        width={1122}
        height={1402}
        sizes="(max-width: 768px) 100vw, 672px"
        className="mx-auto mt-10 h-auto w-full max-w-2xl rounded-2xl"
      /> : <img
  src={`/images/life/${article.slug}/${article.cover}`}
  alt={article.title}
  className="mt-10 max-h-[500px] w-full rounded-3xl object-cover"
/>}

      <section className="mt-16">
        <h2 className="text-3xl font-bold">
          文章內容
        </h2>

        {article.sections ? <div className="mx-auto max-w-2xl">
          {article.sections.map((section) => <div key={section.image} className="mb-12">
            <ArticleBody text={section.text} />
            <a href={`/images/life/${article.slug}/${section.image}`} target="_blank" rel="noopener noreferrer" aria-label={`查看原圖：${section.alt}`} className="mt-8 block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700">
              <Image src={`/images/life/${article.slug}/${section.image}`} alt={section.alt} width={1122} height={1402} sizes="(max-width: 768px) 100vw, 672px" className="h-auto w-full rounded-2xl" />
            </a>
          </div>)}
        </div> : <ArticleBody text={article.description} />}
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
