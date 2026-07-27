type Props = {
  rating: string;
};

export default function FoodRating({
  rating,
}: Props) {
  return (
    <section className="mt-12 rounded-3xl border border-emerald-100 bg-emerald-50 p-8">

      <p className="text-sm font-semibold tracking-widest text-emerald-700 uppercase">
        台客推薦指數
      </p>

      <h2 className="mt-3 text-5xl font-bold text-emerald-600">
        {rating}
      </h2>

      <p className="mt-3 text-gray-600">
        台客親自探訪體驗，不代表 Google 評價。
      </p>

    </section>
  );
}