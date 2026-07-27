import { Metadata } from "next";
import { notFound } from "next/navigation";
import { foods } from "@/data/foods";

import Breadcrumb from "@/components/Breadcrumb";
import Gallery from "@/components/Gallery";
import GoogleMap from "@/components/GoogleMap";
import FoodInfo from "@/components/FoodInfo";
import FoodRating from "@/components/FoodRating";
import FoodRecommend from "@/components/FoodRecommend";
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

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const food = foods.find(
    (item) => item.slug === slug
  );

  if (!food) {
    return {};
  }

  return {
    title: `${food.name}｜台客在清邁`,
    description: food.description,

    openGraph: {
      title: `${food.name}｜台客在清邁`,
      description: food.description,
      images: [
        `/images/foods/${food.slug}/${food.cover}`,
      ],
    },
  };
}

export default async function FoodDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const food = foods.find(
    (item) => item.slug === slug
  );

  if (!food) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">

      <Breadcrumb
        title={food.name}
      />

      <h1 className="text-5xl font-bold">
        {food.name}
      </h1>

      <p className="mt-4 text-xl text-gray-500">
        {food.subtitle}
      </p>

      <FoodRating
  rating={food.rating}
/>

<img

      
        src={`/images/foods/${food.slug}/${food.cover}`}
        alt={food.name}
        className="mt-10 h-[500px] w-full rounded-3xl object-cover"
      />

      <section className="mt-16">

        <h2 className="text-3xl font-bold">
          店家介紹
        </h2>

        <p className="mt-6 whitespace-pre-line leading-8 text-gray-700">
          {food.description}
        </p>

      </section>

      <FoodRecommend
        items={food.recommend}
      />

      <Gallery
        folder="foods"
        slug={food.slug}
        images={food.gallery}
        title="店家照片"
      />

      <GoogleMap
        embed={food.embed}
        link={food.map}
      />

      <FoodInfo
        address={food.address}
        openingHours={food.openingHours}
        phone={food.phone}
        price={food.price}
      />

    </main>
  );
}
