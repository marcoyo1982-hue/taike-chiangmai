import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "樓下在曬什麼｜圖文閱讀版｜台客在清邁",
  description: "台客怪談 EP.05《樓下在曬什麼》完整圖文版。阿森第一次看見那隻耳朵，是在下午兩點。",
  alternates: { canonical: "/stories/ep05/read" },
};

export default function EpisodeFiveReader() {
  return (
    <main id="reader-top" className="min-h-screen bg-stone-950 text-stone-100">
      <header className="mx-auto max-w-3xl px-5 py-10 sm:py-16">
        <Link href="/stories" className="text-sm text-stone-300 underline underline-offset-4">← 返回清邁怪談</Link>
        <p className="mt-8 text-sm tracking-widest text-red-300">台客怪談 EP.05 · 圖文閱讀版</p>
        <h1 className="mt-3 text-3xl font-bold leading-snug sm:text-5xl">樓下在曬什麼</h1>
        <p className="mt-5 text-lg leading-8 text-stone-300">阿森第一次看見那隻耳朵，是在下午兩點。</p>
        <p className="mt-4 text-sm leading-7 text-stone-400">封面＋36 頁完整圖文 · 向下滑動閱讀，點選圖片可開啟大圖。</p>
        <p className="mt-6 text-xs leading-6 text-stone-400">本集為虛構創作故事，不代表真實人物、住宅或事件。</p>
      </header>
      <div className="mx-auto max-w-3xl">
        <Image src="/stories/ep05/P00_cover.png" alt="台客怪談 EP.05 樓下在曬什麼封面" width={1024} height={1536} sizes="(max-width: 768px) 100vw, 768px" className="h-auto w-full" />
        {Array.from({ length: 36 }, (_, index) => {
          const page = String(index + 1).padStart(2, "0");
          const src = `/stories/ep05/P${page}.png`;
          return (
            <figure key={page} id={`page-${page}`} className="mt-8 scroll-mt-24">
              <figcaption className="px-4 py-3 text-sm text-stone-400">P{page} / 36</figcaption>
              <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`開啟第 ${index + 1} 頁大圖（新分頁）`}>
                <Image src={`/stories/ep05/P${page}.webp`} alt={`樓下在曬什麼第 ${index + 1} 頁，含原圖對白與旁白`} width={1024} height={1536} loading="lazy" unoptimized className="h-auto w-full" />
              </a>
            </figure>
          );
        })}
      </div>
      <footer className="mx-auto max-w-3xl px-5 py-14 text-center">
        <p className="text-sm text-stone-400">每一個怪談，都有自己的規則……</p>
        <div className="mt-6 flex justify-center gap-8 text-sm">
          <a href="#reader-top" className="py-3 underline underline-offset-4">回到開頭 ↑</a>
          <Link href="/stories" className="py-3 underline underline-offset-4">返回怪談列表</Link>
        </div>
      </footer>
    </main>
  );
}
