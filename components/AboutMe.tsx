import Image from "next/image";
import { site } from "@/data/site";

export default function AboutMe() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">

        {/* 左邊照片 */}
        <div className="flex justify-center">
          <Image
            src="/images/about/taike-v2.jpg"
            alt="台客"
            width={420}
            height={460}
            className="h-[520px] w-full rounded-3xl object-cover object-top shadow-xl"
          />
        </div>

        {/* 右邊文字 */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
            ABOUT ME
          </p>

          <h2 className="mt-4 text-6xl font-bold text-gray-900">
            我是台客
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            我住在清邁，也把每天看到的清邁分享給台灣人。
            從街邊小吃、特色咖啡館，到房地產與在地生活，希望讓更多人認識真正的清邁。
          </p>

          <p className="mt-4 text-lg leading-9 text-gray-600">
            如果你正在規劃清邁旅行、考慮長住，或想了解清邁房地產，
            我希望我的經驗，能幫助你少走一些彎路，也更快找到屬於自己的清邁生活。
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">

            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-stone-100 p-4 text-center transition hover:bg-emerald-600 hover:text-white"
            >
              📘 Facebook
            </a>

            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-stone-100 p-4 text-center transition hover:bg-emerald-600 hover:text-white"
            >
              📷 Instagram
            </a>

            <a
              href={site.threads}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-stone-100 p-4 text-center transition hover:bg-emerald-600 hover:text-white"
            >
              🧵 Threads
            </a>

            <a
              href={site.lineCommunity}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-stone-100 p-4 text-center transition hover:bg-emerald-600 hover:text-white"
            >
              💬 LINE 社群
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}