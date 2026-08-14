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
    <header className="sticky top-0 z-50 border-b border-gray-200/50 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:h-24 lg:px-8">

        {/* Logo */}
        <Link href="/" className="block shrink-0">
          <p className="text-[9px] uppercase tracking-[0.45em] text-emerald-600 lg:text-[11px]">
            CHIANG MAI
          </p>

          <h1 className="mt-0.5 text-xl font-bold tracking-tight text-gray-900 lg:mt-1 lg:text-2xl">
            台客在清邁
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden gap-10 text-lg font-semibold text-gray-700 lg:flex">
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

        {/* LINE */}
        <a
          href={site.personalLine}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-emerald-700 px-4 py-2 text-xs font-semibold text-white transition hover:bg-emerald-800 lg:px-6 lg:py-3 lg:text-sm"
        >
          諮詢房產
        </a>

      </nav>
    </header>
  );
}
