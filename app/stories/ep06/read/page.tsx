import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "素帖山，別往樹上照｜台客怪談 EP.06｜台客在清邁",
  description: "台客怪談 EP.06《素帖山，別往樹上照》43 頁完整黑白漫畫，大字圖文閱讀版。每一個怪談，都有自己的規則。",
  alternates: { canonical: "/stories/ep06/read" },
  openGraph: { title: "台客怪談 EP.06｜素帖山，別往樹上照", description: "43 頁完整黑白漫畫・大字圖文閱讀版", url: "/stories/ep06/read", images: ["/stories/ep06/P01.png"] },
};

const pages = Array.from({ length: 43 }, (_, index) => String(index + 1).padStart(2, "0"));

export default function EpisodeSixReader() {
  return (
    <main id="reader-top" className="min-h-screen bg-stone-950 text-stone-100">
      <header className="mx-auto max-w-4xl px-5 py-10 sm:py-16">
        <Link href="/stories" className="text-sm text-stone-300 underline underline-offset-4">← 返回清邁怪談</Link>
        <p className="mt-8 text-sm tracking-widest text-red-300">台客怪談 EP.06 · 完整漫畫</p>
        <h1 className="mt-3 text-3xl font-bold leading-snug sm:text-5xl">素帖山，別往樹上照</h1>
        <p className="mt-5 text-lg leading-8 text-stone-300">每一個怪談，都有自己的規則。</p>
        <p className="mt-4 text-sm leading-7 text-stone-400">43 頁大字圖文版 · 向下滑動閱讀，點選圖片可開啟原尺寸大圖。</p>
        <details className="mt-6 rounded-xl border border-stone-700 p-4">
          <summary className="cursor-pointer py-2">跳到指定頁</summary>
          <nav aria-label="漫畫頁碼" className="mt-3 flex flex-wrap gap-2">
            {pages.map(page => <a key={page} href={`#page-${page}`} className="rounded border border-stone-700 px-3 py-3 hover:bg-stone-800">P{page}</a>)}
          </nav>
        </details>
        <p className="mt-6 text-xs leading-6 text-stone-400">本集為虛構創作故事，不代表真實人物、景點或事件。</p>
      </header>
      <div className="mx-auto max-w-4xl">
        {pages.map((page, index) => (
          <figure key={page} id={`page-${page}`} className="mb-8 scroll-mt-24">
            <figcaption className="px-4 py-3 text-sm text-stone-400">P{page} / 43</figcaption>
            <a href={`/stories/ep06/P${page}.png`} target="_blank" rel="noopener noreferrer" aria-label={`開啟第 ${index + 1} 頁原尺寸大圖（新分頁）`}>
              <Image src={`/stories/ep06/P${page}.webp`} alt={`素帖山，別往樹上照，第 ${index + 1} 頁，含大字旁白與對白`} width={1024} height={1536} loading={index === 0 ? "eager" : "lazy"} unoptimized className="h-auto w-full" />
            </a>
          </figure>
        ))}
      </div>
      <footer className="mx-auto max-w-4xl px-5 py-14 text-center">
        <p className="text-lg text-stone-300">EP.06 完</p>
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
          <a href="#reader-top" className="py-3 underline underline-offset-4">回到開頭 ↑</a>
          <Link href="/stories" className="py-3 underline underline-offset-4">返回怪談列表</Link>
          <Link href="/stories/ep05/read" className="py-3 underline underline-offset-4">閱讀 EP.05｜樓下在曬什麼</Link>
        </div>
      </footer>
    </main>
  );
}
