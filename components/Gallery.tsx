type GalleryProps = {
  folder: string;
  slug: string;
  images: string[];
  title?: string;
};

export default function Gallery({
  folder,
  slug,
  images,
  title = "照片集",
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
          {images.map((image, index) => (
            <img
              key={index}
              src={
                folder === "properties"
                  ? `/properties/${slug}/gallery/${image}.jpg`
                  : `/images/${folder}/${slug}/${image}.jpg`
              }
              alt={`${slug}-${index + 1}`}
              className="h-64 w-full rounded-2xl object-cover"
            />
          ))}
        </div>
      )}
    </section>
  );
}