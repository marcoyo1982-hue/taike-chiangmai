import { Metadata } from "next";
import { notFound } from "next/navigation";
import { properties } from "@/data/properties";

import Breadcrumb from "@/components/Breadcrumb";
import Gallery from "@/components/Gallery";
import PropertyInfo from "@/components/PropertyInfo";
import PropertyVideo from "@/components/PropertyVideo";
import GoogleMap from "@/components/GoogleMap";
import PdfDownload from "@/components/PdfDownload";
import FAQ from "@/components/FAQ";
import ConsultantCard from "@/components/ConsultantCard";
import RelatedProperties from "@/components/RelatedProperties";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const property = properties.find(
    (item) => item.slug === slug
  );

  if (!property) {
    return {};
  }

  return {
    title: `${property.name}｜台客在清邁`,
    description: property.description,

    openGraph: {
      title: `${property.name}｜台客在清邁`,
      description: property.description,
      images: [
        `/properties/${property.slug}/cover.jpg`,
      ],
    },
  };
}

export default async function PropertyDetailPage({
  params,
}: Props) {

  const { slug } = await params;

  const property = properties.find(
    (item) => item.slug === slug
  );

  if (!property) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">

      <Breadcrumb title={property.name} />

      <h1 className="text-5xl font-bold">
        {property.name}
      </h1>

      

      <p className="mt-3 text-xl text-gray-500">
        {property.subtitle}
      </p>

      <img
        src={`/properties/${property.slug}/cover.jpg`}
        alt={property.name}
        className="mt-10 h-[520px] w-full rounded-3xl object-cover"
      />

      <p className="mt-8 leading-8 text-gray-700 whitespace-pre-line">
        {property.description}
      </p>

      <Gallery
  folder="properties"
  slug={property.slug}
  images={property.gallery}
/>



      <PropertyVideo
  slug={property.slug}
  videos={property.videos}
/>

      <PropertyInfo
        info={property.info}
        landmarks={property.landmarks}
      />

      <GoogleMap
        embed={property.embed}
        link={property.map}
      />

      <PdfDownload
        pdf={property.pdf}
      />

      <ConsultantCard
        personalLine={property.personalLine}
        lineCommunity={property.lineCommunity}
      />

      <FAQ
        faqs={property.faqs}
      />

      <RelatedProperties
        currentSlug={property.slug}
        properties={properties}
      />

    </main>
  );
}