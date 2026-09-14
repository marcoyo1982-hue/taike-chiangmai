type PdfDownloadProps = {
  pdf: string;
  pdfs?: {
    label: string;
    path: string;
  }[];
};

export default function PdfDownload({
  pdf,
  pdfs,
}: PdfDownloadProps) {
  const files = pdfs ?? [{ label: "下載建案樓書", path: pdf }];

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold">
        樓書下載
      </h2>

      <div className="mt-6 flex flex-wrap gap-4">
        {files.map((file) => (
          <a
            key={file.path}
            href={file.path}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-emerald-600 px-8 py-4 text-white"
          >
            📄 {file.label}
          </a>
        ))}
      </div>
    </section>
  );
}
