type FoodInfoProps = {
  address: string;
  openingHours: string;
  phone: string;
  price: string;
};

export default function FoodInfo({
  address,
  openingHours,
  phone,
  price,
}: FoodInfoProps) {
  return (
    <section className="mt-20">

      <h2 className="text-3xl font-bold">
        店家資訊
      </h2>

      <div className="mt-8 grid gap-5 md:grid-cols-2">

        <InfoCard
          title="📍 地址"
          value={address}
        />

        <InfoCard
          title="🕒 營業時間"
          value={openingHours}
        />

        <InfoCard
          title="☎️ 電話"
          value={phone}
        />

        <InfoCard
          title="💰 平均消費"
          value={price}
        />

      </div>

    </section>
  );
}

function InfoCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border p-5">
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <p className="mt-2 font-semibold">
        {value || "-"}
      </p>
    </div>
  );
}