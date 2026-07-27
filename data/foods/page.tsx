import Link from "next/link";
import { foods } from "@/data/foods";

export default function FoodsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">

      <h1 className="text-5xl font-bold">
        清邁美食
      </h1>

      <p className="mt-4 text-gray-600">
        台客在清邁精選美食，帶你吃遍真正的清邁。
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-3">

        {foods.map((food) => (

          <Link
            key={food.slug}
            href={`/foods/${food.slug}`}
            className="overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:shadow-lg"
          >

            <img
              src={`/foods/${food.slug}/${food.cover}`}
              alt={food.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-bold">
                {food.name}
              </h2>

              <p className="mt-2 text-gray-500">
                {food.subtitle}
              </p>

              <p className="mt-6 font-semibold text-emerald-600">
                查看介紹 →
              </p>

            </div>

          </Link>

        ))}

      </div>

    </main>
  );
}