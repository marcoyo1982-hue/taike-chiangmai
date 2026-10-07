"use client";
import { useState } from "react";

export default function PropertyInquiry({ name, slug, line }: { name: string; slug: string; line: string }) {
  const message = `台客你好，我想了解 ${name}。\nhttps://taike-chiangmai.vercel.app/property/${slug}\n我的預算：\n預計用途（自住／長住／其他）：\n預計來清邁的時間：`;
  const [status, setStatus] = useState("");
  async function copy() {
    try { await navigator.clipboard.writeText(message); setStatus("已複製，開啟 LINE 後貼上即可。"); }
    catch { setStatus("無法自動複製，請選取下方文字後複製。"); }
  }
  return <section aria-labelledby="inquiry-title" className="mt-8 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
    <h2 id="inquiry-title" className="text-2xl font-bold">想了解 {name}？</h2>
    <p className="mt-3 leading-7 text-gray-700">告訴我你的預算與用途，一起確認合適房型、當期價格及可售戶別。</p>
    <div className="mt-5 flex flex-wrap gap-3"><button type="button" onClick={copy} className="rounded-full bg-emerald-800 px-6 py-3 font-semibold text-white">複製建案詢問訊息</button><a href={line} target="_blank" rel="noopener noreferrer" className="rounded-full border border-emerald-800 bg-white px-6 py-3 font-semibold text-emerald-900">開啟 LINE 諮詢 →</a></div>
    <p role="status" className="mt-3 min-h-6 text-sm text-emerald-900">{status}</p>
    <details className="mt-2"><summary className="cursor-pointer py-2 text-sm">查看詢問訊息</summary><textarea aria-label="建案詢問訊息" readOnly value={message} rows={6} className="mt-3 w-full rounded-xl border border-emerald-200 bg-white p-4 text-sm leading-6" onFocus={(event) => event.target.select()} /></details>
  </section>;
}
