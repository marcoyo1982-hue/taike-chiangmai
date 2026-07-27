import Link from "next/link";
import { Food } from "@/data/foods/types";

type Props = {
  currentSlug: string;
  foods: Food[];
};

export default function RelatedFoods({
  currentSlug,
  foods,
}: Props) {
  const related = foods.filter(
    (food) => food.slug !== currentSlug
  );

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold">
        其他推薦美食
      </h2>

      <div className="mt-8 grid gap-8 md:grid-cols-3">
        {related.slice(0, 3).map((food) => (
          <Link
            key={food.slug}
            href={`/food/${food.slug}`}
            className="overflow-hidden rounded-3xl border bg-white shadow-sm hover:shadow-lg"
          >
            <img
              src={`/foods/${food.slug}/${food.cover}`}
              alt={food.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-bold">
                {food.name}
              </h3>

              <p className="mt-2 text-gray-500">
                {food.subtitle}
              </p>

              <p className="mt-6 font-semibold text-emerald-600">
                查看文章 →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}