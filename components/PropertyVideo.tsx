type PropertyVideoProps = {
  slug: string;
  videos: string[];
};

export default function PropertyVideo({
  slug,
  videos,
}: PropertyVideoProps) {
  if (!videos || videos.length === 0) {
    return null;
  }

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold">
        建案影片
      </h2>

      <div className="mt-8 space-y-8 max-w-md mx-auto">
        {videos.map((video) => (
          <div
            key={video}
            className="overflow-hidden rounded-2xl border"
          >
            <video
              controls
              className="w-full h-auto"
            >
              <source
                src={`/properties/${slug}/${video}`}
                type="video/mp4"
              />
              您的瀏覽器不支援影片播放。
            </video>
          </div>
        ))}
      </div>
    </section>
  );
}