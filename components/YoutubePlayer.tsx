type YoutubePlayerProps = {
  url: string;
};

export default function YoutubePlayer({
  url,
}: YoutubePlayerProps) {

  // 沒有影片就不顯示
  if (!url) {
    return null;
  }

  let videoId = "";

  try {
    const youtubeUrl = new URL(url);
    videoId = youtubeUrl.searchParams.get("v") ?? "";
  } catch {
    return null;
  }

  if (!videoId) {
    return null;
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold">
        建案影片
      </h2>

      <div className="mt-8 overflow-hidden rounded-2xl border">
        <iframe
          src={embedUrl}
          width="100%"
          height="500"
          allowFullScreen
          title="YouTube Video"
        />
      </div>
    </section>
  );
}