import Link from "next/link";
import { properties } from "@/data/properties";

export default function PropertyPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-5xl font-bold">清邁房產</h1>

      <p className="mt-4 text-gray-600">
        精選清邁公寓與別墅，點擊查看完整建案資訊。
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {properties.map((property) => (
          <Link
            key={property.slug}
            href={`/property/${property.slug}`}
            className="overflow-hidden rounded-3xl border bg-white shadow-sm"
          >
            <img
              src={`/properties/${property.slug}/cover.jpg`}
              alt={property.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold">
                {property.name}
              </h2>

              <p className="mt-2 text-gray-500">
                {property.subtitle}
              </p>

              <p className="mt-6 font-semibold text-emerald-600">
                查看建案 →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}