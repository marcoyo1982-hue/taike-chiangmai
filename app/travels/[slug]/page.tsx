import { notFound } from "next/navigation";
import { travels } from "@/data/travels";
import TravelInfo from "../../../components/TravelInfo";
import GoogleMap from "@/components/GoogleMap";
import Breadcrumb from "@/components/Breadcrumb";
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
  title={travel.name}
/>
      <h1 className="text-5xl font-bold">
        {travel.name}
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        {travel.subtitle}
      </p>

      <img
        src={`/travels/${travel.slug}/${travel.cover}`}
        alt={travel.name}
        className="mt-10 h-[500px] w-full rounded-3xl object-cover"
      />

      <section className="mt-16">

        <h2 className="text-3xl font-bold">
          景點介紹
        </h2>

        <p className="mt-6 leading-8 text-gray-700">
          {travel.description}
        </p>

      </section>
     <TravelInfo
  address={travel.address}
  openingHours={travel.openingHours}
  ticket={travel.ticket}
  transportation={travel.transportation}
/>

<GoogleMap
  embed={travel.embed}
  link={travel.map}
/>

<LineCTA line={site.lineCommunity} />
    </main>
  );
}
