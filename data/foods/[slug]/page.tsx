import { notFound } from "next/navigation";
import { foods } from "@/data/foods";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return foods.map((food) => ({
    slug: food.slug,
  }));
}

export default async function FoodDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const food = foods.find((item) => item.slug === slug);

  if (!food) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">

      {/* Hero */}
      <img
        src={`/images/foods/${food.slug}/${food.cover}`}
        alt={food.name}
        className="h-[520px] w-full rounded-3xl object-cover"
      />

      <div className="mt-10">
        <p className="text-emerald-600 font-semibold uppercase tracking-widest">
          {food.category}
        </p>

        <h1 className="mt-2 text-5xl font-bold">
          {food.name}
        </h1>

        <p className="mt-4 text-xl text-gray-600">
          {food.subtitle}
        </p>

        <div className="mt-8 rounded-2xl bg-emerald-50 p-6">
          <p className="text-sm font-semibold text-emerald-700">
            台客推薦指數
          </p>

          <p className="mt-2 text-4xl font-bold">
            {food.rating}
          </p>
        </div>
      </div>

      {/* Gallery */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold">
          照片
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-6">
          {food.gallery.map((image) => (
            <img
              key={image}
              src={`/images/foods/${food.slug}/${image}`}
              alt={food.name}
              className="rounded-2xl object-cover"
            />
          ))}
        </div>
      </section>

      {/* 台客怎麼看 */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold">
          台客怎麼看？
        </h2>

        <p className="mt-6 leading-9 text-gray-700">
          {food.description}
        </p>
      </section>

      {/* 推薦必點 */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold">
          推薦必點
        </h2>

        <ul className="mt-6 list-disc space-y-3 pl-6 text-lg text-gray-700">
          {food.recommend.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* 店家資訊 */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold">
          店家資訊
        </h2>

        <div className="mt-8 space-y-4 text-lg">
          <p>
            <strong>地址：</strong>
            {food.address}
          </p>

          <p>
            <strong>營業時間：</strong>
            {food.openingHours}
          </p>

          <p>
            <strong>平均消費：</strong>
            {food.price}
          </p>
        </div>

        <iframe
          src={food.map}
          className="mt-8 h-[450px] w-full rounded-3xl border"
          loading="lazy"
        />
      </section>

      {/* YouTube */}
      {food.youtube && (
        <section className="mt-20">
          <h2 className="text-3xl font-bold">
            影片介紹
          </h2>

          <div className="mt-8 aspect-video overflow-hidden rounded-3xl">
            <iframe
              src={food.youtube}
              className="h-full w-full"
              allowFullScreen
            />
          </div>
        </section>
      )}

    </main>
  );
}