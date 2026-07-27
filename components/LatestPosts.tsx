import Image from "next/image";
import Link from "next/link";
import { latestPosts } from "@/data/latest-posts";

export default function LatestPosts() {
  const posts = latestPosts;

  return (
    <section className="bg-stone-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
              Latest Articles
            </p>

            <h2 className="mt-3 text-4xl font-bold text-gray-900">
              最新文章
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-500">
              分享我在清邁生活的觀察、美食推薦、旅遊資訊，以及房產經驗。
            </p>
          </div>

          <a
            href="#"
            className="hidden font-semibold text-emerald-600 md:block"
          >
            查看全部 →
          </a>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.title} href={post.href}>
              <article className="overflow-hidden rounded-[32px] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <span className="text-sm font-semibold text-emerald-600">
                    {post.category}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold">
                    {post.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-500">
                    {post.description}
                  </p>

                  <div className="mt-8 text-sm font-semibold text-emerald-600">
                    閱讀文章 →
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}