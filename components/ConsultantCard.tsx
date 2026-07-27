type ConsultantCardProps = {
  personalLine: string;
  lineCommunity: string;
};

export default function ConsultantCard({
  personalLine,
  lineCommunity,
}: ConsultantCardProps) {
  return (
    <section className="mt-24 rounded-3xl border border-gray-200 bg-white p-14 shadow-sm">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center">

        {/* 左側照片 */}
        <div className="flex justify-center lg:w-64">
          <img
            src="/images/marco.jpg"
            alt="Marco｜台客在清邁"
            className="h-48 w-48 rounded-full border-4 border-emerald-100 object-cover shadow-lg"
          />
        </div>

        {/* 右側內容 */}
        <div className="flex-1">

          <h2 className="text-4xl font-bold text-gray-900">
            認識 Marco｜台客在清邁
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">

            <span className="rounded-full bg-emerald-50 px-4 py-2 text-base font-medium text-emerald-700">
              👥 16,000+ 粉絲追蹤
            </span>

            <span className="rounded-full bg-emerald-50 px-4 py-2 text-base font-medium text-emerald-700">
              🇹🇭 定居清邁多年
            </span>

            <span className="rounded-full bg-emerald-50 px-4 py-2 text-base font-medium text-emerald-700">
              🏡 專注清邁房產
            </span>

          </div>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            定居清邁多年，分享在地生活、旅遊、美食與房產資訊。
            協助台灣朋友了解清邁房市、分析建案特色、購屋流程，
            以及交屋後的代租代管等相關服務，希望讓每一位來到清邁的人，
            都能更安心、更深入認識這座值得慢慢生活的城市。
          </p>

          <div className="mt-10 grid gap-4 text-lg md:grid-cols-2">

            <div>✅ 最新售價</div>
            <div>✅ 剩餘戶數</div>
            <div>✅ 建案比較分析</div>
            <div>✅ 海外付款流程</div>
            <div>✅ 預約現場賞屋</div>

          </div>

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href={personalLine}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-600 px-10 py-4 text-lg font-semibold text-white transition hover:bg-emerald-700"
            >
              💬 LINE 聯絡 Marco
            </a>

            <a
              href={lineCommunity}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-300 px-10 py-4 text-lg font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              👥 加入 LINE 社群
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}