type LineCTAProps = {
  line: string;
};

export default function LineCTA({ line }: LineCTAProps) {
  return (
    <section className="mt-20 rounded-[2rem] bg-emerald-700 p-8 text-center text-white shadow-xl sm:p-12">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-100">
        KEEP EXPLORING
      </p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
        想更了解清邁？直接來聊聊
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-50">
        無論是旅行規劃、長住生活、美食推薦或房產問題，都歡迎加入 LINE 社群交流。
      </p>

      <a
        href={line}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center rounded-full bg-white px-8 py-4 font-semibold text-emerald-800 transition hover:-translate-y-0.5 hover:bg-emerald-50"
      >
        加入 LINE 社群 →
      </a>
    </section>
  );
}
