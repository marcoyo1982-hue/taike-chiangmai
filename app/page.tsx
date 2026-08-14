import FeatureCards from "../components/FeatureCards";
import LatestPosts from "../components/LatestPosts";
import AboutMe from "../components/AboutMe";
import OpeningCover from "../components/OpeningCover";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <OpeningCover />

      <main className="relative flex min-h-[78vh] lg:min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0">

  {/* 手機版背景（測試用） */}
<div
  className="absolute inset-0 bg-cover bg-center lg:hidden"
  style={{
    backgroundImage: "url('/images/opening-cover.jpg')",
  }}
/>

  {/* 桌機版背景 */}
  <div
    className="absolute inset-0 hidden bg-cover bg-center lg:block"
    style={{
      backgroundImage: "url('/images/hero/hero-v1.jpg')",
    }}
  />

  <div className="absolute inset-0 bg-black/45"></div>

</div>

        <div className="relative z-10 -mt-6 lg:-mt-10 px-6 text-center drop-shadow-2xl">

          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.45em] text-white/70 lg:mb-6 lg:text-xs">
            CHIANG MAI • THAILAND
          </p>

          <p className="mb-4 text-sm font-semibold text-emerald-100 lg:text-base">
            給想旅行、長住或置產清邁的台灣人
          </p>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-8xl">
            探索真正的
            <br className="lg:hidden" />
            清邁生活
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-200 lg:mt-8 lg:max-w-3xl lg:text-2xl lg:leading-9">
            台灣人在清邁
            <br />
            最完整的生活指南
          </p>

          <div className="mt-8 flex flex-col gap-4 lg:mt-10 lg:flex-row lg:justify-center">
            <Link
              href="/property"
              className="inline-flex h-14 w-full items-center justify-center rounded-full bg-emerald-600 text-white transition-all duration-300 hover:bg-emerald-500 hover:shadow-xl lg:h-16 lg:w-56"
            >
              🏡 探索房產 →
            </Link>

            <a
              href="#discover"
              className="inline-flex h-14 w-full items-center justify-center rounded-full border border-white/50 text-white transition-all duration-300 hover:border-white hover:bg-white/10 hover:shadow-xl lg:h-16 lg:w-56"
            >
              🌿 認識清邁 →
            </a>
          </div>
        </div>
      </main>

      <FeatureCards />

      <LatestPosts />

      <AboutMe />
    </>
  );
}
