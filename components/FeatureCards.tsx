import Link from "next/link";

export default function FeatureCards() {
  const cards = [
    {
      title: "清邁置產",
      desc: "買房流程、建案介紹與置產觀念。",
      icon: "🏠",
      href: "/property",
    },
    {
      title: "在地美食",
      desc: "台客親自吃過，值得推薦的餐廳。",
      icon: "🍜",
      href: "/food",
    },
  
    {
      title: "清邁生活",
      desc: "在地生活、文化差異與真實日常。",
      icon: "🌿",
      href: "/life",
    },
    
  ];

  return (
    <section id="discover" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold text-gray-900">
          找到屬於你的清邁
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-8 text-gray-500">
          從房產、美食、旅遊到生活，選擇你最有興趣的主題開始探索。
        </p>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-5xl">{card.icon}</div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {card.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-500">
                {card.desc}
              </p>

              <div className="mt-6 text-sm font-semibold text-emerald-600">
                了解更多 →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}