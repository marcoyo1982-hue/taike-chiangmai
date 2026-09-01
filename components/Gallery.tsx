type GalleryProps = {
  folder: string;
  slug: string;
  images: string[];
  title?: string;
  downloadable?: boolean;
};

export default function Gallery({
  folder,
  slug,
  images,
  title = "照片集",
  downloadable = false,
}: GalleryProps) {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold">
        {title}
      </h2>

      {images.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed p-12 text-center text-gray-500">
          📷 照片整理中
        </div>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {images.map((image, index) => {
            const extension = image.includes(".") ? "" : ".jpg";
            const source =
              folder === "properties"
                ? `/properties/${slug}/gallery/${image}${extension}`
                : folder === "travels"
                  ? `/travels/${slug}/gallery/${image}${extension}`
                  : `/images/${folder}/${slug}/${image}${extension}`;

            return (
              <div key={image}>
                <img
                  src={source}
                  alt={`${slug}-${index + 1}`}
                  className="h-64 w-full rounded-2xl object-cover"
                />

                {downloadable && (
                  <a
                    href={source}
                    download
                    className="mt-4 inline-block rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800"
                  >
                    下載圖片
                  </a>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
