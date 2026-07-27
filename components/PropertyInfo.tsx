type Landmark = {
  icon: string;
  title: string;
  time: string;
};

type Info = {
  location: string;
  developer: string;
  ownership: string;
  completion: string;
  floors: string;
  units: string;
  roomTypes: string[];
  size: string;
  price: string;
};

type PropertyInfoProps = {
  info: Info;
  landmarks: Landmark[];
};

export default function PropertyInfo({
  info,
  landmarks,
}: PropertyInfoProps) {
  return (
    <>
      <section className="mt-20">
        <h2 className="text-3xl font-bold">
          建案基本資訊
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          <InfoCard title="📍 區域" value={info.location} />
          <InfoCard title="🏢 建商" value={info.developer} />
          <InfoCard title="🏠 產權" value={info.ownership} />
          <InfoCard title="🏗 完工時間" value={info.completion} />
          <InfoCard title="🏢 樓層" value={info.floors} />
          <InfoCard title="🏘 總戶數" value={info.units} />
          <InfoCard
            title="🛏 房型"
            value={info.roomTypes.join("、")}
          />
          <InfoCard title="📐 使用面積" value={info.size} />
          <InfoCard title="💰 售價" value={info.price} />

        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-bold">
          📍 周邊生活機能
        </h2>

        <div className="mt-8 space-y-4">
          {landmarks.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-xl border p-5"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">
                  {item.icon}
                </span>

                <span className="font-medium">
                  {item.title}
                </span>
              </div>

              <span className="font-semibold text-emerald-600">
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
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
        {value}
      </p>
    </div>
  );
}