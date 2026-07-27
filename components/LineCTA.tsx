type LineCTAProps = {
  line: string;
};

export default function LineCTA({ line }: LineCTAProps) {
  return (
    <section className="mt-20 rounded-3xl bg-emerald-50 p-10 text-center">
      <h2 className="text-3xl font-bold">
        📩 想了解這個建案？
      </h2>

      <div className="mt-8 space-y-2 text-lg">
        <p>✔ 預約線上諮詢</p>
        <p>✔ 預約現場賞屋</p>
        <p>✔ 索取最新價格</p>
        <p>✔ 詢問剩餘房型</p>
      </div>

      <a
        href={line}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded-full bg-emerald-600 px-10 py-4 font-semibold text-white"
      >
        💬 加入 LINE
      </a>
    </section>
  );
}