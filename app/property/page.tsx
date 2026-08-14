import Link from "next/link";
import { properties } from "@/data/properties";

const propertyGuides: Record<string, { label: string; detail: string }> = {
  "the-next-jedyod-4": {
    label: "適合首購與自住",
    detail: "想住進 Jedyod 生活圈的人",
  },
  "ping-live-condo": {
    label: "市中心生活機能",
    detail: "重視交通與日常便利的人",
  },
  "astra-infinite": {
    label: "長康核心地段",
    detail: "看重飯店、夜市與出租潛力的人",
  },
};

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
            className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative overflow-hidden">
              <img
                src={`/properties/${property.slug}/cover.jpg`}
                alt={property.name}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-sm font-bold text-emerald-700 shadow-sm">
                {propertyGuides[property.slug]?.label}
              </span>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold">
                {property.name}
              </h2>

              <p className="mt-2 text-gray-500">
                {property.subtitle}
              </p>

              <p className="mt-4 text-sm font-medium text-gray-600">
                {propertyGuides[property.slug]?.detail}
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
