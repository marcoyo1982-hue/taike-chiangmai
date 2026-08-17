import Link from "next/link";

type ArticleLink = {
  slug: string;
  title: string;
};

type RelatedArticleLinksProps = {
  currentSlug: string;
  articles: ArticleLink[];
  basePath: "/food" | "/life";
  title: string;
};

export default function RelatedArticleLinks({
  currentSlug,
  articles,
  basePath,
  title,
}: RelatedArticleLinksProps) {
  const relatedArticles = articles.filter((article) => article.slug !== currentSlug);

  if (relatedArticles.length === 0) return null;

  return (
    <section className="mt-20 border-t border-stone-200 pt-10">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
        MORE TO EXPLORE
      </p>
      <h2 className="mt-2 text-3xl font-bold text-gray-900">{title}</h2>
      <p className="mt-3 text-gray-600">繼續閱讀更多台客在清邁的分享。</p>

      <ul className="mt-6 space-y-3">
        {relatedArticles.map((article) => (
          <li key={article.slug}>
            <Link
              href={`${basePath}/${article.slug}`}
              className="group inline-flex items-center gap-3 text-base font-medium text-emerald-700 transition hover:text-emerald-900"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-sm transition group-hover:bg-emerald-100">
                →
              </span>
              <span className="group-hover:underline">{article.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
