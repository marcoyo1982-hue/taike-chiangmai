import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "最後一班紅色雙條車｜圖文閱讀版｜台客在清邁",
  description: "清邁怪談 EP.04 圖文閱讀版。有些人，只是還沒搭上回家的車……",
  alternates: { canonical: "/stories/ep04/read" },
};

const pages = [
  {
    "file": "01.webp",
    "width": 1024,
    "height": 1536
  },
  {
    "file": "02.webp",
    "width": 1024,
    "height": 1536
  },
  {
    "file": "03.webp",
    "width": 941,
    "height": 1672
  },
  {
    "file": "04.webp",
    "width": 941,
    "height": 1672
  },
  {
    "file": "05.webp",
    "width": 941,
    "height": 1672
  },
  {
    "file": "06.webp",
    "width": 941,
    "height": 1672
  },
  {
    "file": "07.webp",
    "width": 941,
    "height": 1672
  },
  {
    "file": "08.webp",
    "width": 948,
    "height": 1659
  },
  {
    "file": "09.webp",
    "width": 948,
    "height": 1659
  },
  {
    "file": "10.webp",
    "width": 948,
    "height": 1659
  },
  {
    "file": "11.webp",
    "width": 948,
    "height": 1659
  },
  {
    "file": "12.webp",
    "width": 948,
    "height": 1659
  },
  {
    "file": "13.webp",
    "width": 948,
    "height": 1659
  },
  {
    "file": "14.webp",
    "width": 1024,
    "height": 1536
  },
  {
    "file": "15.webp",
    "width": 941,
    "height": 1672
  },
  {
    "file": "16.webp",
    "width": 1024,
    "height": 1536
  },
  {
    "file": "17.webp",
    "width": 941,
    "height": 1672
  },
  {
    "file": "18.webp",
    "width": 941,
    "height": 1672
  },
  {
    "file": "19.webp",
    "width": 1024,
    "height": 1536
  },
  {
    "file": "20.webp",
    "width": 1024,
    "height": 1536
  },
  {
    "file": "21.webp",
    "width": 941,
    "height": 1672
  },
  {
    "file": "22.webp",
    "width": 1024,
    "height": 1536
  },
  {
    "file": "23.webp",
    "width": 941,
    "height": 1672
  },
  {
    "file": "24.webp",
    "width": 941,
    "height": 1672
  },
  {
    "file": "25.webp",
    "width": 941,
    "height": 1672
  },
  {
    "file": "26.webp",
    "width": 941,
    "height": 1672
  },
  {
    "file": "27.webp",
    "width": 941,
    "height": 1672
  },
  {
    "file": "28.webp",
    "width": 1024,
    "height": 1536
  },
  {
    "file": "29.webp",
    "width": 1024,
    "height": 1536
  },
  {
    "file": "30.webp",
    "width": 941,
    "height": 1672
  },
  {
    "file": "31.webp",
    "width": 941,
    "height": 1672
  },
  {
    "file": "32.webp",
    "width": 1024,
    "height": 1536
  },
  {
    "file": "34.webp",
    "width": 1024,
    "height": 1536
  },
  {
    "file": "35.webp",
    "width": 1024,
    "height": 1536
  },
  {
    "file": "36.webp",
    "width": 1122,
    "height": 1402
  },
  {
    "file": "37.webp",
    "width": 1024,
    "height": 1536
  },
  {
    "file": "38.webp",
    "width": 1024,
    "height": 1536
  },
  {
    "file": "39.webp",
    "width": 1024,
    "height": 1536
  },
  {
    "file": "40.webp",
    "width": 1024,
    "height": 1536
  },
  {
    "file": "41.webp",
    "width": 1024,
    "height": 1536
  },
  {
    "file": "42.webp",
    "width": 1024,
    "height": 1536
  },
  {
    "file": "43.webp",
    "width": 1024,
    "height": 1536
  },
  {
    "file": "44.webp",
    "width": 1024,
    "height": 1536
  },
  {
    "file": "45.webp",
    "width": 1024,
    "height": 1536
  },
  {
    "file": "46.webp",
    "width": 1024,
    "height": 1536
  },
  {
    "file": "47.webp",
    "width": 1024,
    "height": 1536
  },
  {
    "file": "48.webp",
    "width": 1024,
    "height": 1536
  },
  {
    "file": "49.webp",
    "width": 1024,
    "height": 1536
  },
  {
    "file": "50.webp",
    "width": 1024,
    "height": 1536
  },
  {
    "file": "51.webp",
    "width": 1024,
    "height": 1536
  },
  {
    "file": "52.webp",
    "width": 1024,
    "height": 1536
  },
  {
    "file": "53.webp",
    "width": 941,
    "height": 1672
  },
  {
    "file": "54.webp",
    "width": 941,
    "height": 1672
  },
  {
    "file": "55.webp",
    "width": 1024,
    "height": 1536
  },
  {
    "file": "56.webp",
    "width": 941,
    "height": 1672
  }
];

