type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  faqs: FAQItem[];
};

export default function FAQ({
  faqs,
}: FAQProps) {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold">
        常見問題
      </h2>

      {faqs.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed p-12 text-center text-gray-500">
          ❓ 常見問題整理中
        </div>
      ) : (
        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="rounded-2xl border p-5"
            >
              <summary className="cursor-pointer font-semibold">
                {faq.question}
              </summary>

              <p className="mt-4 text-gray-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      )}
    </section>
  );
}