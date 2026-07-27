import Link from "next/link";

const articles = [
  {
    slug: "helmet",
    title: "泰國人為什麼很多都不戴安全帽？",
    category: "交通文化",
    image: "/images/articles/helmet.jpg",
  },
  {
    slug: "chiangmai-change",
    title: "「為什麼明明是平日下午，MAYA 和 Central Festival 還是一堆人？大家都不用上班嗎？」",
    category: "簽證",
    image: "/images/articles/khaosoi.jpg",
  },
  {
    slug: "chiangmai-red-truck",
    title: "【清邁最強省錢神車攻略！30泰銖跑遍全市區 🇹🇭】",
    category: "生活資訊",
    image: "/images/articles/property.jpg",
  },
];

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
              src={article.image}
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