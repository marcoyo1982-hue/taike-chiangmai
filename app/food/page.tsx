import Link from "next/link";
import { foods } from "@/data/foods";

export default function FoodPage() {
  const featuredFoods = foods.slice(0, 4);
  const moreFoods = foods.slice(4);

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-5xl font-bold">清邁美食</h1>

      <p className="mt-4 text-gray-600">
        台客親自吃過，值得分享的清邁在地美食。
      </p>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {featuredFoods.map((food) => (
          <Link
            key={food.slug}
            href={`/food/${food.slug}`}
            className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              src={`/images/foods/${food.slug}/${food.cover}`}
              alt={food.name}
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                {food.category}
              </p>

              <h2 className="mt-2 text-3xl font-bold">{food.name}</h2>

              <p className="mt-3 text-gray-500">{food.subtitle}</p>

              <div className="mt-6 flex items-center justify-between">
                <span className="font-semibold text-amber-500">{food.rating}</span>
                <span className="font-semibold text-emerald-600 transition group-hover:translate-x-1">
                  查看文章 →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {moreFoods.length > 0 && (
        <section className="mt-16 border-t border-stone-200 pt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
            MORE FOOD STORIES
          </p>
          <h2 className="mt-2 text-3xl font-bold">更多清邁美食文章</h2>

          <ul className="mt-6 divide-y divide-stone-200">
            {moreFoods.map((food) => (
              <li key={food.slug}>
                <Link
                  href={`/food/${food.slug}`}
                  className="group flex items-center justify-between gap-5 py-5 transition hover:text-emerald-700"
                >
                  <div>
                    <p className="text-sm font-semibold text-emerald-700">{food.category}</p>
                    <h3 className="mt-1 text-xl font-bold text-gray-900 group-hover:text-emerald-700">
                      {food.name}
                    </h3>
                    <p className="mt-1 text-gray-600">{food.subtitle}</p>
                  </div>
                  <span className="shrink-0 font-semibold text-emerald-700">閱讀文章 →</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
