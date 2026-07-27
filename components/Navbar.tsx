import Link from "next/link";
import { site } from "@/data/site";

export default function Navbar() {
  const menus = [
    { name: "房產", href: "/property" },
    { name: "美食", href: "/food" },
    { name: "生活", href: "/life" },
    { name: "關於我", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/50 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <Link href="/" className="block">
          <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-600">
            CHIANG MAI
          </p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight text-gray-900">
            台客在清邁
          </h1>
        </Link>

        {/* Menu */}
        <ul className="hidden gap-10 text-lg font-semibold text-gray-700 md:flex">
          {menus.map((menu) => (
            <li key={menu.name}>
              <Link
                href={menu.href}
                className="transition-colors hover:text-emerald-600"
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* LINE Button */}
        <a
          href={site.lineCommunity}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-emerald-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-800"
        >
          加入 LINE 社群 →
        </a>

      </nav>
    </header>
  );
}