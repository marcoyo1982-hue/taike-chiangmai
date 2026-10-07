import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "清邁怪談｜EP.03 第三道門｜台客在清邁",
  description: "每一個怪談，都有自己的規則。觀看《清邁怪談》EP.03《第三道門》完整配音漫劇。",
  alternates: { canonical: "/stories" },
  openGraph: { title: "清邁怪談｜第三道門", description: "它不是想嚇你，它只是想變成你。台客在清邁原創怪談系列。", url: "/stories", images: ["/stories/ep03/cover.png"] },
};

export default function StoriesPage() {
  return <main className="bg-stone-950 text-stone-100">
    <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
      <p className="text-sm tracking-[0.25em] text-red-300">台客在清邁 · 原創漫劇</p>
      <h1 className="mt-4 text-4xl font-bold tracking-wider sm:text-6xl">清邁怪談</h1>
      <p className="mt-6 max-w-2xl text-lg leading-9 text-stone-300">每一個怪談，都有自己的規則。<br />而你通常是在違反規則以後，才知道規則存在。</p>
      <article className="mt-12 grid items-start gap-10 md:grid-cols-[1fr_1.2fr]">
        <Image src="/stories/ep03/cover.png" alt="清邁怪談 EP.03 第三道門封面：阿森坐在床邊望向半開的門" width={1024} height={1536} sizes="(max-width: 767px) 100vw, 42vw" className="h-auto w-full rounded-2xl" />
        <div className="py-2 md:py-8">
          <p className="text-sm font-semibold tracking-widest text-red-300">EP.03 · 完整配音版 · 約 16 分鐘</p>
          <h2 className="mt-4 text-4xl font-bold">第三道門</h2>
          <p lang="th" className="mt-3 text-stone-400">ประตูบานที่สาม</p>
          <p className="mt-8 text-2xl leading-relaxed">它不是想嚇你，<br />它只是想<span className="text-red-400">變成你</span>。</p>
          <p className="mt-6 leading-8 text-stone-300">接近晚上十一點，阿森入住一間看起來不舊的旅館。暖黃色燈光、木頭牆面，一切都很正常。大廳最裡面，卻掛著一張很舊的黑白照片。</p>
          <a href="#ep03" className="mt-8 inline-flex rounded-full bg-red-800 px-7 py-4 font-semibold text-white hover:bg-red-700">觀看完整漫劇 ↓</a>
          <p className="mt-8 border-t border-stone-800 pt-5 text-sm leading-7 text-stone-400">本系列為創作故事，與網站的旅遊、房產及生活資訊分開呈現。故事不代表真實旅館或事件。</p>
        </div>
      </article>
      <section id="ep03" className="scroll-mt-28 pt-16" aria-labelledby="episode-player-title">
        <h2 id="episode-player-title" className="text-2xl font-bold">EP.03｜第三道門・完整漫劇</h2>
        <p className="mt-3 text-sm leading-7 text-stone-400">含封面、01–38 頁、女生旁白與劇情配樂。建議開啟聲音觀看。</p>
        <video controls playsInline preload="none" poster="/stories/ep03/cover.png" aria-label="清邁怪談第三道門完整配音影片" className="mx-auto mt-8 max-h-[85vh] w-full max-w-2xl rounded-xl bg-black">
          <source src="/stories/ep03/third-door.mp4" type="video/mp4" />
          你的瀏覽器不支援此影片，請使用下方連結開啟。
        </video>
        <a href="/stories/ep03/third-door.mp4" className="mt-4 inline-block py-2 text-sm text-stone-300 underline underline-offset-4">直接開啟影片</a>
      </section>
      <details className="mt-12 border-t border-stone-800 pt-6 text-sm leading-7 text-stone-400">
        <summary className="cursor-pointer py-2">配樂與授權</summary>
        <p className="mt-3">Unseen Horrors — Kevin MacLeod (incompetech.com)</p>
        <p><a className="underline" href="https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1400043" target="_blank" rel="noopener noreferrer">音樂來源</a> · <a className="underline" href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer">Creative Commons BY 3.0 授權</a></p>
        <p>配樂經節錄、重新編排、淡入淡出、等化與旁白混音。</p>
      </details>
    </div>
  </main>;
}
