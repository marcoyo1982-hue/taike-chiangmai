import Navbar from "../components/Navbar";
import FeatureCards from "../components/FeatureCards";
import LatestPosts from "../components/LatestPosts";
import AboutMe from "../components/AboutMe";
import OpeningCover from "../components/OpeningCover";
export default function Home() {
  return (
    <>
      <OpeningCover />

      <Navbar />
      {/* Hero */}
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/hero/hero-v1.jpg')",
  }}
>
  <div className="absolute inset-0 bg-black/45"></div>
</div>

        <div className="relative z-10 -mt-10 px-6 text-center drop-shadow-2xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.45em] text-white/70">
            CHIANG MAI • THAILAND
          </p>

          <h1 className="text-6xl font-extrabold tracking-tight text-white md:text-8xl">
            探索真正的清邁生活
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-200 md:text-2xl">
  從旅遊、美食、咖啡到房地產，
  <br />
  陪你認識真正的清邁。
</p>

          <div className="mt-10 flex justify-center gap-4">
  <a
    href="/property"
    className="inline-flex h-16 w-56 items-center justify-center rounded-full bg-emerald-600 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-500 hover:shadow-xl"
  >
    🏡 探索房產 →
  </a>

  <a
    href="#discover"
    className="inline-flex h-16 w-56 items-center justify-center rounded-full border border-white/50 text-white transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/10 hover:shadow-xl"
  >
    🌿 認識清邁 →
  </a>
</div>
        </div>
      </main>

      {/* Feature Cards */}
      <FeatureCards />

      <LatestPosts />

      <AboutMe />
    </>
  );
}