type GoogleMapProps = {
  embed: string;
  link: string;
};

export default function GoogleMap({ embed, link }: GoogleMapProps) {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold">Google Maps</h2>

      {embed ? (
        <div className="mt-8 overflow-hidden rounded-2xl border">
          <iframe
            key={embed}
            src={embed}
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      ) : (
        <p className="mt-4 text-gray-600">
          點擊下方按鈕，可直接在 Google Maps 查看店家位置與導航。
        </p>
      )}

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block rounded-full bg-emerald-600 px-8 py-4 text-white transition hover:bg-emerald-700"
      >
        在 Google Maps 開啟
      </a>
    </section>
  );
}
