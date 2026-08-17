type TravelInfoProps = {
  address: string;
  openingHours: string;
  ticket: string;
  transportation: string;
  phone?: string;
};

export default function TravelInfo({
  address,
  openingHours,
  ticket,
  transportation,
  phone,
}: TravelInfoProps) {
  return (
    <section className="mt-16 rounded-3xl border p-8">

      <h2 className="text-3xl font-bold">
        景點資訊
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <div>
          <h3 className="font-semibold text-gray-900">
            📍 地址
          </h3>

          <p className="mt-2 text-gray-600">
            {address}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">
            🕒 開放時間
          </h3>

          <p className="mt-2 text-gray-600">
            {openingHours}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">
            🎫 門票
          </h3>

          <p className="mt-2 text-gray-600">
            {ticket}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">
            🚗 交通方式
          </h3>

          <p className="mt-2 text-gray-600">
            {transportation}
          </p>
        </div>

        {phone && (
          <div>
            <h3 className="font-semibold text-gray-900">📞 電話</h3>

            <a href={`tel:${phone.replaceAll(" ", "")}`} className="mt-2 block text-emerald-700 hover:underline">
              {phone}
            </a>
          </div>
        )}

      </div>

    </section>
  );
}
