type Props = {
  items: string[];
};

export default function FoodRecommend({
  items,
}: Props) {
  if (items.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold">
        🍴 推薦必點
      </h2>

      <div className="mt-8 space-y-4">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-2xl border p-5"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}