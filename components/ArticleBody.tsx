function inline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={index} className="font-semibold text-gray-900">{part.slice(2, -2)}</strong>
      : part,
  );
}

export default function ArticleBody({ text }: { text: string }) {
  return <div className="mt-6 space-y-5 text-base leading-8 text-gray-700 sm:text-lg">
    {text.split(/\r?\n/).map((line, index) => {
      const value = line.trim();
      if (!value) return null;
      if (/^-{3,}$/.test(value)) return <hr key={index} className="my-8 border-gray-200" />;
      if (/^#{1,3}\s/.test(value)) return <h3 key={index} className="pt-4 text-xl font-bold">{inline(value.replace(/^#{1,3}\s+/, ""))}</h3>;
      return <p key={index}>{inline(value)}</p>;
    })}
  </div>;
}
