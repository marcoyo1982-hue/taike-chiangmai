import { Metadata } from "next";
import { notFound } from "next/navigation";
import { foods } from "@/data/foods";

import Breadcrumb from "@/components/Breadcrumb";
import Gallery from "@/components/Gallery";
import GoogleMap from "@/components/GoogleMap";
import ArticleBody from "@/components/ArticleBody";
import FoodInfo from "@/components/FoodInfo";
import FoodRating from "@/components/FoodRating";
import FoodRecommend from "@/components/FoodRecommend";
import FoodVideo from "@/components/FoodVideo";
import LineCTA from "@/components/LineCTA";
import RelatedArticleLinks from "@/components/RelatedArticleLinks";
import { site } from "@/data/site";
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
    description: food.summary,

    alternates: { canonical: `/food/${slug}` },
    openGraph: {
      url: `/food/${slug}`, type: "article",
      title: `${food.name}｜台客在清邁`,
      description: food.summary,
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
        title={food.name} category={{ name: "美食", href: "/food" }}
      />

      <h1 className="text-3xl leading-snug font-bold sm:text-5xl">
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
        className="mt-10 h-auto w-full rounded-3xl"
      />

<p className="mt-4 text-sm text-gray-500">發布日期：<time dateTime={food.date}>{food.date}</time>；營業時間與價格請以店家現場公告為準。</p>
      {(food.address || food.openingHours || food.phone || food.price) && (
        <FoodInfo
          address={food.address}
          openingHours={food.openingHours}
          phone={food.phone}
          price={food.price}
        />
      )}

{food.map && <a href={food.map} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-full bg-emerald-800 px-6 py-3 font-semibold text-white">開啟 Google 地圖 →</a>}
      <FoodRecommend items={food.recommend} />
      <section className="mt-16">

        <h2 className="text-3xl font-bold">
          店家介紹
        </h2>

        <ArticleBody text={food.description} />

      </section>

      <FoodVideo
        slug={food.slug}
        videos={food.videos}
      />

      {food.gallery.length > 0 && (
        <Gallery
          folder="foods"
          slug={food.slug}
          images={food.gallery}
          title="店家照片"
        />
      )}

      <GoogleMap
        embed={food.embed}
        link={food.map}
      />

      <RelatedArticleLinks
        currentSlug={food.slug}
        articles={foods.map((item) => ({ slug: item.slug, title: item.name }))}
        basePath="/food"
        title="更多清邁美食文章"
      />

      <LineCTA line={site.lineCommunity} />

    </main>
  );
}
