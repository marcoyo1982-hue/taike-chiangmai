type PdfDownloadProps = {
  pdf: string;
};

export default function PdfDownload({
  pdf,
}: PdfDownloadProps) {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold">
        樓書下載
      </h2>

      <a
        href={pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block rounded-full bg-emerald-600 px-8 py-4 text-white"
      >
        📄 下載建案樓書
      </a>
    </section>
  );
}