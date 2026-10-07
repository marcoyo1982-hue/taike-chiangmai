import type { Metadata } from "next";
import ArticleBody from "@/components/ArticleBody";
import { notFound } from "next/navigation";
import { travels } from "@/data/travels";
import TravelInfo from "../../../components/TravelInfo";
import GoogleMap from "@/components/GoogleMap";
import Breadcrumb from "@/components/Breadcrumb";
import Gallery from "@/components/Gallery";
import LineCTA from "@/components/LineCTA";
import { site } from "@/data/site";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return travels.map((travel) => ({
    slug: travel.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const travel = travels.find((item) => item.slug === slug);
  if (!travel) return {};
  return { title: `${travel.name}｜台客在清邁`, description: travel.subtitle,
    alternates: { canonical: `/travels/${slug}` },
    openGraph: { title: travel.name, description: travel.subtitle, type: "article", url: `/travels/${slug}`, images: [`/travels/${slug}/${travel.cover}`] },
  };
}
export default async function TravelDetailPage({
  params,
}: Props) {

  const { slug } = await params;

  const travel = travels.find(
    (item) => item.slug === slug
  );

  if (!travel) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
<Breadcrumb
  title={travel.name} category={{ name: "旅遊", href: "/travels" }}
/>
      <h1 className="text-3xl leading-snug font-bold sm:text-5xl">
        {travel.name}
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        {travel.subtitle}
      </p>

      <img
        src={`/travels/${travel.slug}/${travel.cover}`}
        alt={travel.name}
        className="mt-10 h-auto w-full rounded-3xl"
      />

      {(travel.address || travel.openingHours || travel.ticket || travel.transportation || travel.phone) && (
        <TravelInfo
          address={travel.address}
          openingHours={travel.openingHours}
          ticket={travel.ticket}
          transportation={travel.transportation}
          phone={travel.phone}
        />
      )}

      {slug === "thailand-entry-rules-2026" && <aside className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 leading-7">
        <h2 className="font-bold">出發前，請再核對官方規定</h2>
        <p className="mt-2 text-sm">本頁入境天數與 TDAC 填寫時限核對日期：<time dateTime="2026-10-07">2026 年 10 月 7 日</time>。實際入境資格與停留期限以官方規定及入境審查為準。</p>
        <ul className="mt-3 space-y-2 underline underline-offset-4">
          <li><a href="https://tteo.thaiembassy.org/th/page/visa-exempt-voa?menu=5d7dc71915e39c072c004ead" target="_blank" rel="noopener noreferrer">泰國貿易經濟辦事處：免簽與落地簽</a></li>
          <li><a href="https://helsinki.thaiembassy.org/en/publicservice/updated-tourist-visa-exemption-scheme-30-days-effective-15-september-2?menu=5d80876d15e39c3354007bb2&page=5d80876d15e39c3354007bb0" target="_blank" rel="noopener noreferrer">泰國駐外使館：2026 年 9 月 15 日生效公告</a></li>
          <li><a href="https://tdac.immigration.go.th/manual/en/faq.html" target="_blank" rel="noopener noreferrer">泰國移民局：TDAC 官方說明（免費填寫）</a></li>
        </ul>
      </aside>}
      <section className="mt-16">

        <h2 className="text-3xl font-bold">
          {travel.contentTitle ?? "景點介紹"}
        </h2>

        <ArticleBody text={travel.description} />

      </section>

      <Gallery
        folder="travels"
        slug={travel.slug}
        images={travel.gallery}
        title={travel.galleryTitle ?? "店內環境"}
        downloadable={travel.downloadableGallery}
      />
      {travel.embed && (
        <GoogleMap
          embed={travel.embed}
          link={travel.map}
        />
      )}

      {(travel.map || travel.embed) && <LineCTA line={site.lineCommunity} />}
    </main>
  );
}
