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
      <section className="mt-24">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600">
            PROPERTY INFO
          </p>

          <h2 className="mt-2 text-4xl font-extrabold text-gray-900">
            建案基本資訊
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          <InfoCard title="📍 區域" value={info.location} />
          <InfoCard title="🏢 建商" value={info.developer} />
          <InfoCard title="🏠 產權" value={info.ownership} />
          <InfoCard title="🏗 完工時間" value={info.completion} />
          <InfoCard title="🏢 樓層" value={info.floors} />
          <InfoCard title="🏘 總戶數" value={info.units} />
          <InfoCard title="🛏 房型" value={info.roomTypes.join("、")} />
          <InfoCard title="📐 使用面積" value={info.size} />
          <InfoCard title="💰 售價" value={info.price} />

        </div>
      </section>

      <section className="mt-28">

        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600">
            LOCATION
          </p>

          <h2 className="mt-2 text-4xl font-extrabold text-gray-900">
            周邊生活機能
          </h2>
        </div>

        <div className="space-y-5">

          {landmarks.map((item, index) => (

            <div
              key={index}
              className="group flex items-center justify-between rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:shadow-xl"
            >

              <div className="flex items-center gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-3xl">
                  {item.icon}
                </div>

                <div>

                  <p className="text-lg font-bold text-gray-900">
                    {item.title}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    開車約 {item.time}
                  </p>

                </div>

              </div>

              <div className="rounded-full bg-emerald-600 px-5 py-2 font-semibold text-white">
                {item.time}
              </div>

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
    <div className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:shadow-xl">

      <p className="text-sm font-medium text-gray-500">
        {title}
      </p>

      <p className="mt-4 text-xl font-bold text-gray-900">
        {value}
      </p>

    </div>
  );
}