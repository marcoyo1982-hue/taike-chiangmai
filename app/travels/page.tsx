import Link from "next/link";
import { travels } from "@/data/travels";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "清邁旅遊｜台客在清邁", description: "清邁景點、市集、在地體驗與旅行準備資訊。", alternates: { canonical: "/travels" }, openGraph: { title: "清邁旅遊｜台客在清邁", description: "探索清邁景點、市集與在地體驗。", images: ["/images/hero/hero-v1.jpg"] } };

export default function TravelsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">

      <h1 className="text-5xl font-bold">
        清邁旅遊
      </h1>

      <p className="mt-4 text-gray-600">
        精選清邁景點、寺廟、咖啡廳與在地特色體驗。
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-3">

        {travels.map((travel) => (

          <Link
            key={travel.slug}
            href={`/travels/${travel.slug}`}
            className="overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:shadow-lg"
          >

            <img
              src={`/travels/${travel.slug}/${travel.cover}`}
              alt={travel.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-bold">
                {travel.name}
              </h2>

              <p className="mt-2 text-gray-500">
                {travel.subtitle}
              </p>

              <p className="mt-6 font-semibold text-emerald-600">
                查看景點 →
              </p>

            </div>

          </Link>

        ))}

      </div>

    </main>
  );
}
