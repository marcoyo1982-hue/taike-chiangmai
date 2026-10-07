type FoodVideoProps = {
  slug: string;
  videos?: string[];
};

export default function FoodVideo({
  slug,
  videos = [],
}: FoodVideoProps) {
  if (videos.length === 0) {
    return null;
  }

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold">店家影片</h2>

      <div className="mx-auto mt-8 max-w-md space-y-8">
        {videos.map((video) => (
          <div key={video} className="overflow-hidden rounded-2xl border">
            <video controls playsInline preload="none" className="h-auto w-full">
              <source src={`/images/foods/${slug}/${video}`} type="video/mp4" />
              您的瀏覽器不支援影片播放。
            </video>
          </div>
        ))}
      </div>
    </section>
  );
}
