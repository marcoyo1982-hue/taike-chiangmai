import { notFound } from "next/navigation";
import { videos } from "@/data/videos";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function VideoDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const video = videos.find(
    (item) => item.slug === slug
  );

  if (!video) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-emerald-600 font-semibold">
        {video.category}
      </p>

      <h1 className="mt-4 text-5xl font-bold">
        {video.title}
      </h1>

      <img
        src={video.image}
        alt={video.title}
        className="mt-10 w-full rounded-3xl object-cover"
      />

      <div className="prose mt-12 max-w-none">
        影片內容（第二階段再完成）
      </div>
    </main>
  );
}