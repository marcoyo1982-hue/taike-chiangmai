type GoogleMapProps = {
  embed: string;
  link: string;
};

export default function GoogleMap({
  embed,
  link,
}: GoogleMapProps) {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold">
        Google Maps
      </h2>

      {!embed ? (
        <div className="mt-8 rounded-2xl border border-dashed p-12 text-center text-gray-500">
          🗺 地圖整理中
        </div>
      ) : (
        <>
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

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-emerald-600 px-8 py-4 text-white"
          >
            📍 在 Google Maps 開啟
          </a>
        </>
      )}
    </section>
  );
}