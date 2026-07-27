import Link from "next/link";
import { travels } from "@/data/travels";

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