export default function EpisodeFourReader() {
  return (
    <main id="reader-top" className="min-h-screen bg-stone-950 text-stone-100">
      <header className="mx-auto max-w-3xl px-5 py-10 sm:py-16">
        <Link href="/stories" className="text-sm text-stone-300 underline underline-offset-4">← 返回清邁怪談</Link>
        <p className="mt-8 text-sm tracking-widest text-red-300">清邁怪談 EP.04 · 圖文閱讀版</p>
        <h1 className="mt-3 text-3xl font-bold leading-snug sm:text-5xl">最後一班紅色雙條車</h1>
        <p className="mt-5 text-lg leading-8 text-stone-300">有些人，只是還沒搭上回家的車……</p>
        <p className="mt-4 text-sm leading-7 text-stone-400">向下滑動閱讀，點選圖片可開啟大圖。共 55 張劇情圖，保留原圖對白與旁白。</p>
        <a href="#story-start" className="mt-6 inline-block rounded-full bg-red-800 px-6 py-3 font-semibold hover:bg-red-700">開始閱讀 ↓</a>
        <Link href="/stories#ep04" className="ml-5 inline-block py-3 text-sm underline underline-offset-4">觀看影片版</Link>
        <p className="mt-6 text-xs leading-6 text-stone-400">本集為虛構創作故事，不代表真實交通業者、人物或事件。</p>
      </header>
      <div className="mx-auto max-w-3xl">
        <Image src="/stories/ep04/cover.png" alt="最後一班紅色雙條車封面" width={1024} height={1536} className="h-auto w-full" sizes="(max-width: 768px) 100vw, 768px" />
        <div id="story-start" className="scroll-mt-24">
          {pages.map((page, index) => (
            <figure key={page.file} id={`image-${index + 1}`} className="mt-8 scroll-mt-24">
              <figcaption className="px-4 py-3 text-sm text-stone-400">{String(index + 1).padStart(2, "0")} / {pages.length}</figcaption>
              <a href={`/stories/ep04/pages/${page.file}`} target="_blank" rel="noopener noreferrer" aria-label={`開啟第 ${index + 1} 張劇情圖大圖（新分頁）`}>
                <Image src={`/stories/ep04/pages/${page.file}`} alt={`最後一班紅色雙條車，第 ${index + 1} 張劇情圖，含對白與旁白`} width={page.width} height={page.height} loading="lazy" unoptimized className="h-auto w-full" />
              </a>
            </figure>
          ))}
        </div>
      </div>
      <footer className="mx-auto max-w-3xl px-5 py-16 text-center">
        <p className="text-xl tracking-widest">台客在清邁 · 清邁怪談</p>
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
          <a href="#reader-top" className="py-3 underline underline-offset-4">回到開頭 ↑</a>
          <Link href="/stories" className="py-3 underline underline-offset-4">返回怪談列表</Link>
          <Link href="/stories#ep04" className="py-3 underline underline-offset-4">觀看影片版</Link>
        </div>
      </footer>
    </main>
  );
}
