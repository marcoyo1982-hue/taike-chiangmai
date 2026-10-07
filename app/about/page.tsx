import AboutMe from "@/components/AboutMe";
import { site } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "關於台客｜清邁生活與房產諮詢", description: "認識住在清邁的台客，了解房產諮詢前可以準備哪些需求。", alternates: { canonical: "/about" }, openGraph: { title: "關於台客", description: "分享清邁生活，陪你了解合適的房產與生活圈。", images: ["/images/about/taike-v2.jpg"] } };

export default function AboutPage() {
  return (
    <main className="pt-16">
      <h1 className="mx-auto max-w-6xl px-6 text-3xl font-bold sm:text-5xl">認識台客在清邁</h1>
      <AboutMe />
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-3xl font-bold">想在清邁找房，可以從這裡開始</h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ["01｜聊聊你的需求", "先告訴我預算、自住或長住用途，以及預計來清邁的時間。"],
            ["02｜比較建案與生活圈", "一起了解房型、面積與日常機能，再確認當期售價和可售戶別。"],
            ["03｜討論下一步", "有感興趣的建案後，再聊賞屋安排，以及購屋、交屋前需要確認的事項。"],
          ].map(([title, description]) => <li key={title} className="rounded-2xl border border-stone-200 bg-white p-6"><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 leading-8 text-gray-600">{description}</p></li>)}
        </ol>
        <a href={site.personalLine} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-emerald-800 px-7 py-4 font-semibold text-white">用 LINE 聊聊找房需求 →</a>
      </section>
    </main>
  );
}
