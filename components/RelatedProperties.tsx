import Link from "next/link";
import { Property } from "@/data/properties/types";

type Props = {
  currentSlug: string;
  properties: Property[];
};

export default function RelatedProperties({
  currentSlug,
  properties,
}: Props) {
  const related = properties.filter(
    (item) => item.slug !== currentSlug
  );

  return (
    <section className="mt-24">
      <h2 className="text-3xl font-bold">
        你可能也喜歡
      </h2>

      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {related.map((property) => (
          <Link
            key={property.slug}
            href={`/property/${property.slug}`}
            className="overflow-hidden rounded-2xl border transition hover:shadow-lg"
          >
            <img
              src={`/properties/${property.slug}/gallery/01.jpg`}
              alt={property.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                {property.name}
              </h3>

              <p className="mt-2 text-gray-500">
                {property.subtitle}
              </p>

              <span className="mt-5 inline-block font-semibold text-emerald-600">
                查看建案 →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}