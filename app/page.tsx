import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950 via-emerald-900 to-black"></div>
        <div className="relative z-10 -mt-20 text-center px-6">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.45em] text-white/70">
  CHIANG MAI • THAILAND
</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            探索真正的清邁。
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-9 text-gray-200">
            從旅行、美食到置產，
            陪你認識這座值得慢慢生活的城市。
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#"
              className="inline-flex h-14 w-48 items-center justify-center rounded-full bg-emerald-600 text-white transition hover:bg-emerald-500"
            >
              探索清邁
            </a>

            <a
              href="#"
              className="inline-flex h-14 w-48 items-center justify-center rounded-full border border-white/50 text-white transition hover:border-white hover:bg-white/10"
              >
              加入 LINE 社群
            </a>
          </div>
        </div>
      </main>
    </>
  );
}